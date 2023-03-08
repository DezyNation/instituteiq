import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const assignedManagers = ["Bhoomi Sagar 1", "Bhoomi sagar 2"];
const employeeOptions = ["Employee-1", "Employee-2", "Employee-3"];

const BMDrawer = () => {
  const [chosenEmployeeOption, setChosenEmployeeOption] = useState(
    employeeOptions[0]
  );
  const [addManagementActive, setAddManagementActive] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const customOptionsRef = useRef();

  const openCustomOptions = (customOptionsRef) => {
    if (customOptionsRef.current.style.display === "")
      customOptionsRef.current.style.display = "flex";
    else customOptionsRef.current.style.display = "";
  };

  const handleOptionSelection = (e) => {
    const optionSelected = e.target.innerText;

    if (employeeOptions.includes(optionSelected)) {
      const indexToSet = employeeOptions.indexOf(optionSelected);
      setChosenEmployeeOption(employeeOptions[indexToSet]);
    }
  };
  const handleFormInputChange = () => {};

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

      <DrawerHeader py="30px" mx="20px">
        Add Branch
      </DrawerHeader>

      <DrawerBody pl="40px">
        <Text
          background="#E8F0FD"
          borderRadius="12px"
          fontSize={"xl"}
          fontWeight={600}
          p="15px 20px"
        >
          Branch Details
        </Text>
        <Flex gap="20px" flexWrap={"wrap"} w="97%" m="15px auto">
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="branchDetailsBranchName"
            >
              Branch Name
            </FormLabel>
            <Input
              type="tel"
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="branchDetailsBranchName"
              id="branchDetailsBranchName"
              onChange={handleFormInputChange}
            />
          </Box>
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="branchDetailsBranchCode"
            >
              Branch Code
            </FormLabel>
            <Input
              type="email"
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="branchDetailsBranchCode"
              id="branchDetailsBranchCode"
              onChange={handleFormInputChange}
            />
          </Box>
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="branchDetailsLocation"
            >
              Location
            </FormLabel>
            <Input
              type="email"
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="branchDetailsLocation"
              id="branchDetailsLocation"
              onChange={handleFormInputChange}
            />
          </Box>
        </Flex>
        <Text
          background="#E8F0FD"
          borderRadius="12px"
          fontSize={"xl"}
          fontWeight={600}
          p="15px 20px"
        >
          Address Details
        </Text>
        <Flex gap="20px" flexWrap={"wrap"} w="97%" m="15px auto">
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="addressDetailsLineOne"
            >
              Address Line 1
            </FormLabel>
            <Input
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="addressDetailsLineOne"
              id="addressDetailsLineOne"
              onChange={handleFormInputChange}
            />
          </Box>
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="addressDetailsLineTwo"
            >
              Address Line 2
            </FormLabel>
            <Input
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="addressDetailsLineTwo"
              id="addressDetailsLineTwo"
              onChange={handleFormInputChange}
            />
          </Box>
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="addressDetailsCity"
              display={"block"}
            >
              City / Town
            </FormLabel>
            <Input
              display="block"
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="addressDetailsCity"
              id="addressDetailsCity"
              position={"relative"}
              onChange={handleFormInputChange}
            />
          </Box>
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="addressDetailsState"
            >
              State
            </FormLabel>
            <Input
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="addressDetailsState"
              id="addressDetailsState"
              onChange={handleFormInputChange}
            />
          </Box>
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="addressDetailsPinCode"
            >
              PIN Code
            </FormLabel>
            <Input
              type="number"
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="addressDetailsPinCode"
              id="addressDetailsPinCode"
              onChange={handleFormInputChange}
            />
          </Box>
          <Box flex="1 1 200px">
            <FormLabel
              color="#767676"
              fontWeight="400"
              htmlFor="addressDetailsCountry"
            >
              Country
            </FormLabel>
            <Input
              background="#FFFFFF"
              border="0.5px solid #7A7A7A"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              name="addressDetailsCountry"
              id="addressDetailsCountry"
              onChange={handleFormInputChange}
            />
          </Box>
          <RadioGroup mt="10px">
            <Radio value="sameAddress">
              <Text color="#3D8CD5">
                Permanaent address same as current address
              </Text>
            </Radio>
          </RadioGroup>
        </Flex>
        <Text fontSize={"xl"} fontWeight={600} my="15px">
          Assign Management
        </Text>
        <VStack pb="20px" alignItems={"flex-start"}>
          {assignedManagers.map((element, index) => {
            return (
              <HStack
                w="100%"
                justifyContent={"space-between"}
                key={`${element}_${index}`}
                background="#FFFFFF"
                boxShadow="-1px 4px 16px rgba(232, 240, 253, 0.69)"
                borderRadius="12px"
                p="15px 20px"
              >
                <Text fontSize={"lg"} fontWeight={500}>
                  {element}
                </Text>
                <Button
                  background="#ED6B6B"
                  boxShadow="0px 2px 8px rgba(255, 119, 116, 0.28)"
                  borderRadius="10px"
                  color="white"
                >
                  Remove Access
                </Button>
              </HStack>
            );
          })}
          {!addManagementActive && (
            <Button bg="none" color="#1C80DD" onClick={()=>setAddManagementActive(true)} _hover={{ bg: "none" }}>
              +Add Management
            </Button>
          )}
          {addManagementActive && (
            <Flex w="100%" alignItems={"center"}>
              <Text mr="10px">Select Branch Admin:</Text>
              <Box position={"relative"}>
                <Button
                  bg="#fff"
                  w="100%"
                  border="0.444px solid #474747"
                  boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                  borderRadius="5px"
                  id="classesDropDown"
                  onClick={() => openCustomOptions(customOptionsRef)}
                >
                  {chosenEmployeeOption}
                  <ChevronDownIcon boxSize={6} />
                </Button>

                {/* LIST OF OPTIONS */}
                <VStack
                  gap="0"
                  ref={customOptionsRef}
                  display={"none"}
                  position="absolute"
                  w="100%"
                  zIndex={1}
                >
                  {employeeOptions.map((element, index) => {
                    return (
                      <Text
                        onClick={handleOptionSelection}
                        textAlign={"center"}
                        p="2px"
                        key={`${element}_${index}`}
                        value={element}
                        w="100%"
                        mt="0 !important"
                        border="0.5px solid #474747"
                        bg="#fff"
                        color="#606060"
                        cursor="pointer"
                        borderRadius={
                          index === 0
                            ? "5px 5px 0 0"
                            : index === employeeOptions.length - 1
                            ? "0 0 5px 5px"
                            : ""
                        }
                        _hover={{
                          background: "#25557B",
                          color: "#fff",
                        }}
                      >
                        {element}
                      </Text>
                    );
                  })}
                </VStack>
              </Box>
              <Button
                background="#3BB97C"
                border="1px solid #D1D5DB"
                boxShadow="0px 1px 0px rgba(0, 0, 0, 0.09)"
                borderRadius="7px"
                color="white"
                ml="auto"
                mr="10px"
                _hover={{ bg: "#3BB97C" }}
              >
                Add
              </Button>
              <Button
                background="#FDFDFD"
                border="1px solid #D1D5DB"
                borderRadius="7px"
                color="black"
                onClick={()=>setAddManagementActive(false)}
                _hover={{ bg: "#FDFDFD" }}
              >
                Cancel
              </Button>
            </Flex>
          )}
        </VStack>
      </DrawerBody>
      <DrawerFooter>
        <Box
          as="button"
          bg="#25557B"
          mr={3}
          py="8px"
          px="60px"
          color="#fff"
          borderRadius={"5px"}
          transition="opacity 0.2s linear"
          _hover={{ bg: "#25557b" }}
        >
          Save
        </Box>
        <Box
          as="button"
          bg="#25557B"
          mr={3}
          py="8px"
          px="60px"
          color="black"
          transition="opacity 0.2s linear"
          background="#FDFDFD"
          border="1px solid #D1D5DB"
          borderRadius="5px"
          onClick={onClose}
        >
          Cancel
        </Box>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default BMDrawer;
