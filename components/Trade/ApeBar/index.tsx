export default function ApeBar({ percentage }: { percentage: number }) {
  return (
    <div className="pt-4 w-full">
      <div className="text-white/80 text-xs inline-block pr-4 py-1">Ape Bar</div>
      <div className="inline-block w-full">
        <div className="w-full h-6 bg-slate-400/10 rounded-lg">
          <div
            className="
                  rounded-lg
                  bg-emerald-600/80 hover:bg-emerald-600 h-full
                  animate-pulse
                  transition-all
                  min-w-10
                "
            style={{ width: `${percentage}%` }}
          >
            <div className="text-xs mx-4 pr-auto justify-center pt-1">
              {Math.floor(percentage)}%
            </div>
          </div>
          <div className="h-6 inline-block" style={{ width: `${100 - percentage}%` }}></div>
        </div>
      </div>
      <div className="overflow-visible">
        <div
          className="
                backdrop-blur-lg border border-white/10
                mt-3 z-50 font-normal leading-normal
                text-sm max-w-[300px] text-left no-underline break-words rounded-lg
                hidden
              "
        >
          <div className="p-3 font-light text-white">
            <div className="text-xs text-white/80">
              The ape bar represents a bonding curve where anytime you buy a coin, each subsequent buyer pays slightly more for it. Once the bonding curve has been fully aped and reaches 100%, the liquidity is deposited in Uniswap and burned.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}