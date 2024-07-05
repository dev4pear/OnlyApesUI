export interface Token {
  tokenAddress?: string;
  creator: string;
  symbol: string;
  name: string;
  ipfsHash: string;
  website: string;
  twitter: string;
  telegram: string;
  description: string;
  metadata?: string;
  pool?: string;
  currentPrice?: number;
  totalSupply?: number;
  tokenPurchased?: number;
  tokenTarget?: number;
  volume?: number;
  price24HrAgo?: number;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

export interface TokensData {
  tokens: {
    pageInfo: PageInfo;
    items: Token[];
  };
}

export interface TokensVars {
  orderBy: string;
  orderDirection: string;
  limit: number;
}

export interface PriceData {
  id: string;
  o: number;  // Open price
  h: number;  // High price
  l: number;  // Low price
  c: number;  // Close price
  v: number;  // Volume
  su: string; // Start time (timestamp)
  eu: string; // End time (timestamp)
}

export interface PriceDataResponse {
  priceDatas: {
    items: PriceData[];
  };
}

export interface PriceDataVars {
  tokenAddress: string;
  limit: number;
}

export interface TokenFrag {
  tokenAddress: string;
  creator: string;
  symbol: string;
  name: string;
  ipfsHash: string;
  website: string;
  twitter: string;
  telegram: string;
  description: string;
  metadata: string;
  pool: string;
  currentPrice: string;
  totalSupply: string;
  tokenPurchased: string;
  tokenTarget: string;
  volume: string;
  price24HrAgo: string;
  __typename: string;
}

export interface TokensResponse {
  tokens: {
      items: TokenFrag[];
      __typename: string;
  };
}

export interface Holder {
  holder: string;
  balance: number;
}

export interface TopHoldersResponse {
  tokenBalances: {
    items: Array<Holder>
  }
}

export interface Trade {
  id: string;
  type: string;
  recipient: string;
  tokenAmount: number;
  ethAmount: number;
  priceOpening: number;
  priceAvg: number;
  priceClosing: number;
  ethPrice: number;
  usdValue: number;
  blockNumber: number;
  blockTimestamp: string;
  transactionHash: string;
}

export interface TokenTradesResponse {
  trades: {
    items: Array<Trade>
  }
}