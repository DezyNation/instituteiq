import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";
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
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="#111827" w="17%" position="fixed">
      <Box w="100%" bg="#111827" h="max-content" p="10px">
        <Center
          bg="rgba(255, 255, 255, 0.2)"
          w="100%"
          h="50px"
          color="white"
          borderRadius="10"
          mx="auto"
          mb="10px"
        >
          Company Logo
        </Center>
        <ProfileIcon h="40px" w="40px" my="15px" />
        <InputGroup bg="#2D3748" w="100%">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            // fontSize="1em"
            children={<SearchIcon color="#6B7280" h="30px" ml="5px" />}
          />
          <Input
            size="lg"
            type="search"
            placeholder="Search"
            pl="30px"
            bg="#2D3748"
            h="30px"
            w="100%"
            display={"flex"}
            alignItems="ceenter"
            justifyContent={"center"}
            color="white"
          />
        </InputGroup>
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

        <Accordion defaultIndex={[0]} pt="5px" allowMultiple color="white">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Payroll h="35px" w="30px" mt="10px" />
                  Payroll
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel ml="20px">
              <Link href="">
                <Flex alignItems="center" color="white">
                  <Employee h="35px" w="30px" mt="10px" />
                  <p>Employee</p>
                </Flex>
              </Link>
            </AccordionPanel>
            <AccordionPanel ml="20px">
              <Link href="">
                <Flex alignItems="center" color="white">
                  <Attendance h="35px" w="30px" mt="10px" />
                  <p>Attendance</p>
                </Flex>
              </Link>
            </AccordionPanel>
            <AccordionPanel ml="20px">
              <Link href="">
                <Flex alignItems="center" color="white">
                  <Report h="35px" w="30px" mt="10px" />
                  <p>Report</p>
                </Flex>
              </Link>
            </AccordionPanel>
            <AccordionPanel ml="20px">
              <Link href="">
                <Flex alignItems="center" color="white">
                  <Salary h="35px" w="30px" mt="10px" />
                  <p>Calculate Salary</p>
                </Flex>
              </Link>
            </AccordionPanel>
            <AccordionPanel ml="20px">
              <Link href="">
                <Flex alignItems="center" color="white">
                  <Payment h="35px" w="30px" mt="10px" />
                  <p>Payments</p>
                </Flex>
              </Link>
            </AccordionPanel>
            <AccordionPanel ml="20px">
              <Link href="">
                <Flex alignItems="center" color="white">
                  <Setting h="35px" w="30px" mt="10px" />
                  <p>Settings</p>
                </Flex>
              </Link>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Link href="">
          <Flex alignItems="center" color="white">
            <Help h="35px" w="30px" mt="10px" />
            <p>Help</p>
          </Flex>
        </Link>
        <Link href="">
          <Flex alignItems="center" color="white">
            <Logout h="35px" w="30px" mt="10px" />
            <p>Logout</p>
          </Flex>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
