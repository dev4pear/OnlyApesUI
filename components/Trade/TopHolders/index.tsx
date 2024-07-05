import { useQuery } from "@apollo/client";
import { GET_HOLDER_DISTRIBUTION } from "graphql/queries";
import { TopHoldersResponse } from "graphql/types";
import Link from "next/link";

export default function TopHolders({ tokenAddress, totalSupply, pool, creator }: { tokenAddress: string, totalSupply: number, pool?: boolean, creator?: string }) {
    const { data } = useQuery<TopHoldersResponse>(GET_HOLDER_DISTRIBUTION, {
      variables: { tokenAddress },
    });
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    
    const holders = data?.tokenBalances.items.slice(pool ? 0 : 1) || [];
    return (
      <div className="w-full">
        <div className="text-lg font-silly">Top Holders</div>
        <div className="pt-2 space-y-2">
          {holders.map((holder, index) => (
            <div key={index} className="w-full">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={`https://basescan.org/address/${holder.holder}`}
                className="text-white/70 hover:text-blue-500 transition-all"
              >
                <div className={`border ${creator === holder.holder ? 'border-blue-500/50' : 'border-white/10'} ${pool && index === 0 && 'border border-pink-500/80'} bg-slate-400/10 hover:bg-slate-400/15 rounded-sm py-1 pl-1 overflow-x-visible flex justify-between items-center`} style={{ width: `${holder.balance / holders[0].balance * 100}%` }}>
                  <div className="text-xs inline-block pl-1 flex-grow min-w-20">
                    {holder.holder === creator ? 'Creator' : `${holder.holder.slice(0, 6)}...${holder.holder.slice(-4)}`}
                  </div>
                  <div className="text-xs text-white/50 inline-block pl-1.5 pr-1.5 flex-shrink">
                    {(holder.balance / totalSupply * 100).toLocaleString('en-us', { maximumFractionDigits: 1 })}%
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  };