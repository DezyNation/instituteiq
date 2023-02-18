import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Circle,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

const RightDrawer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const subjectTopic = [
    { topic: "Brief history of India", duration: 8 },
    { topic: "Developers rant", duration: "infinite" },
  ];
  return (
    <>
      <Button
        border={props.border}
        borderRadius={props.borderRadius}
        bg={props.bg}
        textDecorationLine={props.textDecorationLine}
        textAlign={props.textAlign}
        color={props.color}
        px={props.px}
        py={props.py}
        onClick={onOpen}
      >
        {props.buttonText}
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <DrawerOverlay />
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
            {props.header}
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
                    borderRadius="10px"
                    height={"30px"}
                    w="25px"
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
                    borderRadius="10px"
                    height={"32px"}
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
                  <Flex
                    ml="40px"
                    mt="40px"
                    alignItems="center"
                    gap="20px"
                    w="100%"
                  >
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
                _hover={{ background: "transparent" }}
              >
                + Add a curriculum
              </Button>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Button bg="#25557B" mr={3} px="60px" color="#fff">
              Save
            </Button>
            <Button
              bg="#fdfdfd"
              borderRadius={"5px"}
              variant="outline"
              border="1px solid #D1D5DB"
              px="50px"
              onClick={onClose}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default RightDrawer;
