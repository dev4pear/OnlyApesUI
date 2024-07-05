import Card from "components/Card";
import { useRouter } from 'next/router';

import { useQuery } from '@apollo/client';
import { GET_TOKENS } from 'graphql/queries';
import { TokensData, TokensVars } from 'graphql/types';

export default function Home() {
    const router = useRouter();
    const { data } = useQuery<TokensData, TokensVars>(GET_TOKENS, {
        variables: {
            orderBy: 'mostRecentActionTimestamp',
            orderDirection: 'desc',
            limit: 8,
        },
    });

    const handleCreateCoin = () => {
        router.push("/create");
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-[30px] my-10">Recently Trading</h1>
            <button className="rounded-md bg-primary px-5 py-3" onClick={handleCreateCoin}>Create Coin</button>

            <div className="my-10"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.tokens.items.map(token => (
                    <a key={token.tokenAddress} href={`/trade/${token.tokenAddress}`}>
                        <Card token={token} />
                    </a>
                ))}
            </div>

        </div>
    )
}