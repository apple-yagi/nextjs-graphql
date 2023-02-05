import { PrismaClient } from "@prisma/client";
import { extendType, intArg, nonNull, nullable, objectType, stringArg } from "nexus";
import { Post } from "nexus-prisma";

export const post = objectType({
  name: Post.$name,
  description: Post.$description,
  definition(t) {
    t.field(Post.id);
    t.field(Post.title);
    t.field(Post.body);
    t.field(Post.user);
  },
});

export const postsQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("posts", {
      type: Post.$name,
      args: {
        take: nullable(intArg()),
        skip: nullable(intArg()),
      },
      resolve(_, { take, skip }, ctx: { prisma: PrismaClient }) {
        return ctx.prisma.post.findMany({
          take: take || 10,
          skip: skip || 0,
        });
      },
    });
  },
});

export const creatPostMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("createPost", {
      type: Post.$name,
      args: {
        title: nonNull(stringArg()),
        body: nonNull(stringArg()),
        userId: nonNull(intArg()),
      },
      resolve(_, { title, body, userId }, ctx: { prisma: PrismaClient }) {
        return ctx.prisma.post.create({
          data: {
            title,
            body,
            userId,
          },
        });
      },
    });
  },
});
