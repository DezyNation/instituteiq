import RightDrawer from "@/Components/Layout Components/Misc/RightDrawer";
import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CPItem from "./CPItem";

const RightSide = () => {
  const CPItemList = [
    {
      chapter: "Chapter 1",
      duration: "8",
      progress: 54,
    },
    {
      chapter: "Chapter 2",
      duration: "8",
      progress: 94,
    },
    {
      chapter: "Chapter 3",
      duration: "8",
      progress: 79,
    },
    {
      chapter: "Chapter 3",
      duration: "8",
      progress: 69,
    },
  ];
  const colors = ["#3CCF4E", "#1C80DD", "#FC8F2B"];
  var colorIndex = -1;
  return (
    <Box p="10px" w="70%" pl="40px">
      <HStack justifyContent={"space-between"}>
        <Heading
          as="h2"
          fontSize="30px"
          fontWeight={400}
          color="#1b1b1b"
          mb="30px"
        >
          Curriculum Progress
        </Heading>

        <RightDrawer
          buttonText="+ Add"
          border="1px solid #EEEEEE"
          borderRadius="18px"
          bg="#FFFDFD"
          textDecorationLine="none"
          textAlign={"center"}
          color="#1C80DD"
          px="10px"
          py="5px"
          header={"Add a curriculum"}
        />
      </HStack>

      {CPItemList.map((item, index) => {
        colorIndex = colorIndex < 2 && colorIndex >= -1 ? colorIndex + 1 : 0;
        return (
          <CPItem
            key={`${item}_${index}`}
            color={colors[colorIndex]}
            chapter={item.chapter}
            duration={item.duration}
            progress={item.progress}
          />
        );
      })}
    </Box>
  );
};

export default RightSide;
