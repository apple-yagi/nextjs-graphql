import { apolloServer } from "@nexus/server";
import { PrismaClient } from "@prisma/client";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const prisma = new PrismaClient();

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});
