/* eslint-diable @typescript-eslint/no-empty-function */
import { useEffect, useRef } from 'react';
import {
	widget,
	ChartingLibraryWidgetOptions,
	LanguageCode,
	ResolutionString,
	IChartingLibraryWidget,
	ChartingLibraryFeatureset,
} from 'charting_library';
import * as React from 'react';
import { useState } from 'react';
import { SUPPORTED_RESOLUTIONS, SUPPORTED_RESOLUTIONS_KEYS, useDataFeed } from './datafeed';

export function getObjectKeyFromValue(value: any, object: any) {
	return Object.keys(object).find((key) => object[key] === value);
}

const TVChartContainer = ({ symbol, address }: any) => {
	const chartContainerRef =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const tvWidgetRef = useRef<IChartingLibraryWidget | null>(null);
	// const [chartReady, setChartReady] = useState(false);
	// const [shouldReloadChart, setShouldReloadChart] = useState(false);
	const [chartDataLoading, setChartDataLoading] = useState(true);
	const [period, setPeriod] = useState('5m');
	const datafeed = useDataFeed({ address });

	const enabledFeatures: ChartingLibraryFeatureset[] = [
		'left_toolbar',
		'side_toolbar_in_fullscreen_mode',
	];

	const disabledFeatures: ChartingLibraryFeatureset[] = [
		'header_symbol_search',
		'header_compare',
		'show_hide_button_in_legend',
		'format_button_in_legend',
		'symbol_info',
		'legend_widget',
	];

	const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
		library_path: '../../../charting_library/',
		locale: 'en',
		charts_storage_url: 'https://saveload.tradingview.com',
		charts_storage_api_version: '1.1',
		client_id: 'tradingview.com',
		user_id: 'public_user_id',
		fullscreen: false,
		autosize: true,
		theme: 'Dark',
		enabled_features: enabledFeatures,
		disabled_features: disabledFeatures,
		custom_css_url: '../../../charting_library/custom.css',
		custom_formatters: {
			timeFormatter: {
				format: (date) => {
					const _format_str = '%h:%m';
					return _format_str
						.replace('%h', date.getUTCHours().toString())
						.replace('%m', date.getUTCMinutes().toString())
						.replace('%s', date.getUTCSeconds().toString());
				},
				formatLocal: (date) => {
					const _format_str = '%h:%m';
					return _format_str
						.replace('%h', date.getUTCHours().toString())
						.replace('%m', date.getUTCMinutes().toString())
						.replace('%s', date.getUTCSeconds().toString());
				},
			},
			dateFormatter: {
				format: (date) => {
					return (
						date.getUTCFullYear() +
						'/' +
						(date.getUTCMonth() + 1) +
						'/' +
						date.getUTCDate()
					);
				},
				formatLocal: (date) => {
					return (
						date.getUTCFullYear() +
						'/' +
						(date.getUTCMonth() + 1) +
						'/' +
						date.getUTCDate()
					);
				},
			},
			priceFormatterFactory: (symbolInfo, minTick) => {
				console.log('dash', symbolInfo, minTick);
				if (symbolInfo?.fractional || minTick !== 'default') {
					return {
						format: (price, signPositive) => {
							// Custom formatting logic for price scale bar
							// if (price < 0.00001) return price.toFixed(9);
							// if (price < 1) return price.toFixed(5);
							return price.toFixed(9); // Example: Format price to 9 decimal places
						},
					};
				}
				return null; // Use default formatter if conditions are not met
			},
		},
		// custom_font_family: 'Integral CF',
	};

	useEffect(() => {
		if (
			tvWidgetRef.current &&
			tvWidgetRef.current?.activeChart() &&
			symbol !== tvWidgetRef.current?.activeChart().symbol()
		) {
			// eslint-disable-next-line @typescript-eslint/no-empty-function
			tvWidgetRef.current.setSymbol(
				symbol,
				tvWidgetRef.current.activeChart().resolution(),
				// eslint-disable-next-line @typescript-eslint/no-empty-function
				() => { },
			);
		}
	}, [symbol, period]);

	useEffect(() => {
		const widgetOptions: ChartingLibraryWidgetOptions = {
			debug: true,
			symbol,
			// symbol: 'AAPL',
			interval: getObjectKeyFromValue(
				period,
				SUPPORTED_RESOLUTIONS,
			) as ResolutionString,
			datafeed,
			container: chartContainerRef.current,
			theme: defaultWidgetProps.theme,
			library_path: defaultWidgetProps.library_path,
			locale: defaultWidgetProps.locale as LanguageCode,
			disabled_features: defaultWidgetProps.disabled_features,
			enabled_features: defaultWidgetProps.enabled_features,
			charts_storage_url: defaultWidgetProps.charts_storage_url,
			charts_storage_api_version: defaultWidgetProps.charts_storage_api_version,
			custom_css_url: defaultWidgetProps.custom_css_url,
			client_id: defaultWidgetProps.client_id,
			user_id: defaultWidgetProps.user_id,
			fullscreen: defaultWidgetProps.fullscreen,
			autosize: defaultWidgetProps.autosize,
			favorites: defaultWidgetProps.favorites,
			custom_formatters: defaultWidgetProps.custom_formatters,
			custom_font_family: defaultWidgetProps.custom_font_family,
		};

		tvWidgetRef.current = new widget(widgetOptions);

		tvWidgetRef.current!.onChartReady(() => {
			tvWidgetRef.current!.applyOverrides({
				'paneProperties.background': '#202020',
				'paneProperties.backgroundType': 'solid',
				'paneProperties.verGridProperties.color': '#202020',
				'paneProperties.horzGridProperties.color': '#202020',
				'mainSeriesProperties.style': 8,
				'mainSeriesProperties.barStyle.downColor': '#E07575',
				'mainSeriesProperties.barStyle.upColor': '#ACE075',
				'mainSeriesProperties.candleStyle.downColor': '#E07575',
				'mainSeriesProperties.candleStyle.upColor': '#ACE075',
				'mainSeriesProperties.hollowCandleStyle.downColor': '#E07575',
				'mainSeriesProperties.hollowCandleStyle.upColor': '#ACE075',
				'mainSeriesProperties.hlcAreaStyle.downColor': '#E07575',
				'mainSeriesProperties.hlcAreaStyle.upColor': '#ACE075',
				'mainSeriesProperties.haStyle.downColor': '#E07575',
				'mainSeriesProperties.haStyle.upColor': '#ACE075',
				'mainSeriesProperties.columnStyle.downColor': '#E07575',
				'mainSeriesProperties.columnStyle.upColor': '#ACE075',
				'mainSeriesProperties.kagiStyle.downColor': '#E07575',
				'mainSeriesProperties.kagiStyle.upColor': '#ACE075',
				'mainSeriesProperties.renkoStyle.downColor': '#E07575',
				'mainSeriesProperties.renkoStyle.upColor': '#ACE075',
				'mainSeriesProperties.pbStyle.downColor': '#E07575',
				'mainSeriesProperties.pbStyle.upColor': '#ACE075',
				'mainSeriesProperties.pnfStyle.downColor': '#E07575',
				'mainSeriesProperties.pnfStyle.upColor': '#ACE075',
				'mainSeriesProperties.lineStyle.color': '#ACE075',
				'mainSeriesProperties.priceLine.color': '#ACE075',
				'mainSeriesProperties.minTick': '1000000000,1,true',
			});

			if (tvWidgetRef.current
				?.activeChart) {
					tvWidgetRef.current
						?.activeChart()
						.onIntervalChanged()
						.subscribe(
							null,
							(interval) => {
								if (SUPPORTED_RESOLUTIONS[interval as SUPPORTED_RESOLUTIONS_KEYS]) {
									const period =
										SUPPORTED_RESOLUTIONS[interval as SUPPORTED_RESOLUTIONS_KEYS];
									setPeriod(period);
								}
							},
							false,
						);
				}
		});

		return () => {
			if (tvWidgetRef.current) {
				tvWidgetRef.current.remove();
				tvWidgetRef.current = null;
				// setChartReady(false)
				// setChartDataLoading(true)
			}
		};
	}, [datafeed]);

	return (
		<>
			<div
				ref={chartContainerRef}
				style={{
					height: '100%',
					width: '100%',
				}}
			/>
		</>
	);
};

export default TVChartContainer;