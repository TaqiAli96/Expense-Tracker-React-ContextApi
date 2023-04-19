import React from "react";
import { Container } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Container minW="1300px" margin={"auto"}>
      {children}
    </Container>
  );
};
