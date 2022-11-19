import "../styles/globals.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import type {Session} from "@supabase/auth-helpers-react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { trpc } from "../utils/trpc";
import { useState } from "react";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <ChakraProvider>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </ChakraProvider>
  );
}

export default trpc.withTRPC(MyApp);
