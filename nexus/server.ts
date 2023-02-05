import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "@apollo/server";
import { schema } from "./schema";

interface ApolloServerContext {
  prisma: PrismaClient;
}

export const apolloServer = new ApolloServer<ApolloServerContext>({
  schema,
});
