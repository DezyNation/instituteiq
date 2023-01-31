import React from "react";
import { Box, Center, Circle, Flex, Text } from "@chakra-ui/react";
import {
  BranchManagement,
  Dashboard,
  ExamManagement,
  FeeManagement,
  LessonPlanner,
  ManagementControls,
  ProfileIcon,
  UserManagement,
  Payroll,
  Employee,
  Attendance,
  Report,
  Salary,
  Payment,
  Setting,
  Help,
  Logout,
} from "public/icons/Icons";
import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import Link from "next/link";

const StudentDashboardSidebar = () => {
  return (
    // <Box w="17%" h="100vh">
      <Flex w="17%" bg="#111827" h="100vh" p="10px" flexDirection="column" position="fixed">
        <Text alignSelf="center" color="white">School Name</Text>        
        <Circle size="110px" bg="black" color="white" alignSelf="center" my="30px" fontSize="6xl" fontWeight="500">
          A
        </Circle>
        <Text alignSelf="center" fontSize="s" fontWeight="500" color="white">Anurag Kulkarni</Text>        
        <Text alignSelf="center" fontSize="sm" fontWeight="500" color="white" mb="10px">Student</Text>        
        <Link href="">
          <Flex alignItems="center" color="white">
            <Dashboard h="35px" w="30px" mt="10px" />
            <p>Dashboard</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <ManagementControls h="35px" w="30px" mt="10px" />
            <p>Management Controls</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <FeeManagement h="35px" w="30px" mt="10px" />
            <p>Fee Management</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <BranchManagement h="35px" w="30px" mt="10px" />
            <p>Branch Management</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <UserManagement h="35px" w="30px" mt="10px" />
            <p>User Management</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <LessonPlanner h="35px" w="30px" mt="10px" />
            <p>Lesson Planner</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <ExamManagement h="35px" w="30px" mt="10px" />
            <p>Exam Management</p>
          </Flex>
        </Link>
        <Link href="" style={{marginTop:"auto"}}>
          <Flex alignItems="center" color="white">
            <Logout h="35px" w="30px" mt="10px" />
            <p>Logout</p>
          </Flex>
        </Link>
      </Flex>
    /* </Box> */
  );
};

export default StudentDashboardSidebar;
