import { Box, Flex, Text } from "@chakra-ui/react";
import InputModal from "@/Components/Layout Components/Misc/InputModal";
import React, { useState } from "react";

export const ToDoListObject = [
  {
    task: "Math, Arithmetic, and Algebra",
    date: "25-02-2022",
    time: "12:45:00",
  },
  {
    task: "Math, Arithmetic, and Algebra",
    date: "25-02-2022",
    time: "12:45:00",
  },
  {
    task: "Math, Arithmetic, and Algebra",
    date: "25-02-2022",
    time: "12:45:00",
  },
  {
    task: "Math, Arithmetic, and Algebra",
    date: "25-02-2022",
    time: "12:45:00",
  },
];

const RecentCircular = () => {
  const [itemList, setItemList] = useState(ToDoListObject);

  return (
    <Box
      fontFamily={"serif"}
      w="370px"
      bg="#F4F2FA"
      border="0.3px solid #000000"
      borderRadius="12px"
      boxShadow="2px 4px 4px rgba(0, 0, 0, 0.25)"
      p="15px"
    >
      <InputModal
        heading="Add new circular"
        placeholder="Add circular"
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
              bg="#577C99"
              borderRadius="100%"
              p="10px"
              mr="10px"
              _before={{
                content: '"+"',
                color: "white",
                fontSize: "40px",
                position: "absolute",
                display: "block",
                margin: "auto",
                top: "0",
              }}
            />
            <Flex justifyContent="center" alignItems="center">
              <Text
                fontFamily={"sans-serif"}
                mb="5px"
                fontSize="16px"
                fontWeight="600"
                color="#577C99"
                lineHeight="16px"
              >
                Create Circular
              </Text>
            </Flex>
          </Flex>
        </Box>
      </InputModal>
      {itemList.map((element, index) => {
        return (
          <Box
            key={`${element.task}_${index}`}
            bg="transparent"
            p="10px"
            border="1px solid #DADADA"
            borderRadius="13.5px"
            mb="20px"
          >
            <Box>
              <Text p="10px" fontSize="16px" fontWeight="400" lineHeight="27px">
                {element.task}
              </Text>
              <Flex
                w="100%"
                justifyContent="space-between"
                fontSize={"xs"}
                color="#A3A3A3"
              >
                <Text>{element.date}</Text>
                <Text>{element.time}</Text>
              </Flex>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default RecentCircular;
