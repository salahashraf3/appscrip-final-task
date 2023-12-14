import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ca-central-1.hygraph.com/v2/clq3oe49wac6301uk7p56cjgr/master",
  cache: new InMemoryCache(),
});

export default client;
