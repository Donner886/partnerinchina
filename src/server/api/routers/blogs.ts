import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import type { Prisma } from "@prisma/client";
import { db } from "~/server/db";
import {TRPCError}  from "@trpc/server";


// 这里是尝试添加的一个 api route,  实现 query by id的功能。
export const blogRouter = createTRPCRouter({
    byId: publicProcedure
        .input(z.object({ id: z.number()}))
        .query(async ({input}) => {
            const {id} = input;
            const post = await db.demoBlog.findUnique({
                where: { id: id },
            })
            if (!post) {
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message:`No blog with id ${id}`
                })
            }
            return post
        }),
})