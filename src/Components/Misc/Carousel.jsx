import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Carousel = () => {
  return (
    <Flex gap="10px" w="90%" ml="40px" mt="20px" alignItems="center">
      <ChevronLeftIcon boxSize={7} cursor="pointer"/>
      <Button
        width="20%"
        border="1px solid #D1D5DB"
        h="40px"
        borderRadius="5px"
        boxShadow="0 3px 2px 2px #D1D5DB"
        bg="#FDFDFD"
      >
        Assessment-1
      </Button>
      <Button
        width="20%"
        border="1px solid #D1D5DB"
        h="40px"
        borderRadius="5px"
        boxShadow="0 3px 2px 2px #D1D5DB"
        bg="#FDFDFD"
      >
        Assessment-2
      </Button>
      <Button
        width="20%"
        border="1px solid #D1D5DB"
        h="40px"
        borderRadius="5px"
        boxShadow="0 3px 2px 2px #D1D5DB"
        bg="#FDFDFD"
      >
        Assessment-3
      </Button>
      <Button
        width="20%"
        border="1px solid #D1D5DB"
        h="40px"
        borderRadius="5px"
        boxShadow="0 3px 2px 2px #D1D5DB"
        bg="#FDFDFD"
      >
        Assessment-4
      </Button>
      <Button
        width="20%"
        border="1px solid #D1D5DB"
        h="40px"
        borderRadius="5px"
        boxShadow="0 3px 2px 2px #D1D5DB"
        bg="#FDFDFD"
      >
        Assessment-5
      </Button>
      <ChevronRightIcon boxSize={7} cursor="pointer"/>
    </Flex>
  );
};

export default Carousel;
