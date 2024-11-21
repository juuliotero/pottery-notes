import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const ingredientRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const ingredients = await ctx.db.ingredient.findMany({
      take: 100,
      orderBy: [{ name: "desc" }],
    });
    return ingredients;
  }),
  create: privateProcedure
    .input(z.object({ name: z.string(), categoryId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const ingredient = await ctx.db.ingredient.create({
        data: {
          name: input.name,
          categoryId: input.categoryId,
        },
      });
      return ingredient;
    }),
});
