import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://onlyapes-ponder-charlie.up.railway.app/graphql',
  cache: new InMemoryCache(),
});

export default client;