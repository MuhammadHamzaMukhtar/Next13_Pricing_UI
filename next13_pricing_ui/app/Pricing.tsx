"use client";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";
import CheckIcon from "./icons/CheckIcon";

export default function Pricing() {
  return (
    <ChakraProvider>
      <Box w={"994px"} marginLeft="220px" marginRight={"226px"}>
        <Flex>
          <Box
            textAlign={"center"}
            p="48px"
            bg={"#d0bff3"}
            // opacity="0.1"
            color={"black"}
          >
            <Text fontWeight={"bold"}>Premium PRO</Text>
            <Heading fontSize={"60px"}>$329</Heading>
            <Button mt={"37px"} w="282px" bg={"#805AD5"} color="white">
              Get Started
            </Button>
          </Box>
          <Box textAlign={"center"} p="48px">
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack pt={"16px"}>
              <CheckIcon />
              <Text>International calling and messaging API</Text>
            </HStack>
            <HStack pt={"16px"}>
              <CheckIcon />
              <Text>Additional phone numbers</Text>
            </HStack>
            <HStack pt={"16px"}>
              <CheckIcon />
              <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack pt={"16px"}>
              <CheckIcon />
              <Text>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
