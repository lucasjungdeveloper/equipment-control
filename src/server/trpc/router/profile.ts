import { router, protectedProcedure } from "../trpc";

export const profileRouter = router({
  get: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findFirst({
      where: { id: ctx.user?.id },
    });
    return user;
  }),
});
