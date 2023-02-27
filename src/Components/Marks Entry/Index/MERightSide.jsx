import { Box, Heading, HStack, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";

const MERightSide = () => {
  const marksEntryData = [
    { studentName: "Student Name", studentRollNo: 98065 },
    { studentName: "Student Name", studentRollNo: 98065 },
    { studentName: "Student Name", studentRollNo: 98065 },
    { studentName: "Student Name", studentRollNo: 98065 },
    { studentName: "Student Name", studentRollNo: 98065 },
    { studentName: "Student Name", studentRollNo: 98065 },
    { studentName: "Student Name", studentRollNo: 98065 },
    { studentName: "Student Name", studentRollNo: 98065 },
  ];

  return (
    <Box w="70%" left="300px" position={"relative"} px="20px">
      <HStack w="100%" justifyContent={"space-between"}>
        <VStack alignItems={"left"}>
          <Heading as="h2" fontSize="xl" fontWeight={450}>
            Marks Entry
          </Heading>
          <Heading as="h2" fontSize="xl" fontWeight={500}>
            Your Students
          </Heading>
        </VStack>
        <VStack alignItems={"left"}>
          <Text>
            Reviewed: <span style={{ color: "green" }}>30</span>
          </Text>
          <Text>
            Pending Review: <span style={{ color: "red" }}>20</span>
          </Text>
        </VStack>
      </HStack>
      <VStack w="100%" mt="20px">
        {marksEntryData.map((item, index) => {
          return (
            <HStack
              w="90%"
              background="#FFFFFF"
              border="1px solid #DADADA"
              box-shadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
              borderRadius="12px"
              py="10px"
              justifyContent={"space-around"}
            >
              <VStack>
                <Text>{item.studentName}</Text>
                <Text>Roll no: {item.studentRollNo}</Text>
              </VStack>
              <VStack>
                <Text>Total Marks</Text>
                <Text>40</Text>
              </VStack>
              <VStack>
                <Text>Obtained</Text>
                <Input
                  p="0"
                  type="number"
                  w="20px"
                  h="20px"
                  background="#FFFFFF"
                  border="1px solid #B5B5B5"
                  borderRadius="0"
                ></Input>
              </VStack>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
};

export default MERightSide;
