import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Circle,
  Divider,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import InputModal from "./InputModal";
import React, { useState } from "react";

export const ToDoListObject = [
  {
    task: "Math, Arithmetic, and Algebra",
  },
  {
    task: "Math, Arithmetic, and Algebra",
  },
  {
    task: "Math, Arithmetic, and Algebra",
  },
  {
    task: "Math, Arithmetic, and Algebra",
  },
];

const ToDoList = () => {
  const [itemList, setItemList] = useState(ToDoListObject);

  return (
    <Box
      w="370px"
      bg="#F4F2FA"
      border="0.3px solid #000000"
      borderRadius="12px"
      boxShadow="2px 4px 4px rgba(0, 0, 0, 0.25)"
      p="15px"
    >
      <Flex justifyContent="space-between" alignItems="center" mb="20px">
        <Heading as="h1" fontSize="24px" fontWeight="500" lineHeight="28px">
          To Do List
          <Text
            bg="#3CCF4E"
            color="white"
            display="inline"
            fontSize="20px"
            ml="5px"
            borderRadius="15px"
            p="4px"
          >
            30
          </Text>
        </Heading>
      </Flex>
      <InputModal
        heading="Add new task"
        itemList={itemList}
        setItemList={setItemList}
      >
        <Box
          w="100%"
          bg="#fff"
          p="10px"
          boxShadow="0px 4px 4px rgba(56, 70, 199, 0.5)"
          borderRadius="13.5px"
          mb="20px"
        >
          <Flex>
            <Text
              fontWeight="500"
              position="relative"
              color="white"
              w="40px"
              h="40px"
              bg="#3CCF4E"
              borderRadius="100%"
              p="10px"
              mr="10px"
              _before={{
                content: '"+"',
                color: "white",
                fontSize: "40px",
                position: "absolute",
                bottom: "-5px",
                left: "6px",
              }}
            />
            <Box>
              <Text
                mb="5px"
                fontSize="16px"
                fontWeight="500"
                color="#3CCF4E"
                lineHeight="16px"
              >
                Add a new task
              </Text>
              <Text
                mb="5px"
                fontSize="12px"
                fontWeight="400"
                textAlign="left"
                color="#949494"
                lineHeight="14px"
              >
                Create a new task
              </Text>
            </Box>
          </Flex>
        </Box>
      </InputModal>
      {itemList.map((element, index) => {
        return (
          <Box
            key={`${element.task}_${index}`}
            bg="#fff"
            p="10px"
            boxShadow="0px 4px 4px rgba(56, 70, 199, 0.5)"
            borderRadius="13.5px"
            mb="20px"
          >
            <Box>
              <Text p="10px" fontSize="16px" fontWeight="400" lineHeight="27px">
                {element.task}
              </Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ToDoList;
