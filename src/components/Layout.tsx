import { Box, Button, Center, Heading } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Input } from "./Input";
import { login } from "../services/login";

export const Layout = (props: any) => {
  return (
    <>
      <Box
        minHeight="100vh"
        backgroundColor="gray.700"
        padding="25px">
        <Center color="white">
          <Heading color="white">BankApp</Heading>
        </Center>
        <Center>
          <Box
            backgroundColor="#fff"
            width="20%"
            textAlign="center"
            m="12rem"
            p="2rem"
            borderRadius="40px">
            <Input id="email" />
            <Input id="password" />
            <Button
              onClick={login}
              colorScheme="pink"
              variant="solid">
              Login
            </Button>
          </Box>
        </Center>
        <Center color="white">
          <Footer />
        </Center>
      </Box>
    </>
  );
};
