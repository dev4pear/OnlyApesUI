import Image from 'next/image';
import PlaceholderImg from 'assets/img/placeholder.png';
import ApeLogoImg from 'assets/img/apelogo.png';
import { Token } from 'graphql/types';
import { shortAddress, websiteLink } from 'utils';
import { LaunchIcon, LinkIcon, TelegramIcon, TwitterIcon } from 'components/Svg';
import Link from 'next/link';

export default function Card({ token, preview }: {
    token: Token,
    preview?: string | null,
}) {
    return (
        <div className="flex flex-col p-4 h-full min-h-[440px] max-w-[270px] w-full border border-white/30 rounded-xl relative">
            <div className="-mt-4 -mx-4 aspect-square">
                <Image
                    src={(preview || token.ipfsHash) ? (preview || `https://beige-personal-nightingale-17.mypinata.cloud/ipfs/${token.ipfsHash}`) : PlaceholderImg}
                    alt="meme coin"
                    className="rounded-t-lg !w-[calc(100%+32px)] max-h-[600px] object-scale-down"
                    layout="fill"
                />
            </div>
            <div className="pt-4 text-white/60">
                <span className="mr-2 text-[14px] text-blue-500">{token.name || 'Name'}</span>
                <span className="text-[14px] bg-white/30 p-1 rounded-md">{token.symbol || 'Symbol'}</span>
            </div>
            <p className="text-[12px] text-white/60 my-2">{token.description || 'Descritpion...'}</p>
            <div className="flex justify-between items-center">
                <div>
                    <div className="text-[12px] font-bold text-white/40">{token.pool ? "Pool" : "Market Cap"}</div>
                    {token.pool ?
                        <Link href="https://app.uniswap.org/explore/tokens/base/0x2a9c30589c35A18B3d0031a22296B7Edbb44acd4" target="_blank" className="hover:underline hover:text-blue-500">
                            View on Uniswap
                            <LaunchIcon />
                        </Link>
                        : <div className="text-[14px] text-white/60">$6,780</div>}
                </div>
                <div className="flex gap-1 items-center">
                    {token.website && <a className="group rounded-md p-1 bg-slate-400/10 ring-1 ring-white/10 hover:ring-white/20 " href={websiteLink(token.website)}>
                        <LinkIcon className="w-3 h-3 text-blue-600" />
                    </a>}
                    {token.telegram && <a className="group rounded-md p-1 bg-slate-400/10 ring-1 ring-white/10 hover:ring-white/20 " href={`${token.telegram}`}>
                        <TelegramIcon className="w-3 h-3 text-blue-600" />
                    </a>}
                    {token.twitter && <a className="group rounded-md p-1 bg-slate-400/10 ring-1 ring-white/10 hover:ring-white/20 " href={`${token.twitter}`}>
                        <TwitterIcon className="w-3 h-3 text-blue-600" />
                    </a>}
                </div>
            </div>
            <div className="flex gap-1 items-center mb-5">
                <Image src={ApeLogoImg} className="border border-white/30 rounded-full size-8 object-cover" alt="apes logo" width={32} height={32} />
                {token.creator && <a href={`/profile/${token.creator}`}>
                    <div className="hover:underline hover:text-blue-500">{shortAddress(token.creator)}</div>
                </a>}
            </div>
            <div className='w-full absolute bottom-4 h-6 bg-slate-400/10 rounded-b-lg -ml-4 -mb-[17px] mt-[17px] overflow-hidden'>
                <div className="bg-emerald-600/80 hover:bg-emerald-600 h-full inline-block min-w-10 transition-all" style={{ width: `${(token.tokenPurchased || 0) / (token.tokenTarget || 1) * 100}%` }}>
                    <div className="absolute text-xs px-4 pr-auto justify-center mt-1 w-full">{Math.floor((token.tokenPurchased || 0) / (token.tokenTarget || 1) * 100)}%<span className="float-right">{token?.pool && "Launched"}</span></div>
                </div>
            </div>
        </div>
    )
}