import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import Cards from "@/Components/Layout Components/Misc/Cards";
import ToDoList from "@/Components/Layout Components/Misc/ToDoList";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const recentAddmissionData = [
  { name: "Bhoomi", class: 5, dateofbirth: "31/10/2002", amount: 2000 },
  { name: "Sanjay", class: 2, dateofbirth: "31/10/2002", amount: 12000 },
  { name: "Sangam", class: 9, dateofbirth: "31/10/2002", amount: 7000 },
  { name: "Dhananjay", class: 5, dateofbirth: "31/10/2002", amount: 8000 },
];

const feeCollectionCardsData = [
  {
    heading: "No Of Students",
    value: 56,
  },
  {
    heading: "Fee Paid",
    value: "26k",
  },
  {
    heading: "Discount Applied",
    value: "1k",
  },
  {
    heading: "Over Paid",
    value: "126k",
  },
  {
    heading: "No Of Students",
    value: 56,
  },
  {
    heading: "Fee Paid",
    value: "26k",
  },
  {
    heading: "Discount Applied",
    value: "1k",
  },
  {
    heading: "Over Paid",
    value: "126k",
  },
];

const FeeManagement = ({ page }) => {
  return (
    <MainPage heading="Dashboard">
      <HStack justifyContent={"space-between"} w="95%" mx="auto">
        <Heading as="h2" fontWeight={400} fontSize={"2xl"}>
          Fee Collection
        </Heading>
        {page === "superAdmin" && <Text fontWeight={600}>Branch Name</Text>}
      </HStack>
      <Box>
        <Flex flexWrap="wrap" gap="20px" mt="30px">
          {feeCollectionCardsData.map((element, index) => {
            return (
              <Cards
                key={`${element.heading}_${index}`}
                heading={element.heading}
                value={element.value}
              />
            );
          })}
        </Flex>
      </Box>
      <HStack mt="40px" gap="20px" alignItems={"stretch"}>
        <VStack>
          <Text fontWeight={500} mr="auto">
            Recent Admission
          </Text>
          <TableContainer borderRadius="10px 10px 10px 10px">
            <Table>
              <Thead background="#003865">
                <Tr>
                  <Th textAlign={"center"} color="white">
                    Student Name
                  </Th>
                  <Th textAlign={"center"} color="white">
                    Class
                  </Th>
                  <Th textAlign={"center"} color="white">
                    Date of Birth
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg="#F4F2FA">
                {recentAddmissionData.map((element, index) => {
                  return (
                    <Tr
                      key={`${element.name}_${index}`}
                      borderBottom="1px solid rgba(107, 114, 128, 0.8)"
                    >
                      <Td textAlign={"center"}>{element.name}</Td>
                      <Td textAlign={"center"}>{element.class}</Td>
                      <Td textAlign={"center"}>{element.dateofbirth}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
        <ToDoList />
        <VStack>
          <Text fontWeight={500} mr="auto">
            Recent Transaction
          </Text>
          <TableContainer borderRadius="10px 10px 10px 10px">
            <Table>
              <Thead background="#003865">
                <Tr>
                  <Th textAlign={"center"} color="white">
                    Student Name
                  </Th>
                  <Th textAlign={"center"} color="white">
                    Class
                  </Th>
                  <Th textAlign={"center"} color="white">
                    Amount
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg="#F4F2FA">
                {recentAddmissionData.map((element, index) => {
                  return (
                    <Tr
                      key={`${element.name}_${index}`}
                      borderBottom="1px solid rgba(107, 114, 128, 0.8)"
                    >
                      <Td textAlign={"center"}>{element.name}</Td>
                      <Td textAlign={"center"}>{element.class}</Td>
                      <Td textAlign={"center"}>{element.amount}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </VStack>
      </HStack>
    </MainPage>
  );
};

export default FeeManagement;
