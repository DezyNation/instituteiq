import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const LeavesList = () => {
  const LeaveList = ["Teacher", "Teacher", "Teacher", "Teacher", "Teacher"];

  return (
    <Box fontFamily={"serif"} w="420px" borderRadius="10px">
      <Heading
        as="h3"
        borderRadius="10px 10px 0 0"
        textAlign="center"
        fontSize={"xl"}
        color="white"
        py="10px"
        bg="rgba(0, 56, 101, 0.9)"
      >
        Staff on leave
      </Heading>
      <TableContainer w="100%" borderRadius={"0 0 10px 10px"}>
        <Table w="100%">
          <Thead py="10px" color="white" bg="rgba(0, 56, 101, 0.9)">
            <Tr>
              <Th>Sl. No.</Th>
              <Th>Teacher</Th>
            </Tr>
          </Thead>
          <Tbody color="#000" bg="#Fff" textAlign={"center"} fontFamily="Sans-serif">
            {LeaveList.map((teacher,index)=>{
                return (
                    <Tr key={`${teacher}_${index}`} borderBottom="1px solid black">
                        <Td py="5px" fontSize="s" >{index+1}</Td>
                        <Td py="5px" fontSize="s" >{teacher}</Td>
                    </Tr>
                )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeavesList;
