import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CPItem = ({ chapter, duration, progress, color }) => {
  const CPSubItem = [
    {
      topic: "Topic 1",
      time: 1,
      status: "Pending",
    },
    {
      topic: "Topic 1",
      time: 5,
      status: "Completed",
    },
    {
      topic: "Topic 1",
      time: 7,
      status: "Completed",
    },
  ];
  return (
    <>
      <Accordion defaultIndex={[]} allowToggle w="100%">
        <AccordionItem borderStyle={"none"}>
          <AccordionButton
            bg="#fefefe"
            border="1px solid #C9C9C9"
            borderRadius={"7px"}
            h="80px"
            mb="20px"
            boxShadow="0px 1px 2px rgba(0, 0, 0, 0.25)"
            px="25px"
            position={"relative"}
            _before={{
              content: '""',
              width: "8px",
              height: "100%",
              top: "0",
              left: "0",
              borderTopLeftRadius: "7px",
              borderBottomLeftRadius: "7px",
              backgroundColor: color,
              position: "absolute",
            }}
          >
            <Flex
              justifyContent={"space-between"}
              w="100%"
              alignItems={"center"}
            >
              <Box>
                <Text textAlign={"left"} fontSize={"18px"} fontWeight={600}>
                  {chapter}
                </Text>
                <Text textAlign={"left"}>
                  Total Duration : {`${duration} Hours`}
                </Text>
              </Box>
              <Box>
                <Text fontWeight={600} display="inline" fontSize={"18px"}>
                  Progress :{" "}
                </Text>
                <CircularProgress
                  thickness="12px"
                  size="60px"
                  value={progress}
                  color={color}
                >
                  <CircularProgressLabel
                    fontSize={"18px"}
                  >{`${progress}%`}</CircularProgressLabel>
                </CircularProgress>
              </Box>
            </Flex>
            <AccordionIcon />
          </AccordionButton>
          {CPSubItem.map((item) => {
            return (
              <AccordionPanel>
                <Flex
                  alignItems={"center"}
                  w="90%"
                  mx="auto"
                  mb="-20px"
                  justifyContent="space-between"
                  bg="#fefefe"
                  border="1px solid #C9C9C9"
                  borderRadius={"7px"}
                  h="60px"
                  boxShadow="0px 1px 2px rgba(0, 0, 0, 0.25)"
                  px="25px"
                  position={"relative"}
                  _before={{
                    content: '""',
                    width: "6px",
                    height: "100%",
                    top: "0",
                    left: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: color,
                    position: "absolute",
                  }}
                >
                  <Text>{item.topic}</Text>
                  <Text>{`${item.time} Hours`}</Text>
                  <Text color={item.status === "Pending" ? "#D33434" : "#66D974"}>
                    {item.status}
                  </Text>
                </Flex>
              </AccordionPanel>
            );
          })}
          <AccordionPanel pb={4}></AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default CPItem;
