import FileItem from "@/Components/Student/Student Assignment/FileItem";
import { useFilesProvider } from "@/Components/Student/Student Assignment/FilesProvider";
import { ChevronRightIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Circle,
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
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import userSVG from "../../../../public/userSVG.svg";

const EMPMDrawer = (props) => {
  const [uploadFileName, setUploadFileName] = useState("");
  const [filesToBeUploaded, handleFileUploadOrChange] =
    useFilesProvider();

  const handleManualFileUpload = (e) => {
    setUploadFileName(e.target.files[0].name);
  };


  const formik = useFormik({
    initialValues: {
      basicDetailsPhoneNumber: "",
      basicDetailsEmail: "",
      basicDetialsEID: "",
      basicDetailsFirstName: "",
      basicDetailsMiddleName: "",
      basicDetailsLastName: "",
      basicDetailsDate: "",
      basicDetailsGender: "",
      basicDetailsBloodGroup: "",
      addressDetailsLineOne: "",
      addressDetailsLineTwo: "",
      addressDetailsCity: "",
      addressDetailsState: "",
      addressDetailsPinCode: "",
      addressDetailsCountry: "",
      employementDetailsDesignation: "",
      employementDetailsGender: "",
      employementDetailsType: "",
      employementDetailsAppointmentDate: "",
      employementDetailsExperience: "",
      employementDetailsQualification: "",
      additionalDetailsAadharNumber: "",
      additionalDetailsPanNumber: "",
      additionalDetialsReligion: "",
      additionalDetailsCategory: "",
      additionalDetailsFatherName: "",
      additionalDetailsMotherName: "",
      additionalDetailsMaritalStatus: "",
      additionalDetailsSpouseName: "",
      additionalDetailsEmergencyNumber: "",
      previousExperienceInstitute: "",
      previousExperienceJobTitle: "",
      previousExperienceJoiningDate: "",
      previousExperienceRelievingDate: "",
      previousExperienceReferenceName: "",
      previousExperienceReferenceNumber: "",
      bankDetailsName: "",
      bankDetailsAccountNumber: "",
      bankDetailsIFSCCode: "",
      bankDetailsAccountHolderName: "",
    },
    onSubmit: (values) => {
      //AXIOS CODE GOES HERE
      console.log(values);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const bulkEmployeeFiles = filesToBeUploaded
    formik.setValues({
      ...formik.values,
      employeeFiles: bulkEmployeeFiles,
      employeePicture: uploadFileName,
    });
    formik.handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
          {props.option === "employee-without-photo"
            ? "Add Management"
            : "Add Employee"}
        </DrawerHeader>

        <DrawerBody pl="40px">
          <Stack>
            {props.option !== "employee-without-photo" && (
              <>
                <HStack justifyContent={"space-between"} alignItems="center">
                  <Text fontSize={"md"}>Bulk Upload</Text>
                  <Button color="#1C80DD" bg="none" _hover={{ bg: "none" }}>
                    Download Sample List <DownloadIcon ml="10px" />
                  </Button>
                </HStack>
                <InputGroup
                  border="2px dotted #1890FF"
                  display={"grid"}
                  placeItems="center"
                  bg="rgba(244, 253, 240, 0.87)"
                  borderRadius="7px"
                  p="60px"
                >
                  <Box>
                    <Text display={"inline"} mr="2px">
                      Click{" "}
                    </Text>
                    <FormLabel
                      cursor={"pointer"}
                      htmlFor="addEmployeeFileUploadInput"
                      display={"inline"}
                      color="#1C80DDDE"
                    >
                      here
                    </FormLabel>
                    <Text display={"inline"}>to upload</Text>
                    <Input
                      type="file"
                      multiple
                      id="addEmployeeFileUploadInput"
                      display={"none"}
                      onChange={e=>handleFileUploadOrChange(e)}
                    />
                  </Box>
                </InputGroup>
                {filesToBeUploaded &&
                  Object.entries(filesToBeUploaded).map((element, index) => {
                    return (
                      <FileItem
                        key={`${element[1].name}_${index}`}
                        fileName={element[1].name}
                      />
                    );
                  })}
                <Divider h="1px" bg="#A3A3A3" />
                <Text textAlign="center" w="100%">
                  OR
                </Text>
                <Box>
                  <Text mb="20px" fontSize={"lg"}>
                    Add Employee Manually
                  </Text>
                  <HStack>
                    <Image
                      src={userSVG}
                      style={{
                        background: "#E8F0FD",
                        borderRadius: "7px",
                        padding: "10px",
                        height: "75px",
                        width: "75px",
                      }}
                    />
                    <Box>
                      <Text>Upload passport size photo</Text>
                      <Text color="#BEBEBE" fontSize={"xs"}>
                        (File size: MAX 10MB | Formats : PNG, JPG)
                      </Text>
                      <InputGroup>
                        <FormLabel
                          cursor="pointer"
                          color="#1C80DD"
                          htmlFor="manualEmployeeFileUpload"
                        >
                          Upload
                        </FormLabel>
                        <Text>{uploadFileName}</Text>
                        <Input
                          type="file"
                          id="manualEmployeeFileUpload"
                          display={"none"}
                          onChange={handleManualFileUpload}
                        />
                      </InputGroup>
                    </Box>
                  </HStack>
                </Box>
                <Divider h="1px" bg="#A3A3A3" mt="20px !important" />
              </>
            )}

            <Accordion defaultIndex={[]} allowToggle>
              <AccordionItem
                mb="10px"
                border="none"
                bg="#E8F0FD"
                background="#FFFFFF"
                boxShadow="-1px 4px 16px rgba(232, 240, 253, 0.69)"
                borderRadius={"12px"}
                overflow="hidden"
              >
                <h2>
                  <AccordionButton
                    py="15px"
                    bg="#E8F0FD"
                    _active={{ bg: "green" }}
                    _hover={{ bg: "#E8F0FD" }}
                  >
                    <Box fontWeight={600} as="span" flex="1" textAlign="left">
                      Basic Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                {/* BASIC DETAILS */}
                <AccordionPanel pb={4}>
                  <Flex gap="20px" flexWrap={"wrap"}>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetailsPhoneNumber"
                      >
                        Mobile Number
                      </FormLabel>
                      <Input
                        type="tel"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="basicDetailsPhoneNumber"
                        id="basicDetailsPhoneNumber"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetailsEmail"
                      >
                        Emaid ID
                      </FormLabel>
                      <Input
                        type="email"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="basicDetailsEmail"
                        id="basicDetailsEmail"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetialsEID"
                        display={"block"}
                      >
                        Employee ID
                      </FormLabel>
                      <InputGroup>
                        <Input
                          display="block"
                          background="#FFFFFF"
                          border="0.5px solid #7A7A7A"
                          boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                          borderRadius="5px"
                          name="basicDetialsEID"
                          id="basicDetialsEID"
                          position={"relative"}
                          onChange={formik.handleChange}
                        />
                        <InputRightElement
                          pr="30px"
                          color="#797979"
                          children={<Text>|@7903</Text>}
                        />
                      </InputGroup>
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetailsFirstName"
                      >
                        First Name
                        <sup
                          style={{
                            paddingLeft: "5px",
                            fontSize: "15px",
                            color: "red",
                          }}
                        >
                          *
                        </sup>
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="basicDetailsFirstName"
                        id="basicDetailsFirstName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetailsMiddleName"
                      >
                        Middle Name
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="basicDetailsMiddleName"
                        id="basicDetailsMiddleName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetailsLastName"
                      >
                        Last Name
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="basicDetailsLastName"
                        id="basicDetailsLastName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetailsDate"
                      >
                        Date Of Birth
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        type="date"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="basicDetailsDate"
                        id="basicDetailsDate"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetailsGender"
                      >
                        Gender
                      </FormLabel>
                      <Select
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="basicDetailsGender"
                        id="basicDetailsGender"
                        onChange={formik.handleChange}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                      </Select>
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="basicDetailsBloodGroup"
                      >
                        Blood Group
                      </FormLabel>
                      <Select
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="basicDetailsBloodGroup"
                        id="basicDetailsBloodGroup"
                        onChange={formik.handleChange}
                      >
                        <option value="A+">A+</option>
                        <option value="B+">B+</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </Select>
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border="none"
                mb="10px"
                bg="#E8F0FD"
                background="#FFFFFF"
                boxShadow="-1px 4px 16px rgba(232, 240, 253, 0.69)"
                borderRadius={"12px"}
                overflow="hidden"
              >
                <h2>
                  <AccordionButton
                    py="15px"
                    bg="#E8F0FD"
                    _active={{ bg: "green" }}
                    _hover={{ bg: "#E8F0FD" }}
                  >
                    <Box fontWeight={600} as="span" flex="1" textAlign="left">
                      Address Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex gap="20px" flexWrap={"wrap"}>
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
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
                      />
                    </Box>
                  </Flex>
                  <RadioGroup mt="10px">
                    <Radio value="sameAddress">
                      <Text color="#3D8CD5">
                        Permanaent address same as current address
                      </Text>
                    </Radio>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border="none"
                mb="10px"
                bg="#E8F0FD"
                background="#FFFFFF"
                boxShadow="-1px 4px 16px rgba(232, 240, 253, 0.69)"
                borderRadius={"12px"}
                overflow="hidden"
              >
                <h2>
                  <AccordionButton
                    py="15px"
                    bg="#E8F0FD"
                    _active={{ bg: "green" }}
                    _hover={{ bg: "#E8F0FD" }}
                  >
                    <Box fontWeight={600} as="span" flex="1" textAlign="left">
                      Employement Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex gap="20px" flexWrap={"wrap"}>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="employementDetailsDesignation"
                      >
                        Designation
                      </FormLabel>
                      <Select
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="employementDetailsDesignation"
                        id="employementDetailsDesignation"
                        onChange={formik.handleChange}
                      >
                        <option value="Designation 1">Designation 1</option>
                        <option value="Designation 2">Designation 2</option>
                        <option value="Designation 3">Designation 3</option>
                      </Select>
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="employementDetailsGender"
                      >
                        Department
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="employementDetailsGender"
                        id="employementDetailsGender"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="employementDetailsType"
                      >
                        Employement Type
                      </FormLabel>
                      <Select
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="employementDetailsType"
                        id="employementDetailsType"
                        onChange={formik.handleChange}
                      >
                        <option value="Type 1">Type 1</option>
                        <option value="Type 2">Type 2</option>
                        <option value="Type 3">Type 3</option>
                      </Select>
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="employementDetailsAppointmentDate"
                      >
                        Appointment Date
                      </FormLabel>
                      <Select
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="employementDetailsAppointmentDate"
                        id="employementDetailsAppointmentDate"
                        onChange={formik.handleChange}
                      >
                        <option value="Date 1">Date 1</option>
                        <option value="Date 2">Date 2</option>
                        <option value="Date 3">Date 3</option>
                      </Select>
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="employementDetailsExperience"
                        display={"block"}
                      >
                        Experience
                      </FormLabel>
                      <Input
                        display="block"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="employementDetailsExperience"
                        id="employementDetailsExperience"
                        position={"relative"}
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="employementDetailsQualification"
                      >
                        Highest Qualification
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="employementDetailsQualification"
                        id="employementDetailsQualification"
                        onChange={formik.handleChange}
                      />
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border="none"
                mb="10px"
                bg="#E8F0FD"
                background="#FFFFFF"
                boxShadow="-1px 4px 16px rgba(232, 240, 253, 0.69)"
                borderRadius={"12px"}
                overflow="hidden"
              >
                <h2>
                  <AccordionButton
                    py="15px"
                    bg="#E8F0FD"
                    _active={{ bg: "green" }}
                    _hover={{ bg: "#E8F0FD" }}
                  >
                    <Box fontWeight={600} as="span" flex="1" textAlign="left">
                      Additional Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex gap="20px" flexWrap={"wrap"}>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetailsAadharNumber"
                      >
                        Aadhar Number
                      </FormLabel>
                      <Input
                        type="tel"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetailsAadharNumber"
                        id="additionalDetailsAadharNumber"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetailsPanNumber"
                      >
                        PAN Number
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetailsPanNumber"
                        id="additionalDetailsPanNumber"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetialsReligion"
                        display={"block"}
                      >
                        Religion
                      </FormLabel>
                      <Select
                        display="block"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetialsReligion"
                        id="additionalDetialsReligion"
                        position={"relative"}
                        onChange={formik.handleChange}
                      >
                        <option value="Religion 1">Religion 1</option>
                        <option value="Religion 2">Religion 2</option>
                        <option value="Religion 3">Religion 3</option>
                      </Select>
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetailsCategory"
                      >
                        Category
                      </FormLabel>
                      <Select
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetailsCategory"
                        id="additionalDetailsCategory"
                        onChange={formik.handleChange}
                      >
                        <option value="category 1">Category 1</option>
                        <option value="category 2">Category 2</option>
                        <option value="category 3">Category 3</option>
                      </Select>
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetailsFatherName"
                      >
                        father's Name
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetailsFatherName"
                        id="additionalDetailsFatherName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetailsMotherName"
                      >
                        Mother's Name
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetailsMotherName"
                        id="additionalDetailsMotherName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetailsMaritalStatus"
                      >
                        Marital Status
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetailsMaritalStatus"
                        id="additionalDetailsMaritalStatus"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetailsSpouseName"
                      >
                        Spouse Name
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetailsSpouseName"
                        id="additionalDetailsSpouseName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="additionalDetailsEmergencyNumber"
                      >
                        Emergency Number
                      </FormLabel>
                      <Input
                        type="tel"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="additionalDetailsEmergencyNumber"
                        id="additionalDetailsEmergencyNumber"
                        onChange={formik.handleChange}
                      />
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border="none"
                mb="10px"
                bg="#E8F0FD"
                background="#FFFFFF"
                boxShadow="-1px 4px 16px rgba(232, 240, 253, 0.69)"
                borderRadius={"12px"}
                overflow="hidden"
              >
                <h2>
                  <AccordionButton
                    py="15px"
                    bg="#E8F0FD"
                    _active={{ bg: "green" }}
                    _hover={{ bg: "#E8F0FD" }}
                  >
                    <Box fontWeight={600} as="span" flex="1" textAlign="left">
                      Previous Experience
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex gap="20px" flexWrap={"wrap"}>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="previousExperienceInstitute"
                      >
                        Institute Name
                      </FormLabel>
                      <Input
                        type="tel"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="previousExperienceInstitute"
                        id="previousExperienceInstitute"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="previousExperienceJobTitle"
                      >
                        Job Title
                      </FormLabel>
                      <Input
                        type="tel"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="previousExperienceJobTitle"
                        id="previousExperienceJobTitle"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="previousExperienceJoiningDate"
                      >
                        Joining Date
                      </FormLabel>
                      <Input
                        type="date"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="previousExperienceJoiningDate"
                        id="previousExperienceJoiningDate"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="previousExperienceRelievingDate"
                      >
                        Relieving Date
                      </FormLabel>
                      <Input
                        type="date"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="previousExperienceRelievingDate"
                        id="previousExperienceRelievingDate"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="previousExperienceReferenceName"
                      >
                        Reference Name
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="previousExperienceReferenceName"
                        id="previousExperienceReferenceName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="previousExperienceReferenceNumber"
                      >
                        Reference Mobile Number
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="previousExperienceReferenceNumber"
                        id="previousExperienceReferenceNumber"
                        onChange={formik.handleChange}
                      />
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem
                border="none"
                mb="10px"
                bg="#E8F0FD"
                background="#FFFFFF"
                boxShadow="-1px 4px 16px rgba(232, 240, 253, 0.69)"
                borderRadius={"12px"}
                overflow="hidden"
              >
                <h2>
                  <AccordionButton
                    py="15px"
                    bg="#E8F0FD"
                    _active={{ bg: "green" }}
                    _hover={{ bg: "#E8F0FD" }}
                  >
                    <Box fontWeight={600} as="span" flex="1" textAlign="left">
                      Bank Details
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Flex gap="20px" flexWrap={"wrap"}>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="bankDetailsName"
                      >
                        Bank Name
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="bankDetailsName"
                        id="bankDetailsName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="bankDetailsAccountNumber"
                      >
                        Bank Account Number
                      </FormLabel>
                      <Input
                        type="number"
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="bankDetailsAccountNumber"
                        id="bankDetailsAccountNumber"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="bankDetailsIFSCCode"
                      >
                        IFSC Code
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="bankDetailsIFSCCode"
                        id="bankDetailsIFSCCode"
                        onChange={formik.handleChange}
                      />
                    </Box>
                    <Box flex="1 1 200px">
                      <FormLabel
                        color="#767676"
                        fontWeight="400"
                        htmlFor="bankDetailsAccountHolderName"
                      >
                        Account Holder Name
                      </FormLabel>
                      <Input
                        background="#FFFFFF"
                        border="0.5px solid #7A7A7A"
                        boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                        borderRadius="5px"
                        name="bankDetailsAccountHolderName"
                        id="bankDetailsAccountHolderName"
                        onChange={formik.handleChange}
                      />
                    </Box>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <Text color="#AEAEAE" fontSize={"xs"} mr="10px">
            Entering mobile number or email ID is mandatory.
          </Text>
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
            type="submit"
            // disabled
            // _disabled={{
            //   opacity: "0.5",
            //   cursor: "not-allowed",
            // }}
            _hover={{ bg: "#25557b" }}
          >
            Add Employee
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </form>
  );
};

export default EMPMDrawer;
