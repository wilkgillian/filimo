import {
  Flex,
  Avatar,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications, IoIosArrowDown, IoIosClose } from "react-icons/io";
import { IoAdd } from "react-icons/io5";

import Logo from "../../../public/assets/logo.svg";

export default function Header() {
  const [profile, setProfile] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(open)
  return (
    <Flex
      w="100%"
      h={16}
      bg="gray.900"
      p={10}
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      zIndex={1}
    >
      <Link passHref href={"/Homepage"}>
        <Image src={Logo} width="100" height="100" alt="logo"></Image>
      </Link>
      <InputGroup w="30%" color="gray.500" fontSize={18}>
        <Input
          placeholder="Encontre seu filmes favoritos..."
          borderRadius={20}
          border="none"
          bg="gray.800"
          onFocus={()=> setOpen(true)}
          // _focus={setOpen(!open)}
        />
        <InputRightElement width="4.5rem">
          <AiOutlineSearch />
        </InputRightElement>
      </InputGroup>
      <Flex display="flex" alignItems="center" gap={3}>
        <Link href="/Cadastro" passHref>
          <IoAdd fontSize={25} cursor="pointer" />
        </Link>
        {/* </Button> */}
        <IoMdNotifications fontSize={20} />
        <Avatar ml={5} w={10} h={10} src="https://github.com/wilkgillian.png" />
        <Text>Wilk Gillian</Text>
        <IoIosArrowDown
          cursor="pointer"
          fontSize={25}
          onClick={() => setProfile(!profile)}
        />
        {profile && (
          <VStack
            position="absolute"
            padding={4}
            right={2}
            top={2}
            w={300}
            h={500}
            borderRadius={20}
            gap={4}
            bg="gray.800"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(5px)"
            border="3px solid rgba(255, 255, 255, 0.3)"
          >
            <Flex w="100%" h="auto" justifyContent="flex-end">
              <IoIosClose
                cursor="pointer"
                size={42}
                onClick={() => setProfile(!profile)}
              />
            </Flex>
            <Avatar w={24} h={24} src="https://github.com/wilkgillian.png" />
            <Text fontSize={22} fontWeight="bold">
              Wilk Gillian
            </Text>
            <VStack w="100%" padding={2} gap={2}>
              <Link href="/Profile" passHref>
              <Text
                as="a"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
                >
                Perfil
              </Text>
                </Link>
              <Text
                as="a"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Notifications
              </Text>
              <Text
                as="a"
                cursor="pointer"
                _hover={{
                  textDecoration: "underline",
                }}
              >
                Configura????es
              </Text>
              <Text as="a" cursor="pointer">
                Sair
              </Text>
            </VStack>
          </VStack>
        )}
      </Flex>
    </Flex>
  );
}
