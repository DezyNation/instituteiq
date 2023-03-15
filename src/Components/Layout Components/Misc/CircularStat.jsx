import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const CircularStat = ({heading,value,legends}) => {
  const circularProgress = useRef();
  let borderColors = {
    borderLeft : "15px solid #3ccf4e",
    borderTop : "15 solid #3ccf4e",
    borderRight : "15 solid #3ccf4e",
    borderBottom : "15 solid #3ccf4e",
  }

  // (function borderStyle(){
  //   if(value < 25){
  //     borderColors['borderTop'] = "15px solid #EF5B0CB5"
  //   }
  //   else if(value < 50 && value > 25){
  //     borderColors['borderTop'] = "15px solid #EF5B0CB5"
  //     borderColors['borderRight'] = "15px solid #EF5B0CB5"
  //   }
  //   else if(value < 75 && value > 50){
  //     borderColors['borderTop'] = "15px solid #EF5B0CB5"
  //     borderColors['borderRight'] = "15px solid #EF5B0CB5"
  //     borderColors['borderBottom'] = "15px solid #EF5B0CB5"
  //   }
  //   else if(value < 100 && value > 75){
  //     borderColors['borderTop'] = "15px solid #EF5B0CB5"
  //     borderColors['borderRight'] = "15px solid #EF5B0CB5"
  //     borderColors['borderBottom'] = "15px solid #EF5B0CB5"
  //     borderColors['borderLeft'] = "15px solid #EF5B0CB5"
  //   }
  // })()

  return (
    <Flex bg="#fff" w="304px" h="260px" borderRadius="12px" p="10px" flexDirection="column" justifyContent="space-between">
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
          borderLeft={"15px solid #EF5B0CB5"}
          borderTop={"15px solid #EF5B0CB5"}
          borderRadius="100%"
        >
          {value}
        </Text>
      </Flex>
      <Flex justifyContent="space-around">
            <li style={{fontSize:"20px", fontWeight:"500", listStyleType:"disc",color:"#EF5B0CB5"}}>{[legends[0]]}</li>
            <li style={{fontSize:"20px", fontWeight:"500", listStyleType:"disc",color:"#3CCF4E"}}>{[legends[1]]}</li>
      </Flex>
    </Flex>
  );
};

export default CircularStat;
