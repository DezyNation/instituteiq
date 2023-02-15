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

const ExamTimeTableItem = ({ number, title, date, status }) => {
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
              bg="#fff"
              boxShadow={`2.12563px 6.37688px 4.25125px rgba(0, 0, 0, 0.25)`}
              borderRadius="12.7538px"
              px="40px"
              py="15px"
              // my="auto"
              position="relative"
              _before={{
                content: '""',
                position: "absolute",
                w: "8px",
                h: "100%",
                bg: "#1C80DD",
                left: "0",
                top:"0",
                borderTopLeftRadius: "12.7538px",
                borderBottomLeftRadius: "12.7538px",
              }}
            >
              <Box>
                <Flex justifyContent={"space-between"} alignItems="center">
                  <Flex flexDirection={"column"} alignItems="flex-start" justifyContent="flex-end">
                    <Text fontWeight="700" fontSize="xl" textAlign="left">
                      {title}
                    </Text>
                    <Text fontWeight="400" fontSize="s">
                      {date}
                    </Text>
                  </Flex>
                  <Text
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
          <TableContainer
            w="80%"
            mt="2%"
            ml="auto"
            mr="auto"
            borderRadius="10px"
            variant="unstyled"
          >
            <Table size="sm" w="100%">
              <Thead bg="#1C80DD">
                <Tr>
                  <Th color="white">Sl. No.</Th>
                  <Th color="white">Date</Th>
                  <Th color="white">Time</Th>
                  <Th color="white">Subject</Th>
                </Tr>
              </Thead>
              <Tbody bg="#fff">
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

export default ExamTimeTableItem;
