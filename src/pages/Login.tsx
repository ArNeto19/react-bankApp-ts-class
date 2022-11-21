import React, { useState } from "react";
import { Box, Center, Input } from "@chakra-ui/react";
import { LoginButton } from "../components/LoginButton";

export const Login = () => {
  const [userMail, setUserMail] = useState("");

  const handleChange = (event: any): void => {
    setUserMail(event.target.value);
  };

  return (
    <>
      <Center>
        <Box
          backgroundColor="whiteAlpha.800"
          width="20%"
          textAlign="center"
          m="12rem"
          p="2rem"
          borderRadius="40px">
          <Input
            placeholder="email"
            type="email"
            my="0.5rem"
            onChange={handleChange}
            value={userMail}
          />
          <Input placeholder="password" type="password" my="0.5rem" />
          <LoginButton username={userMail} />
        </Box>
      </Center>
    </>
  );
};
