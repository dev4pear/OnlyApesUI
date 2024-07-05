import ApeLogoImg from 'assets/img/apelogo.png';
import Image from 'next/image';
import CopyIcon from 'assets/icon/copy.svg';

export default function Creator({ profileUrl, shortAddress }: {
    profileUrl: string, shortAddress: string,
}) {
    return (
        <div className="py-4 w-full">
            <div className="text-white/80 text-xs inline-block pr-4 pt-2">Creator</div>
            <div className="max-w-[372px] pt-1">
                <a href={profileUrl}>
                    <div className="group rounded-md overflow-x-hidden text-wrap bg-slate-400/10 hover:bg-slate-400/15 active:bg-slate-400/20 ring-1 ring-white/10 hover:ring-white/20 active:ring-white/30">
                        <Image src={ApeLogoImg} alt="" width={16} height={16} className='w-4 h-4 rounded-md inline-block mx-1 -mt-0.5' />
                        <div className="inline-block text-white/70 text-xs pr-2 text-wrap max-w-[calc(100vw-60px)]">
                            <span className="block">{shortAddress}</span>
                        </div>
                        
                        <CopyIcon className="w-4 h-4 rounded-md inline-block" />
                    </div>
                </a>
            </div>
        </div>
    );
}