import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Header from "../Layout Components/Header/Header";
import Assessment from "../Misc/Assessment";

const Index = () => {
  return (
    <>
      <Flex w="83%" flexDirection="column" alignItems="flex-end">
        <Header />
        <Box alignSelf="flex-start" w="100%" h="100%" bg="#f5f5f5">
          <Box bg="#f5f5f5" w="100%" h="max-content">
            <Heading
              as={"h1"}
              color="#F79210"
              fontWeight="bold"
              fontSize={"xx-large"}
              ml="40px"
              mt="30px"
            >
              Perfromance
            </Heading>
            <Flex
              justifyContent="space-between"
              w="90%"
              bg="#F3F0FA"
              ml="40px"
              mt="30px"
              boxShadow="2.12563px 6.37688px 4.25125px rgba(0, 0, 0, 0.25)"
              px="21px"
              py="7px"
              borderRadius="12.7538px"
            >
              <Heading fontWeight="600" fontSize={"large"}>
                Assessment
              </Heading>
              <Heading fontWeight="600" fontSize={"large"}>
                Date
              </Heading>
              <Heading fontWeight="600" fontSize={"large"}>
                Teacher
              </Heading>
              <Heading fontWeight="600" fontSize={"large"}>
                Percentage
              </Heading>
              <Heading fontWeight="600" fontSize={"large"}>
                Marks
              </Heading>
              <Heading fontWeight="600" fontSize={"large"}>
                Grades
              </Heading>
            </Flex>
            <Assessment
              color="#1C80DD"
              title="Assessment 1"
              date="7/2/22"
              teacher="Teacher"
              percentage="59"
              marks="432/625"
              grades="B+"
            />
            <Assessment
              color="#F79210"
              title="Assessment 2"
              date="27/2/22"
              teacher="Teacher"
              percentage="80"
              marks="532/625"
              grades="A"
            />
            <Assessment
              color="#37D334"
              title="Assessment 3"
              date="2/4/22"
              teacher="Teacher"
              percentage="70"
              marks="472/625"
              grades="B"
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Index;
