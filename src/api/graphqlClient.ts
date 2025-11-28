import { GraphQLClient } from "graphql-request";





export const graphqlClient = new GraphQLClient("http://localhost:8080/graphql", {
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
});