import RightDrawer from "@/Components/Layout Components/Misc/RightDrawer";
import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";

const ASSMRightSide = () => {
  return (
    <Box p="10px" w="70%" pl="40px" position={"relative"} left="300px">
      <HStack justifyContent={"space-between"} alignItems="Center">
        <Box>
          <Heading
            as="h2"
            fontSize="27px"
            fontWeight={350}
            color="#1b1b1b"
            mb="10px"
          >
            Assignment
          </Heading>
          <Text fontWeight={500} fontSize={"xl"}>
            Class 12-A
          </Text>
        </Box>
        <Box>
          <Text textAlign={"right"} fontWeight={300} fontSize={"xl"}>
            Mathematics
          </Text>
          <Button
            textAlign={"right"}
            p="0"
            color="#1C80DD"
            bg="tranparent"
            _hover={{ bg: "transparent" }}
          >
            +Add an assignment
          </Button>
        </Box>
      </HStack>
      <HStack justifyContent={"center"}>
        <Text position="relative" fontSize={"18px"} color="#cecece" fontWeight={400} py="200px">
          Assignments not created yet
        </Text>
      </HStack>
    </Box>
  );
};

export default ASSMRightSide;
