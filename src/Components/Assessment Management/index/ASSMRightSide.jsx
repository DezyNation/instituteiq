import RightDrawer from "@/Components/Layout Components/Misc/RightDrawer";
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const colors = ["#3CCF4E", "#1C80DD", "#FC8F2B"];
var colorIndex = -1;

const ASSMRightSide = ({ assignmentDataToShow }) => {
  //   console.log(assignmentDataToShow[0].classAndSection);
  return (
    <Box p="10px" w="70%" pl="40px" position={"relative"} left="300px">
      <HStack justifyContent={"space-between"} alignItems="Center">
        <Box>
          <Heading
            as="h2"
            fontSize="27px"
            fontWeight={350}
            color="#1b1b1b"
            mb="10px"
          >
            Assignment
          </Heading>
          {assignmentDataToShow != undefined && (
            <Text fontWeight={500} fontSize={"xl"}>
              Class {assignmentDataToShow[0].classAndSection}
            </Text>
          )}
        </Box>
        <Box>
          {assignmentDataToShow != undefined && (
            <Text textAlign={"right"} fontWeight={300} fontSize={"xl"}>
              {assignmentDataToShow[0].subject}
            </Text>
          )}
          <Button
            textAlign={"right"}
            p="0"
            color="#1C80DD"
            bg="tranparent"
            _hover={{ bg: "transparent" }}
          >
            +Add an assignment
          </Button>
        </Box>
      </HStack>
      <HStack justifyContent={"center"}>
        {assignmentDataToShow == undefined && (
          <Text
            position="relative"
            fontSize={"18px"}
            color="#cecece"
            fontWeight={400}
            py="200px"
          >
            Assignments not created yet
          </Text>
        )}
        {assignmentDataToShow != undefined && (
          <Box w="100%">
            {assignmentDataToShow[0].data?.map((item, index) => {
              colorIndex =
                colorIndex < 2 && colorIndex >= -1 ? colorIndex + 1 : 0;
              return (
                <Flex
                  background="#FEFEFF"
                  border="1px solid #C9C9C9"
                  boxShadow="0px 1px 2px rgba(0, 0, 0, 0.25)"
                  borderRadius=" 7px"
                  w="100%"
                  my="15px"
                  position={"relative"}
                  px="25px"
                  py="5px"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  _before={{
                    content: '""',
                    width: "8px",
                    height: "100%",
                    top: "0",
                    left: "0",
                    borderTopLeftRadius: "7px",
                    borderBottomLeftRadius: "7px",
                    backgroundColor: `${colors[colorIndex]}`,
                    position: "absolute",
                  }}
                >
                  <Box>
                    <Text fontSize={"17px"} fontWeight={500}>
                      {item.title}
                    </Text>
                    <Text fontSize={"14px"} py="5px">
                      {item.uploadTime} - Upload time
                    </Text>
                    <Text fontSize={"14px"} display={"inline"}>
                      Reviewed:
                      <span style={{ color: "#37D334" }}> {item.reviewed}</span>
                    </Text>
                    <Text fontSize={"14px"} display={"inline"} ml="20px">
                      Pending Reviews:{" "}
                      <span style={{ color: "#D33434" }}>
                        {item.pendingReviews}
                      </span>
                    </Text>
                  </Box>
                  <VStack>
                    <Box>
                      <CircularProgress
                        value={item.submissionRate}
                        size="80px"
                        thickness={"14px"}
                        color={colors[colorIndex]}
                      >
                        <CircularProgressLabel
                          fontSize={"lg"}
                        >{`${item.submissionRate}%`}</CircularProgressLabel>
                      </CircularProgress>
                    </Box>
                    <Text color="gray" textAlign={"center"}>
                      Submission Rate
                    </Text>
                  </VStack>
                </Flex>
              );
            })}
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default ASSMRightSide;
