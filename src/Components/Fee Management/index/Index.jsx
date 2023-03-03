import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import RightDrawer from "@/Components/Layout Components/Misc/RightDrawer";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const topBar = [
  "Fee Structure",
  "Offers and discount",
  "Fee Collection",
  "Transaction",
  "Payment Gateway",
];
export const classes = [
  "Class 10",
  "Class 9",
  "Class 8",
  "Class 7",
  "Class 6",
  "Class 5",
  "Class 4",
];
const classesFeeDefined = ["Class 9", "Class 10"];
const classesFeeStructure = [
  {
    class: "Class 9",
    feeStructureName: {
      ReceiptSeries: "XYZ-1",
      installmentMonth: "Jan-Feb-Mar...",
      dueDate: 15,
      totalAmount: "15,180",
    },
    feeTypesData: [
      {
        feeType: "Admission Fee",
        amount: 3000,
        tax: 0,
        totalWithTax: 15180,
      },
      {
        feeType: "Sports Fee",
        amount: 2500,
        tax: 18,
        totalWithTax: 14780,
      },
    ],
  },
  {
    class: "Class 10",
    feeStructureName: {
      ReceiptSeries: "XYZ-2",
      installmentMonth: "Jan-Feb-Mar..",
      dueDate: 15,
      totalAmount: "15,190",
    },
    feeTypesData: [
      {
        feeType: "Admission Fee",
        amount: 3000,
        tax: 0,
        totalWithTax: 15190,
      },
      {
        feeType: "Sports Fee",
        amount: 2500,
        tax: 18,
        totalWithTax: 14780,
      },
    ],
  },
];
const Index = () => {
  const [activeTab, setActiveTab] = useState(topBar[0]);
  const changeTab = (e) => {
    setActiveTab(topBar[topBar.indexOf(e.target.innerHTML)]);
  };
  return (
    <MainPage heading={"Fee Management"}>
      <HStack justifyContent={"space-between"}>
        {topBar.map((element, index) => {
          if (element === activeTab) {
            return (
              <Button
                key={`${element}_${index}`}
                position="relative"
                bg="transparent"
                onClick={changeTab}
                _hover={{ bg: "transparent" }}
                _after={{
                  content: '""',
                  w: "100%",
                  h: "1px",
                  bg: "black",
                  position: "absolute",
                  left: "0",
                  bottom: "0",
                }}
              >
                {element}
              </Button>
            );
          } else
            return (
              <Button
                fontWeight={400}
                color="#B3B0B0"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                onClick={changeTab}
              >
                {element}
              </Button>
            );
        })}
      </HStack>
      <HStack justifyContent={"space-between"} mt="20px">
        <Heading as="h3" fontWeight={400} fontSize={"lg"}>
          Classes
        </Heading>
        <RightDrawer page="fee-management" buttonText="+ Create Structure" />
      </HStack>
      <VStack>
        <Accordion defaultIndex={[]} allowMultiple w="100%" mt="20px">
          {classes.map((element, index) => {
            if (classesFeeDefined.includes(element)) {
              return (
                <AccordionItem
                  key={`${element}_${index}`}
                  bg="#E2E1FF"
                  mb="10px"
                  p="5px"
                  borderRadius="12px"
                  _expanded={{
                    borderTopLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    bg: "black",
                  }}
                >
                  <h2>
                    <AccordionButton _hover={{ bg: "#f5f5f5" }} p="0">
                      <HStack
                        p="13px 17px"
                        bg="#E2E1FF"
                        justifyContent={"space-between"}
                        w="100%"
                        boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
                      >
                        <Text>{element}</Text>
                        <AccordionIcon />
                      </HStack>
                    </AccordionButton>
                  </h2>
                  {classesFeeDefined.includes(element) && (
                    <AccordionPanel pb={4} bg="#E2E1FF">
                      <Divider h="1px" bg="gray" />
                      <Text my="10px" fontSize={"md"} fontWeight={500}>
                        Fee Structure Name
                      </Text>
                      <HStack justifyContent={"space-between"}>
                        <Text w="20%" textAlign={"center"}>
                          Receipt Series
                        </Text>
                        <Text w="20%" textAlign={"center"}>
                          Installment Month
                        </Text>
                        <Text w="20%" textAlign={"center"}>
                          Installment Due date
                        </Text>
                        <Text w="20%" textAlign={"center"}>
                          Total amount
                        </Text>
                      </HStack>
                      {classesFeeStructure.map((feeStructureItem, index) => {
                        if (element === feeStructureItem.class) {
                          return (
                            <Flex
                              justifyContent={"space-between"}
                              key={`${classesFeeStructure.class}_${index}`}
                            >
                              <Text
                                color="black"
                                fontWeight={500}
                                textAlign={"center"}
                                w="20%"
                              >
                                {
                                  feeStructureItem.feeStructureName
                                    .ReceiptSeries
                                }
                              </Text>
                              <Text
                                color="black"
                                fontWeight={500}
                                textAlign={"center"}
                                w="20%"
                              >
                                {
                                  feeStructureItem.feeStructureName
                                    .installmentMonth
                                }
                              </Text>
                              <Text
                                color="black"
                                fontWeight={500}
                                textAlign={"center"}
                                w="20%"
                              >
                                {feeStructureItem.feeStructureName.dueDate}
                              </Text>
                              <Text
                                color="black"
                                fontWeight={500}
                                textAlign={"center"}
                                w="20%"
                              >
                                {feeStructureItem.feeStructureName.totalAmount}
                              </Text>
                            </Flex>
                          );
                        }
                      })}
                      <TableContainer mt="2%" variant="unstyled">
                        <Table size="sm" w="100%" mt="10px">
                          <Thead>
                            <Tr>
                              <Th textAlign={"center"} w="25%" color="1a1a1a">
                                Fee Type
                              </Th>
                              <Th textAlign={"center"} w="25%" color="1a1a1a">
                                Amount
                              </Th>
                              <Th textAlign={"center"} w="25%" color="1a1a1a">
                                Tax%
                              </Th>
                              <Th textAlign={"center"} w="25%" color="1a1a1a">
                                Total Amount With Taxes
                              </Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            {classesFeeStructure.map((feeStructureItem) => {
                              if (element === feeStructureItem.class) {
                                return feeStructureItem.feeTypesData.map(
                                  (feeStructureData, index) => {
                                    return (
                                      <Tr
                                        key={`${classesFeeStructure.class}_${index}`}
                                      >
                                        <Td
                                          textAlign={"center"}
                                          color="black"
                                          py="10px"
                                        >
                                          {feeStructureData.feeType}
                                        </Td>
                                        <Td textAlign={"center"} color="black">
                                          ₹ {feeStructureData.amount}
                                        </Td>
                                        <Td textAlign={"center"} color="black">
                                          {feeStructureData.tax}
                                        </Td>
                                        <Td textAlign={"center"} color="black">
                                          ₹ {feeStructureData.totalWithTax}
                                        </Td>
                                      </Tr>
                                    );
                                  }
                                );
                              }
                            })}
                          </Tbody>
                        </Table>
                      </TableContainer>
                      <Divider h="1px" bg="gray" />
                    </AccordionPanel>
                  )}
                </AccordionItem>
              );
            } else
              return (
                <AccordionItem border="none" mb="10px">
                  <HStack
                    p="18px 22px"
                    bg="#E2E1FF"
                    justifyContent={"space-between"}
                    w="100%"
                    boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
                    borderRadius="12px"
                  >
                    <Text>{element}</Text>
                    <Text color="red" pr="50px">
                      No fee structure defined
                    </Text>
                  </HStack>
                </AccordionItem>
              );
          })}
        </Accordion>
      </VStack>
    </MainPage>
  );
};

export default Index;
