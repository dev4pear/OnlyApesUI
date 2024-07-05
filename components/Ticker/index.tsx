import { useQuery } from "@apollo/client";
import client from "graphql/apolloClient";
import { GET_TIME_DIFF_TOKENS } from "graphql/queries";
import { TokenFrag, TokensResponse } from "graphql/types";

const TickerItem = ({ token }: { token?: TokenFrag }) => {
    if (!token) return <></>;
    return (
        <div
            key={token.tokenAddress}
            className="group cursor-pointer border border-white/10 hover:border-white/20 backdrop-blur-lg inline-block py-1 px-2 mx-1 rounded-md transition-all"
        >
            <div className="text-sm inline text-white/40 group-hover:text-white/60 transition-all">
                {token.symbol}
            </div>
            <div className="inline text-xs pl-2 text-emerald-500">
                {/* {(((token.currentPrice || 0) - (token.price24HrAgo || 0)) / (token.price24HrAgo || 1) * 100).toFixed(2)}% */}
                1.01%
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`inline-block w-3 h-3 ml-1 -mt-0.5 fill-current ${parseInt(token.currentPrice) > parseInt(token.price24HrAgo) ? 'text-emerald-500' : 'text-red-500'
                        } ${parseInt(token.currentPrice) < parseInt(token.price24HrAgo) ? 'rotate-180' : ''}`}
                >
                    <path d="M 6,10 10,3 2,3 z" strokeLinejoin="round"></path>
                </svg>
            </div>
        </div>
    )
}

export default function Ticker() {
    const { data } = useQuery<TokensResponse>(GET_TIME_DIFF_TOKENS, { client });
    const tokens = data?.tokens.items || [];
    return (
        <div className="flex fixed bottom-0 backdrop-blur-lg border-t border-white/10 z-10 py-1">
            <div className="ticker whitespace-nowrap ml-3 flex-shrink justify-around flex -my-1 py-1 border-r border-white/10 pr-2">
                <div className="text-xs px-2 text-slate-400">Recently<br />Traded</div>
                <TickerItem token={tokens[0]} />
            </div>

            <div className="group/tickerbar pl-[100vw] overflow-hidden">
                <div className="ticker inline-block whitespace-nowrap animate-[30s] group-hover/tickerbar:[animation-play-state:paused] pr-[100vw]">
                    {tokens.map((token) => (
                        <TickerItem token={token} key={token.tokenAddress} />
                    ))}
                </div>
            </div>
        </div>
    )
}