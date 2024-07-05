import { parseEther } from "viem";

export const shortAddress = (address: string) => address?.slice(0, 4) + "..." + address?.slice(-4);

export const websiteLink = (link: string) => link.includes("https://") ? link : `https://${link}`;

export const getFunctionName = (actionType: string, selectedSymbol: string) => {
    if (actionType === 'buy') {
        if (selectedSymbol === 'ETH') return 'buyExactEth';
        else return 'buyExactTokens'
    } else {
        if (selectedSymbol === 'ETH') return 'sellExactEth';
        else return 'sellExactTokens';
    }
};

export const getQuoteType = (actionType: string, selectedSymbol: string) => {
    if (actionType === 'buy') {
        if (selectedSymbol === 'ETH') {
            return 2;
        } else {
            return 0;
        }
    } else {
        if (selectedSymbol === 'ETH') {
            return 3;
        } else {
            return 1;
        }
    }
};

export const getArgs = (actionType: string, selectedSymbol: string, address: string, amount: number) => {
    if (actionType === 'buy') return [address, amount];
    else {
        if (selectedSymbol === 'ETH') return [address, amount, parseEther("1.0")];
        else return [address, amount, parseEther("1.0")];
    }
}