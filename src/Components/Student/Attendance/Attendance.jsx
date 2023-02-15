import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Cards from "@/Components/Layout Components/Misc/Cards";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import AbsentCalender from "./AbsentCalender";

const Attendance = () => {
  const tableData = [
    {
      date: "12-12-2022",
      status: "Absent",
    },
    {
      date: "12-12-2022",
      status: "Absent",
    },
    {
      date: "12-12-2022",
      status: "Absent",
    },
    {
      date: "12-12-2022",
      status: "Absent",
    },
  ];

  return (
    <MainPage heading="Attendance">
      <Flex gap="40px" mt="50px">
        <Cards heading="Performance" value="56%" />
        <Cards heading="Attendance" value="102" />
        <Cards heading="Pending Assignment" value="98" />
        <Cards heading="Absent" value="4" />
      </Flex>
      <Flex mt="30px" justifyContent="space-evenly">
        <Box w="450px">
            <AbsentCalender />
        </Box>
        <TableContainer borderRadius="12px" color="white">
          <Table w="400px" borderRadius="12px" variant={"unstyled"}>
            <Thead bg="#1c1c1c">
              <Tr fontWeight="400" h="45px">
                <Th>Sl. No.</Th>
                <Th>Date</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody textAlign="center">
              {tableData.map((item, index) => {
                return (
                  <Tr key={`${item}_${index}`} fontWeight="400" fontSize="17px" color="#2f2f2f" bg={((index+1)%2===0) ? "#cecece" : "#fff"} h="45px">
                    <Td>{index+1}</Td>
                    <Td>{item.date}</Td>
                    <Td>{item.status}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </MainPage>
  );
};

export default Attendance;
