import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Th,
  Text,
  Tfoot,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const TimeTableItem = ({ number, title, date, status }) => {
  return (
    <Accordion defaultIndex={[]} allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Flex ml="40px" mt="40px" alignItems="center" gap="20px" w="100%">
            <Circle size="30px" bg="#A9BCBA" fontSize="2xl" fontWeight="600">
              {number}
            </Circle>
            <Box
              w="100%"
              bg="#F3F0FA"
              boxShadow={`2.12563px 6.37688px 4.25125px rgba(0, 0, 0, 0.25)`}
              borderRadius="12.7538px"
              h="100px"
              px="40px"
              // my="auto"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                w: "10px",
                h: "100%",
                bg: "#1C80DD",
                left: "0",
                borderTopLeftRadius: "12.7538px",
                borderBottomLeftRadius: "12.7538px",
              }}
            >
              <Box transform={"translateY(40%)"}>
                <Text fontWeight="700" fontSize="xl" textAlign="left">
                  {title}
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontWeight="400" fontSize="s">
                    {date}
                  </Text>
                  <Text
                    alignSelf="center"
                    color={status === "Upcoming" ? "#F79210" : "#37D334"}
                    fontWeight="500"
                  >
                    {status}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </AccordionButton>
        <AccordionPanel pb={4}>
          <TableContainer w="80%" mt="2%" ml="auto" mr="auto" borderRadius="10px">
            <Table size="sm" w="100%">
              <Thead bg="#1C80DD" color="white">
                <Tr>
                  <Th>Sl. No.</Th>
                  <Th>Date</Th>
                  <Th>Time</Th>
                  <Th>Subject</Th>
                </Tr>
              </Thead>
              <Tbody bg="#F4F2FA">
                <Tr>
                  <Th py="10px">1</Th>
                  <Th>1-2-2022</Th>
                  <Th>8:30 - 9:30</Th>
                  <Th>Maths</Th>
                </Tr>
                <Tr>
                  <Th py="10px">2</Th>
                  <Th>2-2-2022</Th>
                  <Th>8:30 - 9:30</Th>
                  <Th>Hindi</Th>
                </Tr>
                <Tr>
                  <Th py="10px">3</Th>
                  <Th>3-2-2022</Th>
                  <Th>8:30 - 9:30</Th>
                  <Th>English</Th>
                </Tr>
                <Tr>
                  <Th py="10px">4</Th>
                  <Th>4-2-2022</Th>
                  <Th>8:30 - 9:30</Th>
                  <Th>Science</Th>
                </Tr>
                <Tr>
                  <Th py="10px">5</Th>
                  <Th>5-2-2022</Th>
                  <Th>8:30 - 9:30</Th>
                  <Th>Social</Th>
                </Tr>
                <Tr>
                  <Th py="10px">6</Th>
                  <Th>6-2-2022</Th>
                  <Th>8:30 - 9:30</Th>
                  <Th>Kannada</Th>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default TimeTableItem;
