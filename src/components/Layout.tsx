import React, { useEffect } from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { Footer } from "./Footer";

export const Layout = (props: any) => {
  // useEffect(() => {
  //   async function getData() {
  //     const data = await api;
  //     console.log(data);
  //   }

  //   getData();
  // });

  return (
    <>
      <Box minHeight="100vh" backgroundColor="gray.700" padding="25px">
        <Center color="white">
          <Heading color="white">BankApp</Heading>
        </Center>
        {props.children}
        <Center color="white">
          <Footer />
        </Center>
      </Box>
    </>
  );
};
