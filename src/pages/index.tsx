import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
//Libraries
import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
//Icons
import { BiDevices, BiEdit } from "react-icons/bi";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { BsJournalBookmarkFill } from "react-icons/bs";
import { ConnectDeviceProvider } from "../components/ConnectDeviceProvider";
//Components-Pages
import { Dashboard } from "../components/Dashboard";
import { DeviceControl } from "../components/DeviceControl";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
//Just-Components
import { NavItem } from "../components/NavItem";
import { PrestadorControl } from "../components/PrestadorControl";
import { Reports } from "../components/Reports";
import { TbReport } from "react-icons/tb";
import { TiBusinessCard } from "react-icons/ti";
import { useState } from "react";

export default function Home() {
  const [navSize, changeNavSize] = useState("large");

  const session = useSession();

  const supabase = useSupabaseClient();

  return (
    <Flex w="100%">
      <Flex
        w={navSize == "small" ? "5%" : "15%"}
        transition={navSize == "small" ? "all 0.3s ease-in" : "ease"}
      >
        <Flex
          pos="relative"
          left="5"
          h="95vh"
          marginTop="2.5vh"
          boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
          borderRadius={navSize == "small" ? "4.6875rem" : "1.875rem"}
          w={navSize == "small" ? "4.6875rem" : "16.625rem"}
          flexDir="column"
          justifyContent="space-between"
          transition={navSize == "small" ? "all 0.3s ease-in-out" : "ease-in"}
          backgroundColor="#ebe9e9"
        >
          <Flex
            p="5%"
            flexDir="column"
            alignItems={navSize == "small" ? "center" : "flex-start"}
            as="nav"
          >
            <IconButton
              aria-label={""}
              background="none"
              transition="width 2s, height 4s"
              mt={5}
              _hover={{ background: "none" }}
              icon={<FiMenu />}
              onClick={() => {
                if (navSize == "small") changeNavSize("large");
                else changeNavSize("small");
              }}
            />
            <Link href="/">
              <NavItem
                navSize={navSize}
                icon={MdDashboard}
                title="Dashboard"
              ></NavItem>
            </Link>
            <Link href="/device-control">
              <NavItem
                navSize={navSize}
                icon={BiDevices}
                title="Controle de Aparelhos"
              ></NavItem>
            </Link>
            <Link href="/prestador-control">
              <NavItem
                navSize={navSize}
                icon={TiBusinessCard}
                title="Controle de Prestador"
              ></NavItem>
            </Link>
            <Link href="/connect-device-provider">
              <NavItem
                navSize={navSize}
                icon={BiEdit}
                title="Aparelho x Prestador"
              ></NavItem>
            </Link>
            <Link href="/reports">
              <NavItem
                navSize={navSize}
                icon={TbReport}
                title="Relatórios"
              ></NavItem>
            </Link>
          </Flex>

          <Flex p="5" flexDir="column" w="100%" alignItems="flex-start" mb="4">
            <Divider display={navSize == "small" ? "none" : "flex"} />
            <Flex mt={4} align="center">
              <Avatar size="sm" src="https://github.com/E-Mello.png" />
              <Flex
                flexDir="column"
                ml={4}
                display={navSize == "small" ? "none" : "flex"}
              >
                <Heading as="h3" size="sm">
                  Édio Melo
                </Heading>
                <Text color="gray">Suporte</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        w={navSize == "small" ? "93%" : "84%"}
        transition={navSize == "large" ? "all 0.3s ease-in" : "ease"}
      >
        <Flex
          pos="relative"
          h="56.5rem"
          left="1rem"
          marginTop=""
          borderRadius="4rem"
          w={navSize == "small" ? "100%" : "99%"}
          justifyContent="space-between"
          transition={navSize == "large" ? "all 0.3s ease-in" : "ease"}
        ></Flex>
      </Flex>
    </Flex>
  );
}
