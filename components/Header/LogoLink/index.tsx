import LogoIcon from "assets/icon/logo_nobg.svg";
import Link from "next/link";

export default function LogoLink() {
    return (
        <Link href="/" className="text-[30px]">
            <LogoIcon className="size-14 inline mr-2 mt-1 group-hover:opacity-80 transition-all" data-nsfw-filter-status="sfw" style={{ visibility: 'visible' }} />
            Only<span className="text-emerald-500 group-hover:text-emerald-600">Apes</span>
        </Link>
    );
};