import { Badge, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";

export const ThreeColTable = ({ head, body, color }) => {
  return (
    <>
      <VStack w={"full"} pb={4} rounded={16} overflow={"hidden"} bg={"#F4F2FA"}>
        <HStack w={"full"} spacing={2} px={3} py={2} bg={color} color={"white"}>
          {head.map((item, key) => {
            return (
              <>
                <Text
                  key={key}
                  flex={1}
                  textAlign={"center"}
                  fontWeight={"semibold"}
                  fontSize={"xs"}
                  textTransform={"capitalize"}
                >
                  {item}
                </Text>
              </>
            );
          })}
        </HStack>
        {body.map((entry, key) => {
          return (
            <HStack w={"90%"} spacing={2} py={1} borderBottom={"1px"}>
              <Text flex={1} textAlign={"center"} fontSize={"xs"}>
                {key + 1}
              </Text>
              <Text flex={1} textAlign={"center"} fontSize={"xs"}>
                {entry.col2}
              </Text>
              <Text flex={1} textAlign={"center"} fontSize={"xs"}>
                {entry.col3}
              </Text>
            </HStack>
          );
        })}
      </VStack>
    </>
  );
};

const LeaderBoard = () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "Bhoomi",
      percentage: 90,
    },
    {
      rank: 1,
      name: "Bhoomi",
      percentage: 90,
    },
    {
      rank: 1,
      name: "Bhoomi",
      percentage: 90,
    },
    {
      rank: 1,
      name: "Bhoomi",
      percentage: 90,
    },
    {
      rank: 1,
      name: "Bhoomi",
      percentage: 90,
    },
  ];

  return (
    <Stack
      direction={["column", "row"]}
      spacing={6}
      py={6}
      justifyContent={"space-between"}
    >
      <VStack
        h={"sm"}
        p={4}
        bg={"#26567CCC"}
        color={"white"}
        w={["full", "xs"]}
        roundedTop={20}
      >
        <Text fontWeight={"medium"} pb={6}>
          Leaderboard
        </Text>
        <HStack
          rounded={"full"}
          w={"full"}
          px={4}
          py={2}
          bg={"white"}
          color={"black"}
        >
          <Text flex={1}>Rank</Text>
          <Text flex={1}>Name</Text>
          <Text flex={1}>Percentage</Text>
        </HStack>
        {leaderboardData.map((student, key) => {
          return (
            <HStack
              key={key}
              px={4}
              pt={3}
              pb={1}
              w={"full"}
              borderBottom={"1px"}
              borderBottomColor={"aliceblue"}
            >
              <Text flex={1}>{student.rank}</Text>
              <Text flex={1}>{student.name}</Text>
              <Text flex={1} textAlign={"center"}>
                {student.percentage}
              </Text>
            </HStack>
          );
        })}
      </VStack>
    </Stack>
  );
};

export default LeaderBoard;
