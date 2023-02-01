import { DownloadIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Assessment = ({
  slno,
  color,
  title,
  date,
  teacher,
  percentage,
  marks,
  grades,
}) => {
  return (
    <Flex
      w="90%"
      justifyContent="space-between"
      alignItems="center"
      ml="40px"
      mt="15px"
      bg="#fff"
      boxShadow={`0px 1px 2px rgba(0, 0, 0, 0.2)`}
      borderRadius="12.7538px"
      h="70px"
      px="40px"
      py="7px"
      position="relative"
      _before={{
        content: '" "',
        position: "absolute",
        w: "10px",
        h: "100%",
        bg: `${color}`,
        left: "0",
        borderTopLeftRadius: "12.7538px",
        borderBottomLeftRadius: "12.7538px",
      }}
    >
      <Text fontWeight="450" fontSize="lg">
        {slno}
      </Text>
      <Text fontWeight="450" fontSize="lg">
        {title}
      </Text>
      <Text fontWeight="450" fontSize="lg">
        {teacher}
      </Text>
      <Text fontWeight="450" fontSize="lg">
        {date}
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

export default Assessment;
