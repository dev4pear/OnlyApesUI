import { LaunchIcon } from "components/Svg";
import Link from "next/link";
import { useRouter } from "next/router";

export default function UniswapPoolLink() {
    const router = useRouter();
    const { address } = router.query;

    return (
        <div className="pt-2 pb-1">
            <Link
                href={`https://app.uniswap.org/explore/tokens/base/${address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline hover:text-blue-500 text-sm cursor-pointer"
            >
                Pool launched on Uniswap
                <LaunchIcon />
            </Link>
        </div>
    );
}