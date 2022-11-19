import { ChakraProvider, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Account from "../Auth/Account";
import Auth from "../Auth/Auth";
import { supabase } from "../server/db/supabaseClient";

export default function Login() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <ChakraProvider>
      <Flex>
        {!session ? (
          <Auth />
        ) : (
          <Account key={session.user.id} session={session} />
        )}
      </Flex>
    </ChakraProvider>
  );
}
