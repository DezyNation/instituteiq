import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const CircularStat = ({heading}) => {
  const circularProgress = useRef();

  return (
    <Flex bg="#fff" w="254px" h="260px" borderRadius="12px" p="10px" flexDirection="column" justifyContent="space-between">
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="20px" fontWeight="500" line-height="23px">
          {heading}
        </Text>
        <ChevronRightIcon boxSize="7" />
      </Flex>
      <Flex justifyContent="center" alignItems="center" mt="10px">
        <Text
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="#000"
          fontSize="40px"
          fontWeight="600"
          thickness="12px"
          h="120px"
          w="120px"
          border="15px solid #3CCF4E"
          borderRadius="100%"
          borderLeft="15px solid #EF5B0CB5"
          borderTop="15px solid #EF5B0CB5"
        >
          59%
        </Text>
      </Flex>
      <Flex justifyContent="space-around">
            <li style={{fontSize:"20px", fontWeight:"500", listStyleType:"disc",color:"#EF5B0CB5"}}>Absent</li>
            <li style={{fontSize:"20px", fontWeight:"500", listStyleType:"disc",color:"#3CCF4E"}}>Present</li>
      </Flex>
    </Flex>
  );
};

export default CircularStat;
