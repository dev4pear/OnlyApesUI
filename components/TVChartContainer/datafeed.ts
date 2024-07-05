import {
  Bar,
  DatafeedConfiguration,
  ErrorCallback,
  HistoryCallback,
  LibrarySymbolInfo,
  OnReadyCallback,
  PeriodParams,
  ResolutionString,
  ResolveCallback,
  SubscribeBarsCallback,
  SymbolResolveExtension,
  Timezone,
} from 'charting_library';
import client from 'graphql/apolloClient';
import { GET_PRICE_DATA } from 'graphql/queries';
import { useMemo, useRef } from 'react';

let startTime = 0,
  currentPair = '';

export const SUPPORTED_RESOLUTIONS = {
  5: '5m',
  15: '15m',
  30: '30m',
  60: '1h',
  120: '2h',
  240: '4h',
  '1D': '1d',
  '3D': '3d',
  '1W': '1w',
  '1M': '1M',
} as const;

export type SUPPORTED_RESOLUTIONS_KEYS = keyof typeof SUPPORTED_RESOLUTIONS;

export const CHART_PERIODS = {
  '5m': 60 * 5,
  '15m': 60 * 15,
  '30m': 60 * 30,
  '1h': 60 * 60,
  '2h': 60 * 60 * 2,
  '4h': 60 * 60 * 4,
  '1d': 60 * 60 * 24,
  '3d': 60 * 60 * 24 * 3,
  '1w': 60 * 60 * 24 * 7,
  '1m': 60 * 60 * 24 * 30,
};

export type CHART_KEYS = keyof typeof CHART_PERIODS;

const BINANCE_URL = 'https://fapi.binance.com/fapi/v1';
const BINANCE_URL_V2 = 'https://fapi.binance.com/fapi/v2';

const configurationData: DatafeedConfiguration = {
  // Represents the resolutions for bars supported by your datafeed
  supported_resolutions: Object.keys(
    SUPPORTED_RESOLUTIONS,
  ) as ResolutionString[],
  exchanges: [{ value: 'Binance', name: 'Binance', desc: 'Binance' }],
  // The `symbols_types` arguments are used for the `searchSymbols` method if a user selects this symbol type
  symbols_types: [{ name: 'crypto', value: 'crypto' }],
  // supports_marks: false,
  // supports_timescale_marks: false,
  supports_time: true,
};

// Use it to keep a record of the most recent bar on the chart
const lastBarsCache = new Map();

export function getTokenSplit(tokenSymbol: string) {
  const tokens = tokenSymbol.split('/');
  console.log('tokens', tokens);

  return [tokens[0], tokens[1]] as const;
}

export const getSymbolItem = (symbolName: string) => {
  return {
    symbol: symbolName,
    full_name: symbolName,
    description: symbolName,
    exchange: '',
    type: 'crypto',
  };
};

const mergeBars = (long: Bar[], short: Bar[], count: number) => {
  const bars: Bar[] = [];

  let i = 0,
    j = 0;
  while (i < long.length && long[i].time < short[0].time) i++;
  while (j < short.length && short[j].time < long[0].time) j++;

  while (
    i < long.length &&
    j < short.length &&
    long[i].time === short[j].time
  ) {
    const bar: Bar = {
      time: long[i].time,
      open: long[i].open / short[j].open,
      high: long[i].high / short[j].high,
      low: long[i].low / short[j].low,
      close: long[i].close / short[j].close,
    };

    bars.push(bar);
    i++, j++;
  }

  return bars;
};

function getCurrentBarTimestamp(periodSeconds: number) {
  return (
    Math.floor(Date.now() / (periodSeconds * 1000)) * (periodSeconds * 1000)
  );
}

export const timezoneOffset = -new Date().getTimezoneOffset() * 60;

export function fillBarGaps(prices: any[], periodSeconds: number) {
  if (prices.length < 2) return prices;

  const currentBarTimestamp =
    getCurrentBarTimestamp(periodSeconds) / 1000 + timezoneOffset;
  const lastBar = prices[prices.length - 1];

  if (lastBar.time !== currentBarTimestamp) {
    lastBar[0] = currentBarTimestamp;
    prices.push(lastBar);
  }

  const currentBar: Bar = {
    time: prices[0][0] / 1000,
    open: prices[0][1],
    high: prices[0][2],
    low: prices[0][3],
    close: prices[0][4],
  };
  const newPrices = [currentBar];
  let prevTime = currentBar.time;

  for (let i = 1; i < prices.length; i++) {
    const time = prices[i][0];
    const open = prices[i][1];
    if (prevTime) {
      let numBarsToFill = 0;
      // if (periodSeconds >= 86400) {
      //   numBarsToFill = Math.floor((time - prevTime) / periodSeconds) - 1
      // } else
      if (periodSeconds < 86400) {
        numBarsToFill =
          Math.floor((time / 1000 - prevTime) / periodSeconds) - 1;
      }
      for (let j = numBarsToFill; j > 0; j--) {
        const newBar = {
          time: time - j * periodSeconds,
          open,
          close: open,
          high: open * 1.0003,
          low: open * 0.9996,
        };
        newPrices.push(newBar);
      }
    }

    const bar: Bar = {
      time: prices[i][0] / 1000,
      open: prices[i][1],
      high: prices[i][2],
      low: prices[i][3],
      close: prices[i][4],
    };
    prevTime = time;
    newPrices.push(bar);
  }

  return newPrices;
}

export function getCurrentCandleTime(period: string) {
  // Converts current time to seconds, rounds down to nearest period, adds timezone offset, and converts back to milliseconds
  const periodSeconds = CHART_PERIODS[period as CHART_KEYS];
  return (
    Math.floor(Date.now() / 1000 / periodSeconds) * periodSeconds +
    timezoneOffset
  );
}

export function formatTimeInBarToMs(bar: Bar) {
  return {
    ...bar,
    time: bar.time * 1000,
  };
}

const getBars = async (
  ticker: string,
  period: string,
  periodParams: PeriodParams,
) => {
  if (
    periodParams.from < 0 ||
    periodParams.to < 0 ||
    (currentPair === ticker && startTime > periodParams.to)
  )
    return [];
  const url = `${BINANCE_URL}/markPriceKlines?symbol=${ticker}&interval=${period}&limit=1000`;

  let bars = [];

  try {
    bars = await fetch(url).then((r) => r.json());
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }

  const filledBars = fillBarGaps(bars, CHART_PERIODS[period as CHART_KEYS]);

  const { from, to, countBack } = periodParams;
  const toWithOffset = to + timezoneOffset;
  const fromWithOffset = from + timezoneOffset;
  bars = filledBars.filter(
    (bar) => bar.time > fromWithOffset && bar.time <= toWithOffset,
  );

  // if no bars returned, return empty array
  if (!bars.length) {
    startTime = periodParams.to;
    currentPair = ticker;
    return [];
  }

  // if bars are fewer than countBack, return all of them
  if (bars.length < countBack) {
    const _bars = bars.map((x) => {
      return {
        ...x,
        time: x.time - 86400,
      };
    });
    return _bars.sort((a, b) => a.time - b.time).map(formatTimeInBarToMs);
  }

  // if bars are more than countBack, return latest bars
  bars = bars.slice(bars.length - countBack, bars.length);
  const _bars = bars.map((x) => {
    return {
      ...x,
      time: x.time - 86400,
    };
  });
  return _bars.sort((a, b) => a.time - b.time).map(formatTimeInBarToMs);
};

type Price = {
  symbol: string;
  price: string;
};

const getCurrentPriceOfToken = async (ticker: string) => {
  const url = `${BINANCE_URL_V2}/ticker/price?symbol=${ticker}`;

  try {
    const prices = await fetch(url).then((r) => r.json());
    return prices as Price;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

export const getLiveBars = async (ticker: string, resolution: string) => {
  const interval =
    SUPPORTED_RESOLUTIONS[resolution as SUPPORTED_RESOLUTIONS_KEYS];
  const currentCandleTime = getCurrentCandleTime(interval);
  let lastBar = lastBarsCache.get(ticker);
  // console.log('[subscribeBars]: Live Last Bar', lastBar)
  const [longSymbol, shortSymbol] = getTokenSplit(ticker);

  if (!lastBar) return;

  const currentPriceLong = (await getCurrentPriceOfToken(longSymbol))?.price;
  const currentPriceShort = (await getCurrentPriceOfToken(shortSymbol))?.price;

  if (!currentPriceLong || !currentPriceShort) return;

  const currentPrice = Number(currentPriceLong) / Number(currentPriceShort);

  const averagePriceValue = currentPrice;
  console.log('average price', averagePriceValue);

  if (
    lastBar.time &&
    currentCandleTime === lastBar.time &&
    ticker === lastBar.ticker
  ) {
    const newBar = {
      ...lastBar,
      close: averagePriceValue,
      high: Math.max(lastBar.open, lastBar.high, averagePriceValue),
      low: Math.min(lastBar.open, lastBar.low, averagePriceValue),
      ticker,
    };
    // console.log('[subscribeBars]: Live Bar same time', newBar)
    return newBar;
  } else {
    const newBar = {
      time: currentCandleTime,
      open: lastBar.close,
      close: averagePriceValue,
      high: Math.max(lastBar.close, averagePriceValue),
      low: Math.min(lastBar.close, averagePriceValue),
      ticker,
    };
    // console.log('[subscribeBars]: Live Bar new time', newBar)
    lastBarsCache.set(ticker, newBar);
    lastBar = newBar;
    return lastBar;
  }
};

export const useDataFeed = ({ address }: { address?: string }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>();

  return useMemo(() => {
    return {
      onReady: (callback: OnReadyCallback) => {
        console.log('[onReady]: Method call');
        setTimeout(() => callback(configurationData));
      },
      searchSymbols: (
        userInput: any,
        exchange: any,
        symbolType: any,
        onResultReadyCallback: any,
      ) => {
        console.log('[searchSymbols]: Method call');
      },
      resolveSymbol: async (
        symbolName: string,
        onSymbolResolvedCallback: ResolveCallback,
        onResolveErrorCallback: ErrorCallback,
        extension: SymbolResolveExtension,
      ) => {
        console.log('[resolveSymbol]: Method call', symbolName);
        // const tokens = getTokenSplit(symbolName);
        const symbolItem = getSymbolItem(symbolName);
        const tz: Timezone = 'Etc/UTC';

        // const [longSymbol, shortSymbol] = symbolName.split('/');

        // if (!lastBar) return;

        // const currentPriceLong = (await getCurrentPriceOfToken(longSymbol))
        //   ?.price;
        // const currentPriceShort = (await getCurrentPriceOfToken(shortSymbol))
        //   ?.price;

        // if (!currentPriceLong || !currentPriceShort) return;

        const currentPrice = 0;
        //   Number(currentPriceLong) / Number(currentPriceShort);

        let m = 9;
        if (currentPrice > 0.00001) m = 5;
        else m = 9;
        const scale = Math.pow(10, m);

        const symbolInfo: LibrarySymbolInfo = {
          full_name: symbolItem.full_name,
          ticker: symbolItem.full_name,
          name: symbolItem.symbol,
          description: symbolItem.description,
          type: symbolItem.type,
          listed_exchange: symbolItem.exchange,
          session: '24x7',
          timezone: tz,
          exchange: symbolItem.exchange,
          minmov: 1,
          pricescale: scale,
          has_intraday: true,
          has_weekly_and_monthly: true,
          supported_resolutions: configurationData.supported_resolutions!,
          volume_precision: 2,
          data_status: 'streaming',
          format: 'price',
          currency_code: 'USD',
        };
        console.log('[resolveSymbol]: Symbol resolved', symbolName)
        setTimeout(() => onSymbolResolvedCallback(symbolInfo), 0);
      },
      getBars: async (
        symbolInfo: LibrarySymbolInfo,
        resolution: ResolutionString,
        periodParams: PeriodParams,
        onHistoryCallback: HistoryCallback,
        onErrorCallback: ErrorCallback,
      ) => {
        console.log('[getBars]: Method call', symbolInfo);
        console.log('RESOLUTION', resolution);
        console.log('PERIOD PARAMS', periodParams);

        const { ticker } = symbolInfo;

        try {
          if (!ticker) {
            onErrorCallback('Invalid ticker!');
            return;
          }
          const [longSymbol, shortSymbol] = getTokenSplit(ticker);
          console.log('symbols', longSymbol, shortSymbol)

          const interval =
            SUPPORTED_RESOLUTIONS[resolution as SUPPORTED_RESOLUTIONS_KEYS];
          console.log('resolution', resolution, 'interval', interval, 'period', periodParams)

          // const longBar = await getBars(longSymbol, interval, periodParams)
          // const shortBar = await getBars(shortSymbol, interval, periodParams)

          // const longBarP = getBars(longSymbol, interval, periodParams);
          // const shortBarP = getBars(shortSymbol, interval, periodParams);
          // const [longBar, shortBar] = await Promise.all([longBarP, shortBarP]);

          // const bars = mergeBars(longBar, shortBar, periodParams.countBack);
          // console.log(address);
          const { data } = await client.query({
            query: GET_PRICE_DATA,
            variables: {
              tokenAddress: address || '',
              limit: 1000,
            }
          });
          // // console.log(data);
          const parsedData = data.priceDatas.items.map((item: any) => ({
            time: item.su * 1000,
            open: parseInt(item.o) / 1e26,
            high: parseInt(item.h) / 1e26,
            low: parseInt(item.l) / 1e26,
            close: parseInt(item.c) / 1e26,
            volume: parseInt(item.v) / 1e26,
          }));
          // console.log(`[getBars]: returned `, bars);
          parsedData.sort((a: any, b: any) => a.time - b.time);

          const { from, to, countBack } = periodParams;
          const filteredData = parsedData.filter((item: any) => item.time >= from * 1000 && item.time <= to * 1000);
          const bars = countBack ? filteredData.slice(-countBack) : filteredData;
          if (!bars) {
            onHistoryCallback([], { noData: true });
            return;
          }

          if (periodParams.firstDataRequest) {
            lastBarsCache.set(symbolInfo.full_name, {
              ...bars[bars.length - 1],
            });
          }

          // console.log('[getBars]: Last Bar', lastBarsCache.get(symbolInfo.full_name))

          console.log(`[getBars]: returned ${bars.length} bar(s)`);
          onHistoryCallback(bars, { noData: false });
        } catch {
          onErrorCallback('Unable to load historical data!');
        }
      },
      subscribeBars: (
        symbolInfo: LibrarySymbolInfo,
        resolution: ResolutionString,
        onRealtimeCallback: SubscribeBarsCallback,
        subscriberUID: string,
        onResetCacheNeededCallback: () => void,
      ) => {
        console.log(
          '[subscribeBars]: Method call with subscriberUID:',
          subscriberUID,
        );

        const interval =
          SUPPORTED_RESOLUTIONS[resolution as SUPPORTED_RESOLUTIONS_KEYS];
        // console.log('resolution', resolution, 'interval', interval)

        intervalRef.current && clearInterval(intervalRef.current);

        intervalRef.current = setInterval(function () {
          // getLiveBars(symbolInfo.full_name, resolution).then(
          //   (bar: Bar | undefined) => {
          //     if (bar) {
          //       // console.log('[subscribeBars]: Bar', bar)
          //       onRealtimeCallback(formatTimeInBarToMs(bar));
          //     }
          //   },
          // );
        }, 500);

        // subscribeOnStream(
        //   symbolInfo,
        //   resolution,
        //   onRealtimeCallback,
        //   subscriberUID,
        //   onResetCacheNeededCallback,
        //   lastBarsCache.get(symbolInfo.full_name)
        // )
      },
      unsubscribeBars: (subscriberUID: string) => {
        intervalRef.current && clearInterval(intervalRef.current);
        console.log(
          '[unsubscribeBars]: Method call with subscriberUID:',
          subscriberUID,
        );
        // unsubscribeFromStream(subscriberUID)
      },
    };
  }, [address]);
};
