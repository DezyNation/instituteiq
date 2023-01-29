import { Flex, Heading } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Text } from '@chakra-ui/react'
import React from "react";

const Assessment = ({ color,title, date, teacher, percentage, marks, grades }) => {
  return (
    <Flex w="90%" justifyContent="space-between" alignItems="center" ml="40px" mt="30px" bg="#F3F0FA" boxShadow={`2.12563px 6.37688px 4.25125px rgba(0, 0, 0, 0.25)`} borderRadius="12.7538px" h="100px" px="40px" py="7px" position="relative" _before={{ content: '""', position: 'absolute', w:"10px", h:"100%", bg:`${color}`, left:"0", borderTopLeftRadius:"12.7538px", borderBottomLeftRadius:"12.7538px" }}>
      <Text fontWeight="450" fontSize='lg'>{title}</Text>
      <Text fontWeight="450" fontSize='lg'>{date}</Text>
      <Text fontWeight="450" fontSize='lg'>{teacher}</Text>
      <CircularProgress size='80px' value={percentage} color={color}>
        <CircularProgressLabel fontSize='lg'>{`${percentage}%`}</CircularProgressLabel>
      </CircularProgress>
      <Text fontWeight="450" fontSize='lg'>{marks}</Text>
      <Text fontWeight="500" fontSize="2xl">{grades}</Text>
    </Flex>
  );
};

export default Assessment;
