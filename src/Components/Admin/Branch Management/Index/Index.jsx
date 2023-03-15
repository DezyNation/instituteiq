import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import RightDrawer from "@/Components/Layout Components/Misc/RightDrawer";
import {
  Button,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const branchesData = [
  { branchName: "XYZ", branchCode: 789, location: "Bangalore" },
  { branchName: "ABC", branchCode: 456, location: "Mumbai" },
  { branchName: "EFG", branchCode: 123, location: "Delhi" },
];
const managementData = [
  { name: "Bhoomi Sagra", email: "xyz@gmail.com", phoneNumber: "1234567890" },
];

const Index = () => {
  return (
    <MainPage heading="Branch Management">
      <VStack>
        <HStack justifyContent={"space-between"} border="1px soid red" w="100%">
          <Text fontSize={"lg"} fontWeight={500}>
            Manage Branches:
          </Text>
          <RightDrawer page="branch-management-branch" buttonText={"+Add Branch"} />
        </HStack>
        <TableContainer
          w="100%"
          borderWidth="1px 1px 1px 1px"
          borderStyle="solid"
          borderColor="#8C8C8C"
          boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
          borderRadius="12px 12px 12px 12px"
        >
          <Table>
            <Thead background="#EFEFFD" borderBottom="2px solid #8C8C8C">
              <Tr>
                <Th
                  color="#25557B"
                  fontSize={"sm"}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Sl. no
                </Th>
                <Th
                  color="#25557B"
                  fontSize={"sm"}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Branch Name
                </Th>
                <Th
                  color="#25557B"
                  fontSize={"sm"}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Branch Code
                </Th>
                <Th
                  color="#25557B"
                  fontSize={"sm"}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Location
                </Th>
                {!branchesData.length == 0 && <Th></Th>}
              </Tr>
            </Thead>
            <Tbody bg="#fff">
              {branchesData.length == 0 && (
                <Tr>
                  <Td color="#e5e5e5" fontSize={"lg"} colSpan={4} textAlign="center">
                    No Records Found
                  </Td>
                </Tr>
              )}
              {branchesData.map((element, index) => {
                return (
                  <Tr key={`${element.branchName}_${index}`}>
                    <Td p="10px" borderBottom="none" textAlign="center">{index+1}</Td>
                    <Td p="10px" borderBottom="none" textAlign="center">{element.branchName}</Td>
                    <Td p="10px" borderBottom="none" textAlign="center">{element.branchCode}</Td>
                    <Td p="10px" borderBottom="none" textAlign="center">{element.location}</Td>
                    <Td p="10px" borderBottom="none" textAlign="center">
                      <Button
                        color="white"
                        p="0 20px"
                        fontSize={"xs"}
                        background="#25557B"
                        boxShadow="0px 1px 11px rgba(0, 0, 0, 0.09)"
                        border-radius="5px"
                      >
                        Edit
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <HStack justifyContent={"space-between"} border="1px soid red" w="100%">
          <Text fontSize={"lg"} fontWeight={500}>
            Add Management
          </Text>
          <RightDrawer
            page="branch-management-employee"
            buttonText={"+Add Management"}
          />
        </HStack>
        <TableContainer
          w="100%"
          borderWidth="1px 1px 1px 1px"
          borderStyle="solid"
          borderColor="#8C8C8C"
          boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
          borderRadius="12px 12px 12px 12px"
        >
          <Table>
            <Thead background="#EFEFFD" borderBottom="2px solid #8C8C8C">
              <Tr>
                <Th
                  color="#25557B"
                  fontSize={"sm"}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Sl. no
                </Th>
                <Th
                  color="#25557B"
                  fontSize={"sm"}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Name
                </Th>
                <Th
                  color="#25557B"
                  fontSize={"sm"}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  E-mail ID
                </Th>
                <Th
                  color="#25557B"
                  fontSize={"sm"}
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Phone Number
                </Th>
                {!managementData.length == 0 && <Th></Th>}
              </Tr>
            </Thead>
            <Tbody bg="#fff">
              {managementData.length == 0 && (
                <Tr>
                  <Td color="#e5e5e5" fontSize={"lg"} colSpan={4} textAlign="center">
                    No Records Found
                  </Td>
                </Tr>
              )}
              {managementData.map((element, index) => {
                return (
                  <Tr key={`${element.name}_${index}`}>
                    <Td borderBottom="none" p="10px" textAlign="center">{index+1}</Td>
                    <Td borderBottom="none" p="10px" textAlign="center">{element.name}</Td>
                    <Td borderBottom="none" p="10px" textAlign="center">{element.email}</Td>
                    <Td borderBottom="none" p="10px" textAlign="center">{element.phoneNumber}</Td>
                    <Td borderBottom="none" p="10px" textAlign="center">
                      <Button
                        color="white"
                        p="0 20px"
                        fontSize={"xs"}
                        background="#25557B"
                        boxShadow="0px 1px 11px rgba(0, 0, 0, 0.09)"
                        border-radius="5px"
                      >
                        Edit
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </MainPage>
  );
};

export default Index;
