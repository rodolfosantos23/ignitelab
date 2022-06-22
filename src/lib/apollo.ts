import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4pxio5e2ucd01w724kn01dg/master",
  cache: new InMemoryCache(),
});
