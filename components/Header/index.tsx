import { ConnectButton } from '@rainbow-me/rainbowkit';
import LogoLink from "./LogoLink";

export default function Header() {
    return (
        <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-5 my-5">
            <LogoLink />
            <ConnectButton />
        </div>
    )
}