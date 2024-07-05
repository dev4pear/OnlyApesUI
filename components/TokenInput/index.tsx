import { Popover } from '@headlessui/react';
import Image from 'next/image';

export default function TokenInput({
    name,
    amount,
    onChange,
    tokens,
    selectedSymbol,
    setSelectedSymbol,
    placeholder = "Amount",
}: {
    name: string,
    amount: number,
    onChange: (e: any) => void,
    tokens: Array<{ symbol: string, icon: any }>,
    selectedSymbol: string,
    setSelectedSymbol: (symbol: string) => void,
    placeholder?: string,
}) {
    return (
        <div className="w-full group rounded-md bg-slate-400/[0.05] hover:bg-slate-400/10 focus-within:bg-slate-400/10 border border-white/10 hover:border-white/20 focus-within:border-white/20 flex justify-between items-center">
            <input
                name={name}
                value={amount}
                onChange={onChange}
                type="text"
                placeholder={placeholder}
                className="input !rounded-none !rounded-l-md flex-grow"
            />
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button className={`flex items-center p-2 ${open ? 'bg-white/20' : 'bg-white/10'} rounded-r-md`}>
                            <Image src={tokens.find(option => option.symbol === selectedSymbol)?.icon || ""} className="w-5 h-5 mr-2" alt="" width={20} height={20} />
                            {selectedSymbol}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className={`w-4 h-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Popover.Button>
                        <Popover.Panel className="absolute z-10 w-40 bg-gray border border-white/50 rounded-md shadow-lg left-0 top-1/2 -translate-x-full -translate-y-1/2">
                            <div className="py-1">
                                {tokens.map(option => (
                                    <div
                                        key={option.symbol}
                                        onClick={() => setSelectedSymbol(option.symbol)}
                                        className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
                                    >
                                        <Image src={option.icon} className="w-5 h-5 mr-2" alt="" width={20} height={20} />
                                        {option.symbol}
                                    </div>
                                ))}
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </div>
    )
}