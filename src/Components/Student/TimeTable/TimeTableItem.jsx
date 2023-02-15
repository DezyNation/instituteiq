import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import React from "react";

const TimeTableItem = (props) => {
  return (
    <Flex ml="40px" mt="40px" alignItems="center" gap="20px" w="100%">
      <Circle size="30px" bg="#A9BCBA" fontSize="2xl" fontWeight="600">
        {props.number}
      </Circle>
      <Box
        w="70%"
        bg="#fff"
        boxShadow={`2.12563px 6.37688px 4.25125px rgba(0, 0, 0, 0.25)`}
        borderRadius="12.7538px"
        // h="80px"
        px="40px"
        py="5px"
        // my="auto"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          w: "8px",
          h: "100%",
          bg: "#1C80DD",
          left: "0",
          top:"0",
          borderTopLeftRadius: "12.7538px",
          borderBottomLeftRadius: "12.7538px",
        }}
      >
        <Box>
          <Text fontWeight="400" fontSize="s" textAlign="left">
            {props.time}
          </Text>
          <Text fontWeight="700" fontSize="xl" display={"block"}>
            {props.subject}
          </Text>
          <Text fontWeight="400" fontSize="s">
            {props.teacher}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default TimeTableItem;
