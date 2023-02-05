import { cacheExchange, createClient, dedupExchange, fetchExchange } from "urql";

export const urqlClient = createClient({
  url: "/api/graphql",
  suspense: true,
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
});
