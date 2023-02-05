import { PrismaClient } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";
import { User } from "nexus-prisma";

export const user = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id);
    t.field(User.email);
    t.field(User.name);
    t.field(User.posts);
  },
});

export const usersQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("users", {
      type: User.$name,
      args: {
        take: nullable(intArg()),
        skip: nullable(intArg()),
      },
      resolve(_, { take, skip }, ctx: { prisma: PrismaClient }) {
        return ctx.prisma.user.findMany({ take: take || 10, skip: skip || 0 });
      },
    });
  },
});

export const creatUserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createUser", {
      type: User.$name,
      args: {
        email: nonNull(stringArg()),
        name: nonNull(stringArg()),
      },
      resolve(_, { email, name }, ctx: { prisma: PrismaClient }) {
        return ctx.prisma.user.create({
          data: {
            email,
            name,
          },
        });
      },
    });
  },
});
