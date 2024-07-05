import { gql } from '@apollo/client';

export const GET_TOKENS = gql`
  query SortedTokensQuery($orderBy: String, $orderDirection: String, $limit: Int) {
    tokens(orderBy: $orderBy, orderDirection: $orderDirection, limit: $limit) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        __typename
      }
      items {
        tokenAddress: id
        creator
        symbol
        name
        ipfsHash
        website
        twitter
        telegram
        description
        metadata
        pool
        currentPrice: lastPrice
        totalSupply
        tokenPurchased
        tokenTarget
        volume
        price24HrAgo
        __typename
      }
      __typename
    }
  }
`;

export const GET_PRICE_DATA = gql`
  query GetPriceDatas($tokenAddress: String!, $limit: Int!) {
    priceDatas(
      where: { token: $tokenAddress }
      orderBy: "su"
      orderDirection: "desc"
      limit: $limit
    ) {
      items {
        id
        o
        h
        l
        c
        v
        su
        eu
        __typename
      }
      __typename
    }
  }
`;

export const GET_TRADE_TOKEN = gql`
  query GetTimeDiffTokens($tokenAddress: String!) {
    token(id: $tokenAddress) {
      ...TokenFrag
      __typename
    }
  }

  fragment TokenFrag on Token {
    tokenAddress: id
    creator
    symbol
    name
    ipfsHash
    website
    twitter
    telegram
    description
    metadata
    pool
    currentPrice: lastPrice
    totalSupply
    tokenPurchased
    tokenTarget
    volume
    price24HrAgo
    __typename
  }
`;

export const GET_TIME_DIFF_TOKENS = gql`
  query GetTimeDiffTokens {
    tokens(orderBy: "mostRecentTradeTimestamp", orderDirection: "desc", limit: 10) {
      items {
        tokenAddress: id
        creator
        symbol
        name
        ipfsHash
        website
        twitter
        telegram
        description
        metadata
        pool
        currentPrice: lastPrice
        totalSupply
        tokenPurchased
        tokenTarget
        volume
        price24HrAgo
        __typename
      }
      __typename
    }
  }
`;

export const GET_HOLDER_DISTRIBUTION = gql`
  query GetHolderDistribution($tokenAddress: String!) {
    tokenBalances(
      where: { token: $tokenAddress }
      orderBy: "balance"
      orderDirection: "desc"
      limit: 10
    ) {
      items {
        holder
        balance
        __typename
      }
      __typename
    }
  }
`;

export const GET_TOKEN_TRADES = gql`
  query GetTokenTrades($tokenAddress: String, $cursor: String) {
    trades(
      where: { token: $tokenAddress }
      orderBy: "blockTimestamp"
      orderDirection: "desc"
      limit: 10
      after: $cursor
    ) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
        __typename
      }
      items {
        id
        type
        recipient
        tokenAmount
        ethAmount
        priceOpening
        priceAvg
        priceClosing
        ethPrice
        usdValue
        blockNumber
        blockTimestamp
        transactionHash
        __typename
      }
      __typename
    }
  }
`;