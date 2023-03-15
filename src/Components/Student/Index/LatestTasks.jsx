import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Circle, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const LatestTasks = () => {
  const LatestTasksList = [
    {
      subject: "Mathematics",
      date: "06/12/22",
      status: "Finished",
    },
    {
      subject: "Social Science",
      date: "06/12/22",
      status: "Finished",
    },
    {
      subject: "Science",
      date: "06/12/22",
      status: "Finished",
    },
    {
      subject: "Hindi",
      date: "06/12/22",
      status: "Finished",
    },
  ];
  return (
    <Box
      w="500px"
      borderRadius="12px"
      bg="#F5F3FB"
      border="0.3px solid #000000"
      boxShadow="2px 4px 4px rgba(0, 0, 0, 0.25)"
      p="15px"
    >
      <Flex justifyContent="space-between" alignItems="center" mb="20px">
        <Heading as="h1" fontSize="24px" fontWeight="500" lineHeight="28px">
          Latest Tasks
        </Heading>
      </Flex>
      {LatestTasksList.map((element, index) => {
        return (
          <Box key={`${element.subject}_${index}`} bg="#fff" p="10px" boxShadow="0px 4.50136px 4.50136px rgba(0, 0, 0, 0.25)" borderRadius="13.5px" mb="20px">
            <Flex alignItems="center">
              <Circle
                w="40px"
                h="40px"
                bg={index === 0 ? "#E8F9FD" : "#DCF6DF"}
                color="white"
                mr="10px"
              >
                <CalendarIcon color="gray" />
              </Circle>
              <Box>
                <Text
                  fontSize="16px"
                  fontWeight="400"
                  lineHeight="27px"
                >{`Homework ${
                  index + 1 < 10 ? "0" + (index + 1) : index + 1
                }`}</Text>
                <Text
                  fontWeight="500"
                  color="#c4c4c4"
                  fontSize="13.5px"
                  lineHeight="26px"
                >
                  {element.subject}
                </Text>
              </Box>
              <Box ml="auto">
                <Text
                  ml="auto"
                  color="#8F8F8F"
                  fontWeight="400"
                  fontSize="12px"
                  lineHeight="26px"
                >
                  {element.date}
                </Text>
                <Text
                  ml="auto"
                  fontWeight="400"
                  fontSize="13.5px"
                  color = {element.status === "Finished" ? "#1CDD46" : "#F79210"}
                  lineHeight="23px"
                >
                  {element.status}
                </Text>
              </Box>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default LatestTasks;
