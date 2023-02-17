import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { Children } from "react";
import Header from "../Header/Header";

const MainPage = (props) => {
  return (
    <Flex
      w="83%"
      flexDirection="column"
      alignItems="flex-end"
      bg="#f5f5f5"
      // bg="#F9FAFB"
      h="max-content"
      pb="50px"
      ml="17%"
      height="100vh"
      overflow="auto"
    >
      <Header />
      <Box w={props.page==="curriculum-progress"?"100%":"90%"} alignSelf="center" bg="#f5f5f5">
        {props.page!=="curriculum-progress" && <Heading
          as={"h1"}
          fontWeight="400"
          fontSize={"xx-large"}
          my="30px"
        >
          {props.heading}
        </Heading>}
        {props.children}
      </Box>
    </Flex>
  );
};

export default MainPage;
