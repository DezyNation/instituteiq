import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import RightDrawer from "@/Components/Layout Components/Misc/RightDrawer";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const searchOptions = ["Name", "Role"];
const roleOptions = ["Reception", "Incharge", "Teacher"];

const employeeData = [
  {
    name: "Name 1",
    empId: "123456",
    contact: "8512365890",
    dateOfjoining: "26-12-2022",
  },
];

const Index = () => {
  const [chosenSearchOption, setChosenSearchOption] = useState(
    searchOptions[0]
  );
  const [chosenRoleOption, setChosenRoleOption] = useState(roleOptions[0]);

  const customOptionsRef = useRef();

  const openCustomOptions = (customOptionsRef) => {
    if (customOptionsRef.current.style.display === "")
      customOptionsRef.current.style.display = "flex";
    else customOptionsRef.current.style.display = "";
  };

  const handleOptionSelection = (e) => {
    const optionSelected = e.target.innerText;

    if (searchOptions.includes(optionSelected)) {
      const indexToSet = searchOptions.indexOf(optionSelected);
      setChosenSearchOption(searchOptions[indexToSet]);
    } else if (roleOptions.includes(optionSelected)) {
      const indexToSet = roleOptions.indexOf(optionSelected);
      setChosenRoleOption(roleOptions[indexToSet]);
    }
  };

  return (
    <MainPage page="employee-management">
      <HStack justifyContent={"space-between"}>
        <Heading as="h1" fontWeight={400}>
          Employee Management
        </Heading>
        <RightDrawer
          page="employee-management"
          buttonText="+Add New Employee"
        />
      </HStack>
      <Divider h="1px" my="20px" bg="#A3A3A3" w="100%" />

      <HStack>
        {/* CUSTOM DROP DOWN */}
        <Box position={"relative"}>
          <Button
            background="#EFEFFD"
            color="#797979"
            boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
            borderRadius="16px"
            _hover={{
              bg: "#EFEFFD",
            }}
            onClick={() => openCustomOptions(customOptionsRef)}
          >
            Search by {`${chosenSearchOption}`}
            <ChevronDownIcon boxSize={6} color="#797979" />
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
            {searchOptions.map((element, index) => {
              return (
                <Text
                  onClick={handleOptionSelection}
                  textAlign={"center"}
                  p="2px"
                  key={`${element}_${index}`}
                  value={element}
                  w="100%"
                  mt="0 !important"
                  border="0.5px solid gray"
                  bg="#EFEFFD"
                  color="#606060"
                  cursor="pointer"
                  borderRadius={
                    index === 0
                      ? "5px 5px 0 0"
                      : index === searchOptions.length - 1
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

        <InputGroup
          size="sm"
          bg="#EFEFFD"
          boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
          borderRadius="16px"
          py="4px"
          w="20%"
        >
          <InputLeftAddon
            boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
            borderRadius="16px"
            border="none"
            bg="#EFEFFD"
            children={<SearchIcon color="#797979" />}
          />
          <Input
            placeholder="Search"
            border="none"
            boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
            borderRadius="16px"
          />
        </InputGroup>
      </HStack>
      <TableContainer
        borderRadius="12px 12px 12px 12px"
        mt="20px"
        borderWidth="2px 2px 2px 2px"
        borderColor="#8c8c8c"
        overflow={"visible !important"}
        overflowY={"visible !important"}
      >
        <Table borderRadius="12px 12px 0px 0px">
          <Thead
            background="#EFEFFD"
            borderBottom="3px solid #8c8c8c"
            boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
          >
            <Tr>
              <Th textAlign={"center"} color="#797979">
                Employee Name
              </Th>
              <Th textAlign={"center"} color="#797979">
                Contact{" "}
              </Th>
              <Th textAlign={"center"} color="#797979">
                Date Of Joining
              </Th>
              <Th textAlign={"center"} color="#797979">
                Roles
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {employeeData.map((employeeItem, index) => {
              return (
                <Tr key={`${employeeItem}_${index}`}>
                  <Td textAlign={"center"} color="#676767">
                    <Text>{employeeItem.name}</Text>
                    <Text fontSize={"xs"}>EmpID : {employeeItem.empId}</Text>
                  </Td>
                  <Td textAlign={"center"}>{employeeItem.contact}</Td>
                  <Td textAlign={"center"}>{employeeItem.dateOfjoining}</Td>
                  <Td>
                    {/* CUSTOM DROP DOWN */}
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
                        {chosenRoleOption}
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
                        {roleOptions.map((element, index) => {
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
                                  : index === roleOptions.length - 1
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
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </MainPage>
  );
};

export default Index;
