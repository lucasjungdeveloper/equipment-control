import { Flex, Button, Input, Stack } from "@chakra-ui/react";
import { supabase } from "../server/db/supabaseClient";
import { trpc } from "../utils/trpc";

export default function Login() {
  const { data: profile } = trpc.profile.get.useQuery();
  return (
    <Flex
      w="100vw"
      h="100vh"
      align={["start", "center"]}
      justify="center"
      mt={["8", "0"]}
      px="4"
    >
      <Button
        onClick={async function signInWithEmail() {
          const { data, error } = await supabase.auth.signInWithPassword({
            email: "example@email.com",
            password: "example-password",
          });
          if (data.session?.access_token && data.session.refresh_token) {
            supabase.auth.setSession({
              access_token: data.session.access_token,
              refresh_token: data.session.refresh_token,
            });
          }
          console.log("data", data);
          console.log("error", error);
        }}
      >
        Login
      </Button>
      <Button
        onClick={async () => {
          await supabase.auth.signOut();
        }}
      >
        Logout
      </Button>
      <Flex
        direction="column"
        as="form"
        w="100%"
        maxW={360}
        bg="gray.100"
        p="8"
        borderRadius={8}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Stack spacing="4">
          <Input type="text" placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">Confirmar</Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
