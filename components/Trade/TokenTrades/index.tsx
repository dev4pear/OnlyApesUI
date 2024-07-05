import { useQuery } from "@apollo/client";
import { ArrowIcon, EthIcon } from "components/Svg";
import { GET_TOKEN_TRADES } from "graphql/queries";
import { TokenFrag, Trade } from "graphql/types";
import Image from "next/image";

export default function TokenTrades({ tokenAddress, token }: { tokenAddress: string, token?: TokenFrag }) {
    const { data } = useQuery(GET_TOKEN_TRADES, {
        variables: { tokenAddress },
    });

    const trades: Trade[] = data?.trades.items || [];

    return (
        <div className="flex flex-col gap-2">
            {trades.map((trade) => (
                <div
                    key={trade.id}
                    className="!bg-transparent bg-gradient-to-r from-slate-400/10 to-slate-400/10 ring-1 ring-white/10 p-4 rounded-md backdrop-blur-xl"
                >
                    <div className="flex text-sm justify-between items-center">
                        <div className="pr-4 items-center w-[140px]">
                            <a
                                className="hover:text-blue-300/80 active:text-blue-400/80"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`/profile/${trade.recipient}`}
                            >
                                {`${trade.recipient.slice(0, 6)}...${trade.recipient.slice(-4)}`}
                            </a>
                            <span className="font-semibold"> </span>
                            <span className={`${trade.type === 'buy' ? 'text-emerald-500' : 'text-red-500'}`}>
                                {trade.type}
                            </span>
                        </div>
                        <div className="flex items-center justify-space-around w-[400px]">
                            {trade.type === 'buy' ? (
                                <>
                                    <div className="flex-1">
                                        <div className="flex align-middle w-[128px] float-right">
                                            <div>
                                                <EthIcon className="size-7 mr-2 rounded-sm mt-1" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm">{(trade.ethAmount / 1e18).toLocaleString('en-us', { maximumFractionDigits: 6 })}</div>
                                                <div className="text-white/50 text-xs">ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-center justify-center pr-6">
                                        <ArrowIcon className="size-6 text-white/50 mx-auto" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex align-middle w-[128px]">
                                            <div>
                                                <Image
                                                    src={`https://beige-personal-nightingale-17.mypinata.cloud/ipfs/${token?.ipfsHash}`}
                                                    className="size-7 mr-2 rounded-sm mt-1"
                                                    alt="Token"
                                                    width={28}
                                                    height={28}
                                                />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm">{(trade.tokenAmount / 1e18).toLocaleString('en-us', { maximumFractionDigits: 0 })}</div>
                                                <div className="text-white/50 text-xs">{token?.symbol}</div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="flex-1">
                                        <div className="flex align-middle w-[128px] float-right">
                                            <div>
                                                <Image
                                                    src={`https://beige-personal-nightingale-17.mypinata.cloud/ipfs/${token?.ipfsHash}`}
                                                    className="size-7 mr-2 rounded-sm mt-1"
                                                    alt="Token"
                                                    width={28}
                                                    height={28}
                                                />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm">{(trade.tokenAmount / 1e18).toLocaleString('en-us', { maximumFractionDigits: 0 })}</div>
                                                <div className="text-white/50 text-xs">{token?.symbol}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="items-center justify-center pr-6">
                                        <ArrowIcon className="size-6 text-white/50 mx-auto" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex align-middle w-[128px]">
                                            <div>
                                                <EthIcon className="size-7 mr-2 rounded-sm mt-1" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm">{(trade.ethAmount / 1e18).toLocaleString('en-us', { maximumFractionDigits: 6 })}</div>
                                                <div className="text-white/50 text-xs">ETH</div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        <div>
                            <p className="text-sm">{new Date(parseInt(trade.blockTimestamp) * 1000).toLocaleString()}</p>
                            <p className="text-xs text-white/50">
                                <span>
                                    Transaction:{' '}
                                    <a
                                        className="hover:text-blue-300/80 active:text-blue-400/80"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`https://basescan.org/tx/${trade.transactionHash}`}
                                    >
                                        {`${trade.transactionHash.slice(0, 6)}...${trade.transactionHash.slice(-4)}`}
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}