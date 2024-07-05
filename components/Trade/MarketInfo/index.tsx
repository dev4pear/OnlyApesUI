export default function MarketInfo({ price24HrAgo, currentPrice }: { price24HrAgo: number, currentPrice: number }) {
    return (
        <div className="pb-4">
          <div className="flex justify-start">
            <div className="!bg-transparent bg-gradient-to-r from-slate-400/10 to-slate-400/10 ring-1 ring-white/10 p-4 backdrop-blur-xl py-2 rounded-lg">
              <div className="text-sm">
                <span className="font-silly text-white/60">Market Cap </span>$387k
              </div>
            </div>
            <div className="pl-5">
              <div className="!bg-transparent bg-gradient-to-r from-slate-400/10 to-slate-400/10 ring-1 ring-white/10 p-4 backdrop-blur-xl py-2 rounded-lg">
                <div className="text-sm">
                  <span className="font-silly text-white/60">Price </span>${(currentPrice / 1e26).toLocaleString('en-us', { maximumFractionDigits: 6 })}
                  <span className="text-xs inline-block pl-2 text-rose-500">{((currentPrice - price24HrAgo) / (price24HrAgo || 1) * 100).toLocaleString('en-us', { maximumFractionDigits: 2 })}%</span>
                </div>
              </div>
            </div>
            <div className="flex-grow">
              
            </div>
          </div>
        </div>
      );
}