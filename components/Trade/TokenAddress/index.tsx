import { shortAddress } from 'utils';
import { BaseIcon, BaseScanIcon, CopyIcon } from 'components/Svg';

export default function TokenAddress({ address }: {
    address: string
}) {
    return (
        <div className="py-4 w-full">
            <div className="text-white/80 text-xs inline-block pr-4 pt-2">Token Address</div>
            <div className="max-w-[400px] pt-1">
                <div className="group rounded-md bg-slate-400/10 ring-1 ring-white/10 m-1 overflow-x-hidden text-wrap !mx-0 flex items-center gap-1">
                    <BaseIcon className="w-4 h-4 rounded-md inline-block mx-1 -mt-0.5" />
                    <div className="inline-block text-white/70 text-xs pr-2 text-wrap max-w-[calc(100vw-60px)]">
                        <span className="hidden sm:block">{address}</span>
                        <span className="block sm:hidden">{shortAddress(address)}</span>
                    </div>
                    <CopyIcon />
                    <div className="inline-block">
                        <a href={`https://basescan.org/token/${address}`} target="_blank" rel="noopener noreferrer">
                            <BaseScanIcon className="w-4 h-4 rounded-md inline-block mx-1 -mt-0.5 hover:opacity-50" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}