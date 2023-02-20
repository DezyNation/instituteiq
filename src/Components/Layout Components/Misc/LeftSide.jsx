import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { classVAssignmentData } from "@/Components/Assessment Management/index/Index";

const assessmentClasses = [
  { class: "V-A", students: 50, rate: 85 },
  { class: "V-B", students: 50, rate: 90 },
  { class: "V-C", students: 50, rate: 72 },
];

const colors = ["#3CCF4E", "#1C80DD", "#FC8F2B"];
var colorIndex = -1;

const classesData = [
  {
    typeName: "Secondary",
    classes: {
      12: {
        Sections: ["A", "B", "C"],
      },
      11: {
        sections: ["A", "B", "C"],
      },
    },
  },
  {
    typeName: "Middle",
    classes: {
      8: {
        Sections: ["A", "B", "C"],
      },
      7: {
        sections: ["A", "B", "C"],
      },
      6: {
        sections: ["A", "B", "C"],
      },
    },
  },
  {
    typeName: "Primary",
    classes: {
      5: {
        Sections: ["A", "B", "C"],
      },
      4: {
        sections: ["A", "B", "C"],
      },
      3: {
        sections: ["A", "B", "C"],
      },
      2: {
        sections: ["A", "B", "C"],
      },
      1: {
        sections: ["A", "B", "C"],
      },
    },
  },
  {
    typeName: "Pre Primary",
    classes: {
      Kindergarden: {
        Sections: ["A", "B", "C"],
      },
    },
  },
];


const LeftSide = (props) => {
  const handleClassAssignmentsCardClick = () => {
    props.setAssignmentDataToShow(classVAssignmentData);
  };

  return (
    <VStack
      w="300px"
      bg={props.page === "assessment-management" ? "#f5f5f5" : "#fbfbfb"}
      borderRight="2px solid #BABCC0;"
      px="10px"
      h="100vh"
      top="30px"
      position={"fixed"}
      overflowY="auto"
      gap={props.page === "assessment-management" ? "20px" : ""}
    >
      <Heading
        as="h2"
        fontSize={"30px"}
        fontWeight="400"
        color={"#575656"}
        mb="15px"
        w="100%"
      >
        {props.heading}
      </Heading>
      {props.page !== "assessment-management" && (
        <Divider border="1px solid black" w="95%" />
      )}
      {props.page !== "assessment-management" && (
        <Accordion
          defaultIndex={[]}
          allowMultiple
          w="95%"
          transform={"translatey(18px)"}
        >
          {classesData.map((type, index) => {
            return (
              <AccordionItem key={`${type}_${index}`} mb="10px">
                <h2>
                  <AccordionButton
                    h="50px"
                    color={"#818181"}
                    border="1px solid #DDDDDD"
                    bg="#fff"
                    borderRadius="8px"
                  >
                    <Box as="span" flex="1" textAlign="left" color={"#818181"}>
                      {type.typeName}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                {Object.entries(type.classes).map((className) => {
                  return (
                    <AccordionPanel p={0}>
                      <Accordion defaultIndex={[]} allowMultiple mt="8px">
                        <AccordionItem w={"100%"}>
                          <AccordionButton
                            h="50px"
                            border="1px solid #DDDDDD"
                            bg="#fff"
                            borderRadius="8px"
                            color="#818181"
                            w="95%"
                            mx="auto"
                          >
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              color={"#818181"}
                            >
                              {className[0]}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                          {Object.entries(className[1])[0][1].map(
                            (section, index) => {
                              return (
                                <AccordionPanel w="95%" mx="auto">
                                  <Flex
                                    alignItems={"center"}
                                    bg={index === 0 ? "#59A2E6" : ""}
                                    color={index === 0 ? "#fff" : "#818181"}
                                    p="8px"
                                    borderRadius={"8px"}
                                  >
                                    <Text>{`Section ${section}`}</Text>
                                    <ChevronRightIcon ml="auto" />
                                  </Flex>
                                </AccordionPanel>
                              );
                            }
                          )}
                          <AccordionPanel>
                            <Link href="" style={{ color: "#1c80DD" }}>
                              +Add new section
                            </Link>
                          </AccordionPanel>
                        </AccordionItem>
                      </Accordion>
                    </AccordionPanel>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
      {props.page === "assessment-management" &&
        assessmentClasses.map((item, index) => {
          colorIndex = colorIndex < 2 && colorIndex >= -1 ? colorIndex + 1 : 0;
          return (
            <Flex
              key={`${item.class}_${index}`}
              border="1px solid #AEAEAE"
              boxShadow="2px 2px 10px rgba(217, 217, 217, 0.25)"
              as="button"
              bg="#f6f6f6"
              borderRadius="12px"
              w="250px"
              h="156px"
              alignItems={"center"}
              justifyContent="space-around"
              onClick={handleClassAssignmentsCardClick}
            >
              <Box color="#5d5d5d">
                <Text fontSize={"lg"}>Class {item.class}</Text>
                <Text fontSize={"md"}>Students {item.students}</Text>
              </Box>
              <Box>
                <CircularProgress
                  value={item.rate}
                  size="80px"
                  thickness={"14px"}
                  color={colors[colorIndex]}
                >
                  <CircularProgressLabel
                    fontSize={"lg"}
                  >{`${item.rate}%`}</CircularProgressLabel>
                </CircularProgress>
                <Text color="gray">Rate</Text>
              </Box>
            </Flex>
          );
        })}
    </VStack>
  );
};

export default LeftSide;
