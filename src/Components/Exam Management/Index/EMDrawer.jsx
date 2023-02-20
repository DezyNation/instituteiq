import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const EMDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newSubject, setNewSubject] = useState(false);

  const firstField = useRef();
  const drawerSaveButton = useRef();
  const newTopicForm = useRef();

  const handleAddSubject = () => {
    drawerSaveButton.current.removeAttribute("disabled");
    setNewSubject(true);
  };

  const examsDateSheet = [
    { subject: "Maths", date: "1/2/2022", time: "8:30 - 9:30" },
    { subject: "Physics", date: "1/2/2022", time: "8:30 - 9:30" },
  ];
  //   let indexOfNewCurriculum = examsDateSheet.length + 1;

  const handleDrawerClose = () => {
    setNewSubject(false);
    drawerSaveButton.current.setAttribute("disabled", "");
    onClose();
  };

  return (
    <DrawerContent position={"relative"} maxW="50%">
      <DrawerCloseButton position="absolute" left="-15px" top="30px">
        <Button
          borderRadius="100%"
          p="30px"
          bg="#F4F2FA"
          border="1px solid #E3E2E7"
        >
          <ChevronRightIcon boxSize={7} />
        </Button>
      </DrawerCloseButton>
      <DrawerHeader py="30px" mx="40px" color="#4D7394">
        Add Exam for
        <Heading fontSize={"md"} fontWeight={500} color="black">
          Class 12-A
        </Heading>
      </DrawerHeader>

      <DrawerBody pl="40px">
        <Stack pl="30px" spacing="24px">
          <Flex w="60%">
            <Box>
              <FormLabel htmlFor="fromDate" display={"inline"} color="#707070">
                Date :
              </FormLabel>
              <Input
                display={"inline"}
                w="50%"
                borderRadius={"12px"}
                ref={firstField}
                id="fromDate"
                placeholder="Type here"
              />
            </Box>
            <Box>
              <FormLabel htmlFor="toDate" display={"inline"} color="#707070">
                To :
              </FormLabel>
              <Input
                display={"inline"}
                w="50%"
                borderRadius={"12px"}
                ref={firstField}
                id="toDate"
                placeholder="Type here"
              />
            </Box>
          </Flex>
          <Heading as="h3" fontWeight={500} fontSize={"xl"}>
            Add exam details :
          </Heading>
          <TableContainer
            bg="#f5f5f5"
            w="80%"
            mt="2%"
            ml="auto"
            mr="auto"
            borderRadius="10px"
            variant="unstyled"
            border="1px solid #c9c9c9"
          >
            <Table size="sm" w="100%">
              <Thead bg="#25557B">
                <Tr>
                  <Th fontSize={"md"} textAlign={"center"} color="white">
                    Subject
                  </Th>
                  <Th fontSize={"md"} textAlign={"center"} color="white">
                    Date
                  </Th>
                  <Th fontSize={"md"} textAlign={"center"} color="white">
                    Time
                  </Th>
                </Tr>
              </Thead>
              <Tbody bg="#F4F2FA">
                {examsDateSheet.map((item, index) => {
                  return (
                    <Tr key={`${item.date}_${index}`}>
                      <Td fontSize={"md"} textAlign={"center"} py="10px">
                        {item.subject}
                      </Td>
                      <Td fontSize={"md"} textAlign={"center"}>
                        {item.date}
                      </Td>
                      <Td fontSize={"md"} textAlign={"center"}>
                        {item.time}
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>

          <Button
            w="100px"
            bg="transparent"
            color="#1C80DD"
            onClick={handleAddSubject}
            _hover={{ background: "transparent" }}
          >
            + Add Subject
          </Button>
          {newSubject && (
            <Flex gap="20px" alignItems={"center"}>
              <Flex w="40%" alignItems={"center"}>
                <FormLabel
                  htmlFor="newSubject"
                  display={"inline"}
                  color="#707070"
                >
                  Subject
                </FormLabel>
                <Select
                  display={"inline"}
                  borderRadius={"12px"}
                  ref={firstField}
                  id="newSubject"
                >
                    <option value="">Select Subject</option>
                  <option value="Maths">Maths</option>
                  <option value="CS">CS</option>
                  <option value="Physics">Physics</option>
                  <option value="Biology">Biology</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                </Select>
              </Flex>
              <Box>
                <FormLabel
                  htmlFor="newSubjectDate"
                  display={"inline"}
                  color="#707070"
                >
                  Date :
                </FormLabel>
                <Input
                  type="date"
                  display={"inline"}
                  w="70%"
                  borderRadius={"12px"}
                  ref={firstField}
                  id="newSubjectDate"
                />
              </Box>
            </Flex>
          )}
        </Stack>
      </DrawerBody>
      <DrawerFooter>
        <Box
          ref={drawerSaveButton}
          as="button"
          bg="#25557B"
          mr={3}
          py="8px"
          href="s"
          px="60px"
          color="#fff"
          borderRadius={"5px"}
          transition="opacity 0.2s linear"
          disabled
          _disabled={{
            opacity: "0.5",
            cursor: "not-allowed",
          }}
          _hover={{ bg: "#25557b" }}
        >
          Create Exam
        </Box>
        <Button
          bg="#fdfdfd"
          borderRadius={"5px"}
          variant="outline"
          border="1px solid #D1D5DB"
          px="50px"
          onClick={handleDrawerClose}
        >
          Cancel
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default EMDrawer;
