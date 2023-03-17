import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const LeavesList = ({ page }) => {
  const LeaveList = ["Teacher", "Teacher", "Teacher", "Teacher", "Teacher"];
  const LeaveListStudent = [{name:"Teacher", section:"C"},{name:"Teacher", section:"C"},{name:"Teacher", section:"C"},{name:"Teacher", section:"C"},{name:"Teacher", section:"C"},{name:"Teacher", section:"C"}];

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
        {page === "class-teacher" && <p>Absent List</p>}
        {page !== "class-teacher" && <p>Staff On Leave</p>}
      </Heading>
      <TableContainer w="100%" borderRadius={"0 0 10px 10px"}>
        <Table w="100%">
          <Thead py="10px" bg="rgba(0, 56, 101, 0.9)">
            {page !== "class-teacher" && (
              <Tr>
                <Th textAlign={"center"} color="white">
                  Sl. No.
                </Th>
                <Th textAlign={"center"} color="white">
                  Teacher
                </Th>
              </Tr>
            )}
            {page === "class-teacher" && (
              <Tr>
                <Th textAlign={"center"} color="white">
                  Sl. No.
                </Th>
                <Th textAlign={"center"} color="white">
                  Student
                </Th>
                <Th textAlign={"center"} color="white">
                  Section
                </Th>
              </Tr>
            )}
          </Thead>
          <Tbody color="#000" bg="#Fff" fontFamily="Sans-serif">
            {page!=="class-teacher"&&LeaveList.map((teacher, index) => {
              return (
                <Tr key={`${teacher}_${index}`} borderBottom="1px solid black">
                  <Td textAlign={"center"} py="5px" fontSize="s">
                    {index + 1}
                  </Td>
                  <Td textAlign={"center"} py="5px" fontSize="s">
                    {teacher}
                  </Td>
                </Tr>
              );
            })}
            {page==="class-teacher"&&LeaveListStudent.map((student, index) => {
              return (
                <Tr key={`${student.name}_${index}`} borderBottom="1px solid black">
                  <Td textAlign={"center"} py="5px" fontSize="s">
                    {index + 1}
                  </Td>
                  <Td textAlign={"center"} py="5px" fontSize="s">
                    {student.name}
                  </Td>
                  <Td color="orange" textAlign={"center"} py="5px" fontSize="s">
                    {student.section}
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeavesList;
