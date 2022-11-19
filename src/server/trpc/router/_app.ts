import { profileRouter } from "./profile";
import { router } from "../trpc";

export const appRouter = router({
  profile: profileRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
