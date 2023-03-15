import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const AssessmentTotal = ({ color, percentage, marks, grades }) => {
  return (
    <Flex
      w="90%"
      justifyContent="space-between"
      alignItems="center"
      ml="40px"
      mt="30px"
      bg="#fff"
      boxShadow="0px 1px 2px rgba(0, 0, 0, 0.2)"
      borderRadius="12.7538px"
      h="70px"
      px="40px"
      py="7px"
      position="relative"
    >
      <Flex flexDirection="column" w="35%" alignItems="center">
        <Link href="">
          <Text color="#3948CD" display="inline" fontWeight="450" fontSize="lg">
            Download &nbsp;
            <DownloadIcon color="#3948CD" />
          </Text>
        </Link>
      </Flex>
      <Text fontWeight="500" fontSize="lg">
        Total:
      </Text>
      <Text fontWeight="450" fontSize="lg">
        {marks}
      </Text>
      <CircularProgress size="60px" value={percentage} color={color}>
        <CircularProgressLabel fontSize="lg">{`${percentage}%`}</CircularProgressLabel>
      </CircularProgress>
      <Text fontWeight="500" fontSize="2xl">
        {grades}
      </Text>
    </Flex>
  );
};

export default AssessmentTotal;
