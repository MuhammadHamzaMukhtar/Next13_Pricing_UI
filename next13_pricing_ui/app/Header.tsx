"use client";
import { ChakraProvider, Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <ChakraProvider>
      <Box
        textAlign={"center"}
        bg={"#6B46C1"}
        color="white"
        pt={"88px"}
        pb="246px"
      >
        <Heading pb={"16px"}>Simple pricing for your business</Heading>
        <Text>Plans that are carefully crafted to suit your business.</Text>
      </Box>
    </ChakraProvider>
  );
}
