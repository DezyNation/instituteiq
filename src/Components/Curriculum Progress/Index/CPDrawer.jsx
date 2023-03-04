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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const CPDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [newTopicInput, setnewTopicInput] = useState(false);

  const firstField = useRef();
  const drawerSaveButton = useRef();
  const newTopicForm = useRef();

  const handleNewCurriculumButton = () => {
    drawerSaveButton.current.removeAttribute("disabled");
    setnewTopicInput(true);
  };

  const subjectTopic = [
    { topic: "Brief history of India", duration: 8 },
    { topic: "Developers pain", duration: "infinite" },
  ];
  let indexOfNewCurriculum = subjectTopic.length + 1;

  const handleDrawerClose = () => {
    setnewTopicInput(false);
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
        Add a Curriculum
      </DrawerHeader>

      <DrawerBody pl="40px">
        <Stack spacing="24px">
          <Box>
            <FormLabel htmlFor="username" color="#707070">
              Chapter Name
            </FormLabel>
            <Input
              borderRadius={"12px"}
              ref={firstField}
              id="username"
              p="25px"
              placeholder="Type here"
            />
          </Box>
          <Flex w="80%" pl="50px" justifyContent={"space-between"}>
            <Box>
              <FormLabel
                htmlFor="order"
                color="#707070"
                fontWeight={400}
                display="inline"
              >
                Order :
              </FormLabel>
              <Input
                type="number"
                borderRadius="4px"
                height={"25px"}
                w="25px"
                p="0px"
                border="1px solid #DADADA"
                bg="fff"
                id="order"
              />
            </Box>
            <Box>
              <FormLabel
                htmlFor="order"
                color="#707070"
                fontWeight={400}
                display="inline"
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
                id="order"
              />{" "}
              <Text display="inline" fontSize="xs">
                Hours
              </Text>
            </Box>
          </Flex>
          <Heading fontWeight={400} fontSize="18px" color="#3f3f3f">
            Add Subject Topic:
          </Heading>
          {subjectTopic.map((item, index) => {
            return (
              <Flex ml="40px" mt="40px" alignItems="center" gap="20px" w="100%" key={index}>
                <Circle
                  size="30px"
                  bg="rgba(134, 174, 210, 0.63)"
                  fontSize="md"
                  fontWeight="600"
                >
                  {index + 1}
                </Circle>
                <Box
                  w="100%"
                  bg="#fff"
                  borderRadius="12px"
                  border="1px solid #DADADA"
                  px="20px"
                  py="10px"
                >
                  <Text textAlign={"left"} fontSize="18px" fontWeight="400">
                    {item.topic}
                  </Text>
                  <Text
                    textAlign={"left"}
                    fontSize="14px"
                    fontWeight="400"
                    color="gray.500"
                  >{`Total Duration : ${item.duration} Hours`}</Text>
                </Box>
              </Flex>
            );
          })}
          <Button
            w="100px"
            pl="120px"
            bg="transparent"
            color="#1C80DD"
            onClick={handleNewCurriculumButton}
            _hover={{ background: "transparent" }}
          >
            + Add a curriculum
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
          Save
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

export default CPDrawer;
