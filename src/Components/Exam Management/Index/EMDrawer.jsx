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
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const EMDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newTopicInput, setnewTopicInput] = useState(false);

  const firstField = useRef();
  const drawerSaveButton = useRef();
  const newTopicForm = useRef();

  const handleNewCurriculumButton = () => {
    drawerSaveButton.current.removeAttribute("disabled");
    setnewTopicInput(true);
  };

  const examsDateSheet = [
    { subject: "Maths", date: "1/2/2022", time: "8:30 - 9:30" },
    { subject: "Physics", date: "1/2/2022", time: "8:30 - 9:30" },
  ];
  //   let indexOfNewCurriculum = examsDateSheet.length + 1;

  const handleDrawerClose = () => {
    setnewTopicInput(false);
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
              <FormLabel htmlFor="fromDate" display={"inline"} color="#707070">
                To :
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
                      <Td fontSize={"md"} textAlign={"center"}>{item.date}</Td>
                      <Td fontSize={"md"} textAlign={"center"}>{item.time}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>

          <Heading fontWeight={400} fontSize="18px" color="#3f3f3f">
            Add Subject :
          </Heading>
          
          <Button
            w="100px"
            bg="transparent"
            color="#1C80DD"
            onClick={handleNewCurriculumButton}
            _hover={{ background: "transparent" }}
          >
            + Add Subject
          </Button>
          {newTopicInput && (
            <Flex ml="40px" mt="40px" alignItems="center" gap="20px" w="100%">
              <Circle
                size="30px"
                bg="rgba(134, 174, 210, 0.63)"
                fontSize="md"
                fontWeight="600"
              >
                {indexOfNewCurriculum}
              </Circle>
              <InputGroup pl="50px" ref={newTopicForm}>
                <Flex flexDirection={"column"} w="80%">
                  <FormLabel htmlFor="newTopicInput">Topics:</FormLabel>
                  <Input type="text" placeholder="Type here"></Input>
                  <Box mt="20px" pl="5px">
                    <FormLabel
                      htmlFor="newTopicDurationInput"
                      color="#707070"
                      fontWeight={400}
                      display={"inline"}
                    >
                      Duration :
                    </FormLabel>
                    <Input
                      type="number"
                      borderRadius="4px"
                      p="0px"
                      height={"25px"}
                      w="25px"
                      border="1px solid #DADADA"
                      bg="fff"
                      color="black"
                      id="newTopicDurationInput"
                    />{" "}
                    <Text display="inline" fontSize="xs">
                      Hours
                    </Text>
                  </Box>
                </Flex>
              </InputGroup>
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
