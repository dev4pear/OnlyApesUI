import { LinkIcon, TelegramIcon, TwitterIcon } from 'components/Svg';
import { TokenFrag } from "graphql/types";
import { websiteLink } from 'utils';

export default function Socials({ token }: { token?: TokenFrag }) {
    return (
        <div className="flex justify-between !pt-4 w-full">
            <div className="text-white/80 text-xs pt-2 inline-block pr-4">Socials</div>
            <div className="flex justify-start flex-start space-x-2">
                {token?.website && <a
                    className="group rounded-md bg-slate-400/10 ring-1 ring-white/10 hover:ring-white/20 m-1 pb-0.5"
                    href={websiteLink(token?.website)}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkIcon className="w-3 h-3 inline-block mx-1 -mt-0.5" />
                    <div className="inline-block text-white/70 text-xs pr-2 group-hover:text-white">
                        Website
                    </div>
                </a>}
                {token?.telegram && <a
                    className="group rounded-md bg-slate-400/10 ring-1 ring-white/10 hover:ring-white/20 m-1 pb-0.5"
                    href={token?.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TelegramIcon className="w-3 h-3 inline-block mx-1 -mt-0.5 text-blue-200" />
                    <div className="inline-block text-white/70 text-xs pr-2 group-hover:text-white">
                        Telegram
                    </div>
                </a>}
                {token?.twitter && <a
                    className="group rounded-md bg-slate-400/10 ring-1 ring-white/10 hover:ring-white/20 m-1 pb-0.5"
                    href={token?.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <TwitterIcon className="w-3 h-3 inline-block mx-1 -mt-0.5 text-blue-400" />
                    <div className="inline-block text-white/70 text-xs pr-2 group-hover:text-white">
                        Twitter
                    </div>
                </a>}
            </div>
        </div>
    );
}