import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Circle, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const IndexTimeTable = ({width}) => {
  const subjectIcon = (element) => {
    var icon = element.charAt(0);
    if (icon.length < 2) {
      for (var i = 0; i < element.length; i++) {
        if (element[i] === " ") {
          icon += element[i + 1];
          return icon;
        }
      }
    }
    return icon;
  };
  const TimeTableList = [
    {
      subject: "Mathematics",
      time: "8:30 AM - 9:30 AM",
      teacher: "Teacher Name",
    },
    {
      subject: "Social Science",
      time: "8:30 AM - 9:30 AM",
      teacher: "Teacher Name",
    },
    {
      subject: "Science",
      time: "8:30 AM - 9:30 AM",
      teacher: "Teacher Name",
    },
    {
      subject: "Hindi",
      time: "8:30 AM - 9:30 AM",
      teacher: "Teacher Name",
    },
    {
      subject: "Kannada",
      time: "8:30 AM - 9:30 AM",
      teacher: "Teacher Name",
    },
  ];
  return (
    <Box
      w={width}
      borderRadius="12px"
      bg="#F4F2FA"
      border="0.3px solid #000000"
      boxShadow="2px 4px 4px rgba(0, 0, 0, 0.25)"
      p="15px"
    >
      <Flex justifyContent="space-between" alignItems="center" mb="20px">
        <Heading as="h1" fontSize="20px" fontWeight="500" lineHeight="23px">
          Today's Time-Table
        </Heading>
        <ChevronRightIcon boxSize={7} color="#818181" />
      </Flex>
        {TimeTableList.map((element, index) => {
          return (
            <Box key={`${element.subject}_${index}`}>
              <Flex alignItems="center">
                <Circle w="40px" h="40px" bg="#D4F6CC" color="white" mr="10px">
                  <Box as="span" fontWeight="500" fontSize="16px" color="#000">
                    {subjectIcon(element.subject)}
                  </Box>
                </Circle>
                <Box>
                  <Text fontWeight="500" fontSize="16px" lineHeight="26px">
                    {element.subject}
                  </Text>
                  <Text
                    color="#8F8F8F"
                    fontWeight="400"
                    fontSize="12px"
                    lineHeight="26px"
                  >
                    {element.time}
                  </Text>
                </Box>
                <Text
                  ml="auto"
                  color="#8F8F8F"
                  fontWeight="400"
                  fontSize="12px"
                  lineHeight="26px"
                >
                  {element.teacher}
                </Text>
              </Flex>
              {index !== TimeTableList.length - 1 && (
                <Divider height="2px" bg="#BCBCBC" mb="25px"/>
              )}
            </Box>
          );
        })}
    </Box>
  );
};

export default IndexTimeTable;
