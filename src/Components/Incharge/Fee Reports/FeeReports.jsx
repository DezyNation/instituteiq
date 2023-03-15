import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const feeReportsData = [
  {
    studentName: "Bhoomi Sagra",
    class: 9,
    section: "A",
    noOfMonths: 6,
    totalFeeDue: 2000,
  },
  {
    studentName: "Sangam",
    class: 10,
    section: "B",
    noOfMonths: 9,
    totalFeeDue: 5000,
  },
  {
    studentName: "Sanjay",
    class: 6,
    section: "A",
    noOfMonths: 6,
    totalFeeDue: 10000,
  },
];

const FeeReports = () => {
  return (
    <MainPage heading="Fee Reports">
      <HStack pl="30px" justifyContent={"space-between"}>
        <HStack w="50%" justifyContent={"space-between"}>
          <Text color="#2E68FD">Filters : </Text>
          <HStack>
            <Text>Class </Text>
            <Select
              background="#FFFFFF"
              border="2px solid #DDDDDD"
              borderRadius="7px"
            >
              <option value="all">All</option>
              <option value="option-1">Option-1</option>
              <option value="option-2">Option-2</option>
            </Select>
          </HStack>
          <HStack>
            <Text>Section </Text>
            <Select
              background="#FFFFFF"
              border="2px solid #DDDDDD"
              borderRadius="7px"
            >
              <option value="all">All</option>
              <option value="option-1">Option-1</option>
              <option value="option-2">Option-2</option>
            </Select>
          </HStack>
        </HStack>
        <Box
          border="2px solid #DDDDDD"
          borderRadius={"9px"}
          alignItems="center"
          h={"40px"}
          display="inline-block"
          w="max-content"
          mr="10px"
        >
          <Button
            // onClick={onClose}
            h="100%"
            borderRadius="9px"
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            borderRightStyle="none"
            type="submit"
            background="#fff"
            boxShadow="0px 1px 11px rgba(0, 0, 0, 0.09)"
            color="#1C80DD"
            px="40px"
            _hover={{ bg: "#fff" }}
          >
            Download Report
          </Button>
          <Button
            borderRadius="9px"
            borderTopLeftRadius={0}
            borderBottomLeftRadius={0}
            borderLeft="2px solid #DDDDDD"
            as="button"
            h="100%"
            p="0"
            background="#fff"
            boxShadow="0px 1px 11px rgba(0, 0, 0, 0.09)"
            // onClick={() => setSubmitButton(!submitButton)}
            _hover={{ bg: "#fff" }}
          >
            <ChevronDownIcon />
          </Button>
        </Box>
      </HStack>
      <TableContainer my="20px" borderRadius="12px" border="1px solid #7E7E7E">
        <Table>
          <Thead bg="#EFEFFD" borderBottom={"2px solid #7E7E7E"}>
            <Tr>
              <Th color="#25557B" textAlign={"center"}>
                Sl. NO
              </Th>
              <Th color="#25557B" textAlign={"center"}>
                Student Name
              </Th>
              <Th color="#25557B" textAlign={"center"}>
                Class
              </Th>
              <Th color="#25557B" textAlign={"center"}>
                Section
              </Th>
              <Th color="#25557B" textAlign={"center"}>
                No Of Months
              </Th>
              <Th color="#25557B" textAlign={"center"}>
                Total Fee Due
              </Th>
            </Tr>
          </Thead>
          <Tbody bg="#fff">
            {feeReportsData.length === 0 && (
              <Tr>
                <Td
                  fontSize={"lg"}
                  py="25px"
                  color="#E5E5E5"
                  colSpan={6}
                  textAlign="center"
                >
                  No Records Found
                </Td>
              </Tr>
            )}
            {feeReportsData.map((element, index) => {
              return (
                <Tr key={`${element.studentName}_${index}`}>
                  <Td borderBottom="none" py={2} color="#505050" textAlign={"center"}>
                    {index + 1}
                  </Td>
                  <Td borderBottom="none" py={2} color="#505050" textAlign={"center"}>
                    {element.studentName}
                  </Td>
                  <Td borderBottom="none" py={2} color="#505050" textAlign={"center"}>
                    {element.class}
                  </Td>
                  <Td borderBottom="none" py={2} color="#505050" textAlign={"center"}>
                    {element.section}
                  </Td>
                  <Td borderBottom="none" py={2} color="#505050" textAlign={"center"}>
                    {element.noOfMonths}
                  </Td>
                  <Td borderBottom="none" py={2} color="#505050" textAlign={"center"}>
                    {element.totalFeeDue}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </MainPage>
  );
};

export default FeeReports;
