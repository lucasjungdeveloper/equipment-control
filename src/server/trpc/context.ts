import type { User } from "@supabase/supabase-js";
import type { inferAsyncReturnType } from "@trpc/server";
import type { CreateNextContextOptions } from "@trpc/server/adapters/next";

import { getServerAuthSession } from "../common/get-server-auth-session";
import { prisma } from "../db/client";

type CreateContextOptions = {
  user: User | null;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    user: opts.user,
    prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the unstable_getServerSession wrapper function
  const user = await getServerAuthSession({ req, res });

  return await createContextInner({
    user,
  });
};

export type Context = inferAsyncReturnType<typeof createContext>;
