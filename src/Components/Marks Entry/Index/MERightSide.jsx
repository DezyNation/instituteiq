import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";

const marksEntryData = [
  { studentName: "Student Name", studentRollNo: 98065 },
  { studentName: "Student Name", studentRollNo: 98064 },
  { studentName: "Student Name", studentRollNo: 98063 },
  { studentName: "Student Name", studentRollNo: 98062 },
  { studentName: "Student Name", studentRollNo: 98061 },
  { studentName: "Student Name", studentRollNo: 98066 },
  { studentName: "Student Name", studentRollNo: 98067 },
  { studentName: "Student Name", studentRollNo: 98068 },
];

const MERightSide = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      //AXIOS CODE GOES HERE
      console.log(values);
    },
  });

  //setting initial values dynamically
  marksEntryData.map((item) => {
    formik.initialValues[item.studentRollNo] = "";
  });


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
      <form onSubmit={formik.handleSubmit} >
        <VStack w="100%" mt="20px">
          {marksEntryData.map((item, index) => {
            return (
              <HStack
                w="90%"
                key={`${item.studentRollNo}_${index}`}
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
                    value={formik.values[`${item.studentRollNo}`]}
                    name={`${item.studentRollNo}`}
                    id={`${item.studentRollNo}`}
                    onChange={formik.handleChange}
                  ></Input>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
        <Button
          color="white"
          px="60px"
          my="20px"
          ml="auto"
          background="#25557B"
          boxShadow="0px 1px 11px rgba(0, 0, 0, 0.09)"
          borderRadius="5px"
          display={"block"}
          type="submit"
        >
          Save
        </Button>
      </form>
    </Box>
  );
};

export default MERightSide;
