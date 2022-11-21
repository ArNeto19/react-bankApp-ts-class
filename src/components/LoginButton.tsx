import { Button } from "@chakra-ui/react";
import { login } from "../services/login";

export const LoginButton = (props: any) => {
  return (
    <Button
      onClick={() => login(props.username)}
      colorScheme="pink"
      variant="solid"
      size="sm"
      width="100%">
      Login
    </Button>
  );
};
