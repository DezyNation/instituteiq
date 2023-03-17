import React from "react";
import { Box, Center, Circle, Flex, Text } from "@chakra-ui/react";
import {
  Dashboard,
  Attendance,
  Logout,
  Performance,
  Assignment,
  TimeTable,
  ExamSchedule,
  StudyMaterial,
  FeePaymments,
  Fines,
  ApplyLeave,
} from "public/icons/Icons";
import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import Link from "next/link";

const StudentDashboardSidebar = () => {
  return (
    <Box
      w="17%"
      bg="#111827"
      h="100vh"
      position="fixed"
      top="0"
      overflowY="auto"
    >
      <Flex
        bg="#111827"
        p="10px"
        flexDirection="column"
      >
        <Text alignSelf="center" color="white">
          School Name
        </Text>
        <Circle
          size="110px"
          bg="black"
          color="white"
          alignSelf="center"
          my="30px"
          fontSize="6xl"
          fontWeight="500"
        >
          A
        </Circle>
        <Text alignSelf="center" fontSize="s" fontWeight="500" color="white">
          Anurag Kulkarni
        </Text>
        <Text
          alignSelf="center"
          fontSize="sm"
          fontWeight="500"
          color="white"
          mb="10px"
        >
          Student
        </Text>
        <Link href="">
          <Flex alignItems="center" color="white">
            <Dashboard h="35px" w="30px" mt="10px" />
            <p>Dashboard</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <Performance h="35px" w="30px" mt="10px" />
            <p>Performance</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <Attendance h="35px" w="30px" mt="10px" />
            <p>Attendance</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <Assignment h="35px" w="30px" mt="10px" />
            <p>Assignment</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <TimeTable h="35px" w="30px" mt="10px" />
            <p>Time Table</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <ExamSchedule h="35px" w="30px" mt="10px" />
            <p>Exam Schedule</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <StudyMaterial h="35px" w="30px" mt="10px" />
            <p>Study Material</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <FeePaymments h="35px" w="30px" mt="10px" />
            <p>Fee Paymments</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <Fines h="35px" w="30px" mt="10px" />
            <p>Fines</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <ApplyLeave h="35px" w="30px" mt="10px" />
            <p>Apply Leave</p>
          </Flex>
        </Link>
        <Link href="" style={{ marginTop: "100px" }}>
          <Flex alignItems="center" color="white">
            <Logout h="35px" w="30px" mt="10px" />
            <p>Logout</p>
          </Flex>
        </Link>
      </Flex>
    </Box>
  );
};

export default StudentDashboardSidebar;
