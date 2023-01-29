import { PhoneIcon } from "@chakra-ui/icons";
import { Circle, Flex } from "@chakra-ui/react";
import { GradCap, Notification, Phone } from "public/icons/Icons";
import React from "react";

const Header = () => {
  return (
    <Flex
      justifyContent="flex-end"
      align-items="center"
      w="83%"
      p="5px"
      h="50px"
    >
      <Circle size="20px" bg="#34D399" color="white" mr={3}>
        <PhoneIcon boxSize={2} />
      </Circle>
      <GradCap h="35px" w="35px"/>
      <Notification h="35px" w="35px"/>
      <Circle size="25px" color="#2C4DE1" mr={3} bg="#DEE3F9" fontWeight={"bold"}>
        A
      </Circle>
    </Flex>
  );
};

export default Header;
