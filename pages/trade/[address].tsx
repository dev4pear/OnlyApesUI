import TVChartContainer from "components/TVChartContainer"
import { useRouter } from "next/router"
import { useQuery } from '@apollo/client';
import { GET_PRICE_DATA, GET_TRADE_TOKEN } from 'graphql/queries';
import { TokenFrag } from 'graphql/types';
import { useState } from "react";
import TokenInput from "components/TokenInput";
import EthIconImg from 'assets/img/eth.png';
import ApeBar from "components/Trade/ApeBar";
import Creator from "components/Trade/Creator";
import { getArgs, getFunctionName, getQuoteType, shortAddress } from "utils";
import TokenAddress from "../../components/Trade/TokenAddress";
import TopHolders from "../../components/Trade/TopHolders";
import TokenTrades from "../../components/Trade/TokenTrades";
import Socials from "../../components/Trade/Socials";
import Image from "next/image";
import { useAccount, useConfig, useReadContract, useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from 'wagmi/actions';
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { LAUNCHPAD_ADDRESS } from "config";
import LaunchpadAbi from 'abi/launchpad.json';
import { parseEther } from "viem";
import { getBalance } from '@wagmi/core'
import UniswapPoolLink from "components/Trade/UniswapPoolLink";
import MarketInfo from "components/Trade/MarketInfo";

export default function Trade() {
    const router = useRouter();
    const { address } = router.query;

    const { data: tradeToken } = useQuery<{ token: TokenFrag }>(GET_TRADE_TOKEN, {
        variables: {
            tokenAddress: address || '',
        }
    });

    const [selectedSymbol, setSelectedSymbol] = useState('ETH');

    const [amount, setAmount] = useState(0);

    const [action, setAction] = useState<'buy' | 'sell'>('buy');

    const { isConnected, address: walletAddress } = useAccount();
    const { openConnectModal } = useConnectModal();
    const { writeContractAsync } = useWriteContract();
    const config = useConfig();
    const [ethBalance, setEthBalance] = useState(0n);
    const [tokenBalance, setTokenBalance] = useState(0n);

    if (walletAddress) {
        getBalance(config, { address: walletAddress }).then(balance => setEthBalance(balance.value));
        getBalance(config, { address: walletAddress, token: address as `0x${string}` }).then(balance => setTokenBalance(balance.value));
    }

    const { data: priceData } = useQuery(GET_PRICE_DATA, {
        variables: {
            tokenAddress: address || '',
            limit: 1,
        },
    });

    const currentPrice = priceData?.priceDatas.items[0].c;

    const { data } = useReadContract({
        abi: LaunchpadAbi,
        address: LAUNCHPAD_ADDRESS,
        functionName: "quote",
        args: [address, parseEther(amount.toString()), getQuoteType(action, selectedSymbol)]
    });

    const quote: any = data;

    const handleAction = async () => {
        try {
            const hash = await writeContractAsync({
                address: LAUNCHPAD_ADDRESS,
                abi: LaunchpadAbi,
                functionName: getFunctionName(action, selectedSymbol),
                args: getArgs(action, selectedSymbol, address as string, amount),
                value: (action === 'buy' && selectedSymbol === 'ETH') ? parseEther(amount.toString()) : 0n,
            });

            console.log(hash);

            const receipt = await waitForTransactionReceipt(config, { hash });
            console.log(receipt);
        } catch (error: any) {
            console.log(error, error?.shortMessage);
        }
    }

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[30px] my-10">Trade <span className="text-blue-600">{tradeToken?.token.symbol || 'Coin'}</span></h1>
            <div className="xs:hidden md:flex justify-between w-full">
                <div className="hidden sm:block sm:w-1/2 flex-grow pr-4 lg:pr-8">
                    <MarketInfo price24HrAgo={parseInt(tradeToken?.token.price24HrAgo || '0')} currentPrice={currentPrice} />
                    <div className="h-[calc(100vh-60px)] rounded-md overflow-hidden max-h-[400px]">
                        <TVChartContainer symbol={`ETH/${tradeToken?.token.symbol}`} address={address} />
                    </div>
                    <div className="w-full mt-6">
                        <div className="text-lg font-silly">Trades</div>
                        <TokenTrades tokenAddress={tradeToken?.token.tokenAddress || ''} token={tradeToken?.token} />
                    </div>
                </div>
                <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
                    <UniswapPoolLink />
                    <div className="w-full !bg-transparent bg-gradient-to-r from-slate-400/10 to-slate-400/10 ring-1 ring-white/10 p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-4 pb-2">
                            <div
                                className={`buy-button ${action === 'sell' ? 'bg-emerald-500/20' : 'bg-emerald-500/60'}`}
                                onClick={() => {
                                    setSelectedSymbol('ETH');
                                    setAction('buy');
                                }}
                            >
                                Buy
                            </div>
                            <div
                                className={`sell-button ${action === 'sell' ? 'bg-red-500/60' : 'bg-red-500/20'}`}
                                onClick={() => {
                                    setSelectedSymbol(tradeToken?.token.symbol || '')
                                    setAction('sell');
                                }}
                            >
                                Sell
                            </div>
                        </div>

                        <div className="pt-2">
                            <TokenInput
                                name="amount"
                                amount={amount}
                                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                                tokens={[
                                    { symbol: 'ETH', icon: EthIconImg },
                                    { symbol: tradeToken?.token.symbol || '', icon: `https://beige-personal-nightingale-17.mypinata.cloud/ipfs/${tradeToken?.token.ipfsHash}` },
                                ]}
                                selectedSymbol={selectedSymbol}
                                setSelectedSymbol={setSelectedSymbol}
                            />
                        </div>

                        <div className="pt-3">
                            {(selectedSymbol === 'ETH') && <div className="flex justify-around">
                                <button className="chip" onClick={() => setAmount(0)}>reset</button>
                                <button className="chip" onClick={() => setAmount(0.05)}>0.05 ETH</button>
                                <button className="chip" onClick={() => setAmount(0.1)}>0.1 ETH</button>
                                <button className="chip" onClick={() => setAmount(0.5)}>0.5 ETH</button>
                                <button className="chip" onClick={() => setAmount(1)}>1 ETH</button>
                            </div>}
                            {(selectedSymbol !== 'ETH') && <div className="flex justify-around">
                                <button className="chip" onClick={() => setAmount(0)}>reset</button>
                                <button className="chip" onClick={() => setAmount(Number(tokenBalance) * 1e-18 / 4)}>25%</button>
                                <button className="chip" onClick={() => setAmount(Number(tokenBalance) * 1e-18 / 2)}>50%</button>
                                <button className="chip" onClick={() => setAmount(Number(tokenBalance) * 1e-18 / 4 * 3)}>75%</button>
                                <button className="chip" onClick={() => setAmount(Number(tokenBalance) * 1e-18)}>Max</button>
                            </div>}
                        </div>

                        {(!!quote && !!amount) && <div className="flex flex-col gap-2 pt-4">
                            <div className="flex justify-between text-sm text-white/50">
                                <p>For:</p>
                                <p className="text-white/80">
                                    {(Number(action === 'buy' ? quote.amountInEth : quote.amountInToken) * 1e-18).toLocaleString('en-us', { maximumFractionDigits: 18 })}
                                    &nbsp;<span className="font-semibold text-indigo-500">
                                        {action === 'buy' ? 'ETH' : tradeToken?.token.symbol}
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between text-sm text-white/50">
                                <p>Receive:</p>
                                <p className="text-white/80">
                                    {(Number(action === 'buy' ? quote.amountOutToken : quote.amountOutEth) * 1e-18).toLocaleString('en-us', { maximumFractionDigits: 18 })}
                                    &nbsp;<span className="font-semibold text-blue-500">
                                        {action === 'buy' ? tradeToken?.token.symbol : 'ETH'}
                                    </span>
                                </p>
                            </div>
                        </div>}

                        <div className="pt-4 w-full">
                            {!isConnected ? <button className="action-button" onClick={() => openConnectModal && openConnectModal()}>Connect Wallet</button> :
                                <>{
                                    ethBalance >= quote?.amountInEth ?
                                        <button className="action-button" onClick={handleAction}>{action === 'buy' ? 'Ape' : (quote?.amountInToken <= tokenBalance ? 'Dump' : 'Approve')}</button> :
                                        <button className="disabled-button" disabled>Insufficient ETH Balance</button>
                                }</>
                            }
                        </div>
                    </div>
                    {tradeToken?.token && <div className="!bg-transparent bg-gradient-to-r from-slate-400/10 to-slate-400/10 ring-1 ring-white/10 p-4 backdrop-blur-xl rounded-lg flex mt-4 w-full max-w-md">
                        <Image src={`https://beige-personal-nightingale-17.mypinata.cloud/ipfs/${tradeToken?.token.ipfsHash}`} className="flex-1 rounded-l-lg max-w-[160px] object-cover -my-4 -ml-4" alt="Broke icon" width={160} height={160} />
                        <div className="flex-grow pl-3">
                            <div className="text-white/60">
                                {tradeToken?.token.name}
                                <span className="text-white/60 text-sm px-1 py-0.5 rounded-sm bg-slate-400/10 ml-2">{tradeToken?.token.symbol}</span>
                            </div>
                            <p className="prose text-xs text-white/60 pt-1">{tradeToken?.token.description}</p>
                        </div>
                    </div>}

                    <ApeBar percentage={parseFloat(tradeToken?.token.tokenPurchased || '0') / parseFloat(tradeToken?.token.tokenTarget || '1') * 100} />
                    {(tradeToken?.token.website || tradeToken?.token.telegram || tradeToken?.token.twitter) && <Socials token={tradeToken?.token} />}
                    <Creator profileUrl={`/profile/${tradeToken?.token.creator}`} shortAddress={shortAddress(tradeToken?.token.creator || '')} />
                    <TokenAddress address={tradeToken?.token.tokenAddress || ''} />
                    <TopHolders creator={tradeToken?.token.creator} tokenAddress={tradeToken?.token.tokenAddress || ''} totalSupply={parseInt(tradeToken?.token.totalSupply || '')} pool={!!tradeToken?.token.pool} />
                </div>
            </div>
        </div>
    );
};