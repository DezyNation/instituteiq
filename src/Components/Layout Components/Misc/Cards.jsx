import { DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import {
  HeaderAbsent,
  HeaderAssignment,
  HeaderAttendance,
  HeaderPerformance,
  NumberStaff,
  NumberStudent,
  OverallAttendance,
  OverallPerformance,
  PendingReview,
  Received,
  ThumbsUp,
  YetToReceive,
} from "public/icons/Icons";
import React from "react";

const Cards = ({ heading = "", value = "",page }) => {
  return (
    <Card
      w="250px"
      h="180px"
      p="10px"
      boxShadow=" 4px 4px 4px 1px rgba(0, 0, 0, 0.25)"
      borderRadius="20px"
      bg="rgba(255, 255, 255, 0.55)"
      position="relative"
      flex="1 1 250px"
    >
      {heading === "Absent" && (
        <HeaderAbsent
          borderRadius="20px"
          bg="#000"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Pending Assignment" && (
        <HeaderAssignment
          borderRadius="20px"
          bg="#000"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Performance" && (
        <HeaderPerformance
          borderRadius="20px"
          bg="#000"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Attendance" && (
        <HeaderAttendance
          borderRadius="20px"
          bg="#000"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Received" && (
        <Received
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          color="white"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Yet to Receive" && (
        <YetToReceive
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Pending Review" && (
        <PendingReview
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Reviewed" && (
        <ThumbsUp
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "No of Students" && (
        <NumberStudent
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "No of Staff" && (
        <NumberStaff
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Overall Performance" && (
        <OverallPerformance
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Overall Attendance" && (
        <OverallAttendance
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {(heading === "Overall Attendance" && page==="class-teacher")&& (
        <NumberStaff
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}
      {heading === "Curriculum Progress" && (
        <OverallAttendance
          borderRadius="20px"
          bg="rgba(0, 56, 101, 0.85)"
          h="62px"
          w="77px"
          m="auto"
          position="absolute"
          top="-25px"
          left="30px"
        />
      )}

      <CardBody
        position="relative"
        display={"flex"}
        flexDirection="column"
        justifyContent={"flex-end"}
        p="0"
      >
        <Box>
          <Text
            fontSize="30px"
            fontWeight="500"
            color="#373737"
            textAlign="right"
          >
            {value}
          </Text>
          <Divider bg="#BCBCBC" height="2px" />
          <Text fontSize="20px" color="#555555" fontWeight="400">
            {heading}
          </Text>
        </Box>
      </CardBody>
    </Card>
  );
};

export default Cards;
