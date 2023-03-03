import { ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Flex,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { classes } from "./Index";

const FMDrawer = () => {
  const [value, setValue] = useState("Onetime Fee");
  const [classesSelectedOptions, setclassesSelectedOptions] = useState([]);
  const buttonRef = useRef();

  const handleRemoveClass = (e) => {
    const indexToDelete = classesSelectedOptions.indexOf(e.target.innerText.slice(0,e.target.innerText.indexOf(" ")));
    classesSelectedOptions.splice(indexToDelete,1)
    setclassesSelectedOptions([...classesSelectedOptions]);
  };

  const handleClassDropdownSelection = (e) => {
    if (
      !classesSelectedOptions.includes(
        e.target.value.slice(e.target.value.indexOf(" ") + 1)
      ) &&
      e.target.value !== ""
    ) {
      setclassesSelectedOptions([
        ...classesSelectedOptions,
        e.target.value.slice(e.target.value.indexOf(" ") + 1),
      ]);
    }
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
      <DrawerHeader py="30px" mx="40px">
        <HStack justifyContent={"space-between"}>
          <Text>Define Fee Structure</Text>
          <RadioGroup onChange={setValue} value={value}>
            <VStack alignItems={"left"}>
              <Radio value="Onetime Fee">Onetime Fee</Radio>
              <Radio value="Recurring Fee">Recurring Fee</Radio>
            </VStack>
          </RadioGroup>
        </HStack>
      </DrawerHeader>
      <Divider h="1px" bg="darkgray" w="92%" m="10px auto"></Divider>
      <DrawerBody pl="35px">
        <Stack pl="30px" spacing="24px">
          <Flex w="100%" alignItems="center">
            <FormLabel
              htmlFor="classesDropDown"
              display={"inline"}
              color="#707070"
            >
              Classes
            </FormLabel>
            <Select
              display={"inline"}
              w="110px"
              border="0.444px solid #474747"
              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
              borderRadius="5px"
              id="classesDropDown"
              onChange={handleClassDropdownSelection}
              placeholder="   "
            >
              {classes.map((element, index) => {
                return (
                  <option key={`${element}_${index}`} value={element}>
                    {element}
                  </option>
                );
              })}
            </Select>
            {classesSelectedOptions.map((classItem, index) => {
              return (
                <Button ml="7px" onClick={handleRemoveClass}>
                  {`${classItem} X`}
                </Button>
              );
            })}
          </Flex>
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
              <Tbody bg="#F4F2FA"></Tbody>
            </Table>
          </TableContainer>

          <Button
            w="100px"
            bg="transparent"
            color="#1C80DD"
            _hover={{ background: "transparent" }}
          >
            + Add Subject
          </Button>
        </Stack>
      </DrawerBody>
      <DrawerFooter>
        <Box
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
        >
          Cancel
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
};

export default FMDrawer;
