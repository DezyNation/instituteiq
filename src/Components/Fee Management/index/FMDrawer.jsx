import { ChevronDownIcon, ChevronRightIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CloseButton,
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
  Radio,
  RadioGroup,
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
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";
import { classes } from "./Index";

const feeInstallmentMonthOptions = [
  "January 2023",
  "Februaury 2023",
  "March 2023",
  "April 2023",
  "May 2023",
];
const installDueDate = [1, 2, 3, 4, 5];

const FMDrawer = () => {
  const [radioValue, setRadioValue] = useState("Onetime Fee");
  const [feeTypeAndDate, setFeeTypeAndDate] = useState({
    feeAmountTax: "",
    feeAmountInput: "",
    date: "",
    feeType: "",
  });
  const [feeInstallmentMonth, setFeeInstallmentMonth] = useState("");
  const [feeInstallmentDay, setFeeinstallmentDay] = useState("");
  const [classesSelectedOptions, setclassesSelectedOptions] = useState([]);
  const [grandTotalFee, setGrandTotalFee] = useState();
  const [feeStructureTableRowCount, setFeeStructureTableRowCount] = useState(
    new Array(0)
  );
  const customOptionsRef = useRef();
  const customOptionsMonthRef = useRef();
  const customOptionsDateRef = useRef();
  const grandTotalRef = useRef();
  const feeAmountRef = useRef();
  const feeTaxRef = useRef();
  const tableRef = useRef();

  const handleRemoveClass = (e) => {
    const indexToDelete = classesSelectedOptions.indexOf(
      e.target.innerText.slice(0, e.target.innerText.indexOf(" "))
    );
    classesSelectedOptions.splice(indexToDelete, 1);
    setclassesSelectedOptions([...classesSelectedOptions]);
  };

  const handleClassDropdownSelection = (e) => {
    const elementToPush = e.target.innerText.slice(
      e.target.innerText.indexOf(" ") + 1
    );
    if (
      !classesSelectedOptions.includes(elementToPush) &&
      e.target.innerText !== ""
    )
      setclassesSelectedOptions([...classesSelectedOptions, elementToPush]);
  };

  const openCustomOptions = (optionsToOpen) => {
    if (optionsToOpen.current.style.display === "")
      optionsToOpen.current.style.display = "flex";
    else optionsToOpen.current.style.display = "";
  };

  const handleCustomDateSelection = (e) => {
    setFeeinstallmentDay(e.target.innerText);
    e.target.parentElement.previousElementSibling.style.padding = "10px 20px";
  };
  const handleCustomMonthSelection = (e) => {
    setFeeInstallmentMonth(e.target.innerText);
    e.target.parentElement.previousElementSibling.style.padding = "10px 20px";
  };

  const handleClear = (e) => {
    const tableRowReference = e.target.offsetParent.parentElement;
    const tableRowIndex = tableRowReference.rowIndex;
    formik.setValues({
      ...formik.values,
      [`feeAmountInput_${tableRowIndex}`] : "",
      [`feeTaxInput_${tableRowIndex}`] : ""
    });
  };

  const handleAddNewRow = () => {
    feeStructureTableRowCount.push("");
    setFeeStructureTableRowCount([...feeStructureTableRowCount]);
  };

  const handleCreateNewStructure = (e) => {
    e.preventDefault();
    formik.setValues({
      ...formik.values,
      slectedClasses: classesSelectedOptions,
      feeType: radioValue,
      feeInstallmentMonth: feeInstallmentMonth,
      feeInstallmentDay: feeInstallmentDay,
      grandTotalFee:grandTotalFee
    });
    formik.handleSubmit();
  };

  const formik = useFormik({
    initialValues: {
      feeStructureNameInput: "",
      nameReceiptPrefixInput: "",
      receiptStartingNumberInput: "",
    },
    onSubmit: (values) => {
      //AXIOS CODE GOES HERE
      console.log(values);
    },
  });

  // Creating fee type inputs dynamically for formik values
  feeStructureTableRowCount.map((e, index) => {
    formik.initialValues[`feeTypeInput_${index + 1}`] = "";
    formik.initialValues[`feeAmountInput_${index + 1}`] = "";
    formik.initialValues[`feeTaxInput_${index + 1}`] = "";
    formik.initialValues[`feeDateInput_${index + 1}`] = "";
    // formik.initialValues[`feeStructureRowTotal_${index+1}`]=0;
  });

  //FOR CALCULATING THE ROW TOTAL IN FEE STRUCTURE DATA
  const computingRowTotal = (index) => {
    const amount = Number(formik.values[`feeAmountInput_${index + 1}`]);
    const tax = Number(formik.values[`feeTaxInput_${index + 1}`]);
    const totalAmountWithTax = String(amount + amount * (tax / 100));

    return totalAmountWithTax === "NaN" ? 0 : totalAmountWithTax;
  };

  const computeGrandTotalFee = () => {
    const tableReference = tableRef.current;
    let tableRows = new Array(...tableReference.rows);
    let grandTotal = 0;
    {
      tableRows.length > 0;
      tableRows.forEach((row, index) => {
        if (index > 0) {
          const innerText = row.querySelector(
            `#feeStructureTableRow_${index}_total`
          ).innerText;
          // if (innerText != "₹ NaN") {
          grandTotal += Number(innerText.slice(innerText.indexOf(" ")));
          // }
        }
      });
    }
    return grandTotal;
  };

  return (
    <form action="#" onSubmit={handleCreateNewStructure}>
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
            <RadioGroup onChange={setRadioValue} value={radioValue}>
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
              <Text
                mr="10px"
                fontSize={"lg"}
                display={"inline"}
                color="#707070"
              >
                Classes
              </Text>

              {/* CUSTOM DROP DOWN */}
              <Box position={"relative"}>
                <Button
                  pl="150px"
                  bg="#fff"
                  border="0.444px solid #474747"
                  boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                  borderRadius="5px"
                  id="classesDropDown"
                  onClick={() => openCustomOptions(customOptionsRef)}
                >
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
                  {classes.map((element, index) => {
                    return (
                      <Text
                        onClick={handleClassDropdownSelection}
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
                            : index === classes.length - 1
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

              {classesSelectedOptions.map((classItem, index) => {
                return (
                  <Button
                    ml="7px"
                    key={`${classItem}_${index}`}
                    onClick={handleRemoveClass}
                  >
                    {`${classItem} X`}
                  </Button>
                );
              })}
            </Flex>
            <InputGroup
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <VStack alignItems={"left"}>
                <FormLabel color="#818181" htmlFor="feeStructureNameInput">
                  Fee Structure
                </FormLabel>
                <Input
                  type="text"
                  background="#FFFFFF"
                  border="0.444px solid #474747"
                  boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                  borderRadius="5px"
                  id="feeStructureNameInput"
                  name="feeStructureNameInput"
                  value={formik.values.feeStructureNameInput}
                  onChange={formik.handleChange}
                />
              </VStack>
              <VStack alignItems={"left"}>
                <FormLabel color="#818181" htmlFor="nameReceiptPrefixInput">
                  Name Receipt Prefix
                </FormLabel>
                <Input
                  type="text"
                  background="#FFFFFF"
                  border="0.444px solid #474747"
                  boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                  borderRadius="5px"
                  id="nameReceiptPrefixInput"
                  name="nameReceiptPrefixInput"
                  value={formik.values.nameReceiptPrefixInput}
                  onChange={formik.handleChange}
                />
              </VStack>
              <VStack alignItems={"left"}>
                <FormLabel color="#818181" htmlFor="receiptStartingNumberInput">
                  Receipt Starting No
                </FormLabel>
                <Input
                  type="text"
                  background="#FFFFFF"
                  border="0.444px solid #474747"
                  boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                  borderRadius="5px"
                  id="receiptStartingNumberInput"
                  name="receiptStartingNumberInput"
                  value={formik.values.receiptStartingNumberInput}
                  onChange={formik.handleChange}
                />
              </VStack>
            </InputGroup>
            {radioValue === "Recurring Fee" && (
              <>
                <Text color="#818181" fontSize="lg">
                  Set Installment and Due Date
                </Text>
                <HStack gap={"50px"}>
                  <Box position={"relative"}>
                    <Text color="#818181">Fee Installment Month</Text>
                    <Text
                      pl="150px"
                      textAlign={"center"}
                      bg="#fff"
                      py="20px"
                      border="0.444px solid #474747"
                      boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                      borderRadius="5px"
                      id="classesDropDown"
                      onClick={() => openCustomOptions(customOptionsMonthRef)}
                    >
                      {feeInstallmentMonth}
                      {
                        <ChevronDownIcon
                          boxSize={6}
                          position={"absolute"}
                          right="0"
                          transform={"translateY(-50%)"}
                        />
                      }
                    </Text>

                    {/* LIST OF OPTIONS */}
                    <VStack
                      gap="0"
                      ref={customOptionsMonthRef}
                      display={"none"}
                      position="absolute"
                      w="100%"
                      zIndex={1}
                    >
                      {feeInstallmentMonthOptions.map((element, index) => {
                        return (
                          <Text
                            onClick={handleCustomMonthSelection}
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
                                : index ===
                                  feeInstallmentMonthOptions.length - 1
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
                  <Box position={"relative"}>
                    <Text color="#818181">Installment Due Date</Text>
                    <Text
                      position={"relative"}
                      pl="150px"
                      py="20px"
                      textAlign="center"
                      bg="#fff"
                      border="0.444px solid #474747"
                      boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                      borderRadius="5px"
                      id="classesDropDown"
                      onClick={() => openCustomOptions(customOptionsDateRef)}
                    >
                      {feeInstallmentDay}
                      {
                        <ChevronDownIcon
                          position={"absolute"}
                          right="0"
                          boxSize={6}
                          transform={"translateY(-50%)"}
                        />
                      }
                    </Text>

                    {/* LIST OF OPTIONS */}
                    <VStack
                      gap="0"
                      ref={customOptionsDateRef}
                      display={"none"}
                      position="absolute"
                      w="100%"
                      zIndex={1}
                    >
                      {installDueDate.map((element, index) => {
                        return (
                          <Text
                            onClick={handleCustomDateSelection}
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
                                : index === installDueDate.length - 1
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
                </HStack>
              </>
            )}
            <TableContainer
              bg="#f5f5f5"
              mt="2%"
              ml="auto"
              mr="auto"
              borderRadius="10px"
              variant="unstyled"
              border="1px solid #c9c9c9"
            >
              <Table size="sm" ref={tableRef}>
                <Thead bg="#25557B">
                  <Tr>
                    <Td
                      fontWeight="500"
                      fontSize={"md"}
                      textAlign={"center"}
                      color="white"
                    >
                      Fee Type
                    </Td>
                    <Td
                      fontWeight="500"
                      fontSize={"md"}
                      textAlign={"center"}
                      color="white"
                    >
                      Amount
                    </Td>
                    <Td
                      fontWeight="500"
                      fontSize={"md"}
                      textAlign={
                        radioValue === "Recurring Fee" ? "left" : "center"
                      }
                      colspan={radioValue === "Recurring Fee" ? "4" : ""}
                      color="white"
                    >
                      Tax%
                    </Td>
                    {radioValue === "Onetime Fee" && (
                      <Td
                        fontWeight="500"
                        fontSize={"md"}
                        textAlign={"left"}
                        color="white"
                        colspan="3"
                      >
                        Date
                      </Td>
                    )}
                  </Tr>
                </Thead>
                <Tbody bg="#F4F2FA">
                  {feeStructureTableRowCount.map((item, index) => {
                    return (
                      <Tr key={`feeStructureTableRow${index}`} id={`feeStructureTableRow_${index+1}`}>
                        <Td
                          fontWeight="500"
                          fontSize={"md"}
                          textAlign={"center"}
                          color="#353535"
                        >
                          <Input
                            background="#FFFFFF"
                            border="0.444px solid #474747"
                            boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                            borderRadius="5px"
                            width="73.2px"
                            p="0"
                            height="24px"
                            value={formik.values[`feeTypeInput_${index + 1}`]}
                            name={`feeTypeInput_${index + 1}`}
                            onChange={formik.handleChange}
                          />
                        </Td>
                        <Td
                          fontWeight="500"
                          fontSize={"md"}
                          textAlign={"center"}
                          color="#353535"
                        >
                          <Input
                            type="number"
                            background="#FFFFFF"
                            border="0.444px solid #474747"
                            p="0"
                            boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                            borderRadius="5px"
                            width="73.2px"
                            height="24px"
                            ref={feeAmountRef}
                            value={formik.values[`feeAmountInput_${index + 1}`]}
                            name={`feeAmountInput_${index + 1}`}
                            onChange={formik.handleChange}
                          />
                        </Td>
                        <Td
                          fontWeight="500"
                          fontSize={"md"}
                          textAlign={"center"}
                          color="#353535"
                        >
                          <Input
                            type="number"
                            background="#FFFFFF"
                            border="0.444px solid #474747"
                            p="0"
                            boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                            borderRadius="5px"
                            width="73.2px"
                            height="24px"
                            ref={feeTaxRef}
                            value={formik.values[`feeTaxInput_${index + 1}`]}
                            name={`feeTaxInput_${index + 1}`}
                            onChange={formik.handleChange}
                          />
                        </Td>
                        <Td
                          fontWeight="500"
                          fontSize={"md"}
                          textAlign={"center"}
                          color="#353535"
                        >
                          {radioValue === "Onetime Fee" && (
                            <Input
                              type="date"
                              background="#FFFFFF"
                              p="0"
                              border="0.444px solid #474747"
                              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                              borderRadius="5px"
                              width="73.2px"
                              height="24px"
                              value={formik.values[`feeDateInput_${index + 1}`]}
                              name={`feeDateInput_${index + 1}`}
                              onChange={formik.handleChange}
                            />
                          )}
                        </Td>
                        <Td
                          fontWeight="500"
                          fontSize={"md"}
                          textAlign={"center"}
                          color="#353535"
                          id={`feeStructureTableRow_${index + 1}_total`}
                        >
                          <Text>₹ {computingRowTotal(index)}</Text>
                        </Td>
                        <Td
                          fontWeight="500"
                          fontSize={"md"}
                          textAlign={"center"}
                          color="#353535"
                        >
                          <Text
                            bg="red"
                            as="button"
                            color="white"
                            boxSize={6}
                            p="5px"
                            fontWeight={700}
                            fontSize={"x-small"}
                            borderRadius="100%"
                            cursor={"pointer"}
                            type="button"
                            onClick={handleClear}
                          >
                            X
                          </Text>
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
              onClick={handleAddNewRow}
              _hover={{ background: "transparent" }}
            >
              + Add Structure
            </Button>
          </Stack>
        </DrawerBody>
        <Divider h="1px" w="95%" mx="auto" bg="gray"></Divider>
        <DrawerFooter>
          <Box mr="auto">
            {tableRef.current && (
              <Text color="rgba(55, 211, 52, 0.67)" ref={grandTotalRef}>
                ₹ {computeGrandTotalFee()}
              </Text>
            )}
            <Text>Total Annual Fee with Taxes</Text>
          </Box>
          <Box
            as="button"
            bg="#25557B"
            mr={3}
            py="8px"
            href="s"
            px="40px"
            color="#fff"
            borderRadius={"5px"}
            type="submit"
            transition="opacity 0.2s linear"
            // disabled
            // _disabled={{
            //   opacity: "0.5",
            //   cursor: "not-allowed",
            // }}
            _hover={{ bg: "#25557b" }}
          >
            Create Structure
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
    </form>
  );
};

export default FMDrawer;
