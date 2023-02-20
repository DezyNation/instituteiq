import RightDrawer from "@/Components/Layout Components/Misc/RightDrawer";
import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";

const ASSMRightSide = () => {
  return (
    <Box p="10px" w="70%" pl="40px" position={"relative"} left="300px">
      <HStack justifyContent={"space-between"} alignItems="Center">
        <Heading
          as="h2"
          fontSize="30px"
          fontWeight={400}
          color="#1b1b1b"
          mb="30px"
        >
          Curriculum Progress
        </Heading>

        <RightDrawer
          buttonText="+ Add"
          border="1px solid #EEEEEE"
          borderRadius="18px"
          bg="#FFFDFD"
          textDecorationLine="none"
          textAlign={"center"}
          color="#1C80DD"
          px="10px"
          py="5px"
          page={"curriculum-progress"}
        />
      </HStack>
    </Box>
  );
};

export default ASSMRightSide;
