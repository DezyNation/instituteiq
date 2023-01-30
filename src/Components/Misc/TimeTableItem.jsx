import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TimeTableItem = ({ number, title, date, status }) => {
  return (
    <Accordion defaultIndex={[0]} allowToggle>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default TimeTableItem;
