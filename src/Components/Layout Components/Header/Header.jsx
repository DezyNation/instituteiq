import { PhoneIcon } from "@chakra-ui/icons";
import { Circle, Flex } from "@chakra-ui/react";
import { GradCap, Notification, Phone } from "public/icons/Icons";
import React from "react";

const Header = () => {
  return (
    <Flex
      justifyContent="flex-end"
      w="100%"
      p="5px"
      h="30px"
      bg="white"
      top="0"
    >
      <Circle size="20px" bg="#34D399" color="white" mr={4}>
        <PhoneIcon boxSize={2} />
      </Circle>
        <GradCap h="35px" w="35px" mr={4}/>
      <Notification h="35px" w="35px" mr={4}/>
      <Circle
        size="25px"
        color="#2C4DE1"
        mr={4}
        bg="#DEE3F9"
        fontWeight={"bold"}
      >
        A
      </Circle>
    </Flex>
  );
};

export default Header;
