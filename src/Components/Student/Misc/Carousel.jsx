import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useRef } from "react";

const Carousel = () => {
  // const buttonsParent = useRef()
  // const moveCarousel = (e) =>{
  //   buttonsParent.current.style.width = ""
  // }

  return (
    <Flex gap="10px" w="100%" mt="20px" alignItems="center">
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
