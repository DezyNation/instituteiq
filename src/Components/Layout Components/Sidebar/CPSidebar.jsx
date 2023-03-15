import React from "react";
import { Box, Circle, Flex, Text } from "@chakra-ui/react";
import {
  Dashboard,
  Attendance,
  Logout,
  Assignment,
  TimeTable,
  ExamSchedule,
  StudyMaterial,
  FeePaymments,
  Fines,
  ApplyLeave,
} from "public/icons/Icons";
import Link from "next/link";
import { AiOutlineUserAdd, AiOutlineIdcard } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbUserCheck } from "react-icons/tb";

const CPSidebar = () => {
  return (
    <Box
      w="17%"
      bg="#111827"
      h="100vh"
      position="fixed"
      top="0"
      overflowY="auto"
    >
      <Flex bg="#111827" p="10px" flexDirection="column" justifyContent={"space-between"} h="100vh">
        <Flex flexDirection={"column"}>
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
          <Link href="" style={{ marginBottom: "10px" }}>
            <Flex alignItems="center" color="white" gap={1}>
              <Dashboard h="35px" w="30px" mt="10px" />
              <p>Dashboard</p>
            </Flex>
          </Link>
          <Link href="" style={{ marginBottom: "15px" }}>
            <Flex alignItems="center" color="white" gap={2}>
              <AiOutlineUserAdd fontSize={25} />
              <p>Add Admission</p>
            </Flex>
          </Link>
          <Link href="" style={{ marginBottom: "15px" }}>
            <Flex alignItems="center" color="white" gap={2}>
              <BiWallet fontSize={25} />
              <p>Fee Payments</p>
            </Flex>
          </Link>
          <Link href="" style={{ marginBottom: "15px" }}>
            <Flex alignItems="center" color="white" gap={2}>
              <CiMoneyCheck1 fontSize={25} />
              <p>Fines</p>
            </Flex>
          </Link>
          <Link href="" style={{ marginBottom: "15px" }}>
            <Flex alignItems="center" color="white" gap={2}>
              <TbUserCheck fontSize={25} />
              <p>Student Updates</p>
            </Flex>
          </Link>
          <Link href="" style={{ marginBottom: "15px" }}>
            <Flex alignItems="center" color="white" gap={2}>
              <AiOutlineIdcard fontSize={25} />
              <p>ID Card Management</p>
            </Flex>
          </Link>
        </Flex>
        <Box>
          <Link href="">
            <Flex alignItems="center" color="white">
              <Logout h="35px" w="30px" mt="10px" />
              <p>Logout</p>
            </Flex>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default CPSidebar;
