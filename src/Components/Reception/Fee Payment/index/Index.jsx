import MainPage from "@/Components/Layout Components/MainPage/MainPage";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Radio,
  RadioGroup,
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
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useRef, useState } from "react";

const feePaymentsData = [
  {
    id: 12681,
    studentName: "Bhoomi Sagar",
    class: "5-A",
    feeSchemeName: "5-A Fee Plan 1",
    feeSchemeType: "One Time Payment",
    paidInstallments: ["26 Feb 2022", "26 Aug 2022"],
    dueInstallments: ["23 Sep 2022", "1 Jan 2023", "4 Feb 2023", "9 Feb 2023"],
    partialPayments: [
      ["26 Feb 2022", 2000],
      ["23 Feb 2022", 8000],
    ],
    paymentHistory: [
      {
        modeOfPayment: "Cash",
        installmentDate: "Yes",
        paymentDate: "23/9/2022",
        discount: 0,
        paidAmount: 18000,
      },
    ],
  },
  {
    id: 12682,
    studentName: "Bhoom Sagar",
    class: "5-A",
    feeSchemeName: "5-A Fee Plan 1",
    feeSchemeType: "One Time Payment",
    paidInstallments: ["26 Feb 2022", "26 Aug 2022"],
    dueInstallments: ["23 Sep 2022", "1 Jan 2023", "4 Feb 2023", "9 Feb 2023"],
    partialPayments: [
      ["26 Feb 2022", 2000],
      ["23 Feb 2022", 8000],
    ],
    paymentHistory: [
      {
        modeOfPayment: "Cash",
        installmentDate: "Yes",
        paymentDate: "23/9/2022",
        discount: 0,
        paidAmount: 18000,
      },
    ],
  },
  {
    id: 12683,
    studentName: "Bhoom Sagari",
    class: "5-A",
    feeSchemeName: "5-A Fee Plan 1",
    feeSchemeType: "One Time Payment",
    paidInstallments: ["26 Feb 2022", "26 Aug 2022"],
    dueInstallments: ["23 Sep 2022", "1 Jan 2023", "4 Feb 2023", "9 Feb 2023"],
    partialPayments: [
      ["26 Feb 2022", 2000],
      ["23 Feb 2022", 8000],
    ],
    paymentHistory: [
      {
        modeOfPayment: "Cash",
        installmentDate: "Yes",
        paymentDate: "23/9/2022",
        discount: 0,
        paidAmount: 18000,
      },
      {
        modeOfPayment: "Cash",
        installmentDate: "Yes",
        paymentDate: "23/9/2022",
        discount: 0,
        paidAmount: 18000,
      },
    ],
  },
];

const discountOptions = ["Option - 1", "Option - 2", "Option - 3"];
const Index = () => {
  const [searchedId, setSearchedId] = useState("");
  const [searchResults, setsearchResults] = useState();
  const [chosenDiscountOption, setChosenDiscountOption] = useState("");
  const [taxRadio, setTaxRadio] = useState("yes");
  const [paymentMethodRadio, setPaymentMethodRadio] = useState("cash");
  const customDiscountOptionsRef = useRef();

  const handleOptionSelection = (e) => {
    const optionSelected = e.target.innerText;
    if (discountOptions.includes(optionSelected)) {
      const indexToSet = discountOptions.indexOf(optionSelected);
      setChosenDiscountOption(discountOptions[indexToSet]);
    }
  };

  const searchRecords = (valueToSearch) => {
    for (let i = 0; i < feePaymentsData.length; i++) {
      if (feePaymentsData[i].id == valueToSearch) {
        setsearchResults(String(i));
        break;
      } else setsearchResults();
    }
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchedId(value);
    searchRecords(value);
  };

  const openCustomOptions = (customOptionsRef) => {
    if (customOptionsRef.current.style.display === "")
      customOptionsRef.current.style.display = "flex";
    else customOptionsRef.current.style.display = "";
  };

  const handleDueInstallmentsCheckboxAction = (e) => {
    const buttonReference = e.target;
    if (buttonReference.checked) {
      formik.setValues({
        ...formik.values,
        dueInstallments: [
          ...formik.values.dueInstallments,
          buttonReference.value,
        ],
      });
    } else {
      formik.values.dueInstallments.splice(
        formik.values.dueInstallments.indexOf(buttonReference.value),
        1
      );
      formik.setValues({
        ...formik.values,
        dueInstallments: [...formik.values.dueInstallments],
      });
    }
  };
  const handlePartialPaymentsCheckboxAction = (e) => {
    const buttonReference = e.target;
    if (buttonReference.checked) {
      formik.setValues({
        ...formik.values,
        partialPaymentsDate: [
          ...formik.values.partialPaymentsDate,
          buttonReference.value,
        ],
      });
    } else {
      formik.values.partialPaymentsDate.splice(
        formik.values.partialPaymentsDate.indexOf(buttonReference.value),
        1
      );
      formik.setValues({
        ...formik.values,
        partialPaymentsDate: [...formik.values.partialPaymentsDate],
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      dueInstallments: [],
      partialPaymentsDate: [],
      partialPaymentAmount: "",
    },
    onSubmit: (values) => {
      //AXIOS CODE GOES HERE 
      console.log(values);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formik.setValues({
      ...formik.values,
      discountoption: chosenDiscountOption,
      tax: taxRadio,
      paymentMethod: paymentMethodRadio,
    });
    formik.handleSubmit();
  };

  return (
    <MainPage heading="Fee Payments">
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
          placeholder="Search By ID"
          border="none"
          boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
          borderRadius="16px"
          value={searchedId}
          onChange={handleSearchInputChange}
        />
        {/* {console.log(searchResults)} */}
      </InputGroup>
      <Heading mt="20px" as="h3" fontSize={"xl"} fontWeight={500}>
        Details
      </Heading>
      <VStack>
        {searchedId === "" && (
          <Box w="100%" py="25vh">
            <Text color="#827E7E" fontSize={"xl"} textAlign={"center"}>
              Enter Student ID to get Fee Details
            </Text>
          </Box>
        )}
        {!searchResults ? (
          <Box w="100%" py="25vh">
            <Text color="#827E7E" fontSize={"xl"} textAlign={"center"}>
              No record found
            </Text>
          </Box>
        ) : (
          <>
            <TableContainer
              bg="#E2E1FF70"
              background="rgba(226, 225, 255, 0.44)"
              boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
              borderRadius="12px"
              w="100%"
              my="20px"
            >
              <Table>
                <Thead borderBottom="2px solid #5a5a5a">
                  <Tr display={"flex"} justifyContent={"space-between"}>
                    <Th
                      textAlign="center"
                      w="17%"
                      fontSize={"sm"}
                      textTransform="capitalize"
                      color="#25557B"
                    >
                      Student Name
                    </Th>
                    <Th
                      textAlign="center"
                      w="17%"
                      fontSize={"sm"}
                      textTransform="capitalize"
                      color="#25557B"
                    >
                      Student ID
                    </Th>
                    <Th
                      textAlign="center"
                      w="17%"
                      fontSize={"sm"}
                      textTransform="capitalize"
                      color="#25557B"
                    >
                      Class
                    </Th>
                    <Th
                      textAlign="center"
                      w="17%"
                      fontSize={"sm"}
                      textTransform="capitalize"
                      color="#25557B"
                    >
                      Fee Scheme Name
                    </Th>
                    <Th
                      textAlign="center"
                      w="17%"
                      fontSize={"sm"}
                      textTransform="capitalize"
                      color="#25557B"
                    >
                      Fee Scheme Type
                    </Th>
                    <Th
                      w="17%"
                      fontSize={"sm"}
                      textTransform="capitalize"
                      color="#25557B"
                    >
                      Paid Installments
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr
                    textAlign="flexStart"
                    display={"flex"}
                    justifyContent={"space-between"}
                  >
                    <Td w="17%" textAlign={"center"}>
                      {feePaymentsData[searchResults].studentName}
                    </Td>
                    <Td w="17%" textAlign={"center"}>
                      {feePaymentsData[searchResults].id}
                    </Td>
                    <Td w="17%" textAlign={"center"}>
                      {feePaymentsData[searchResults].class}
                    </Td>
                    <Td w="17%" textAlign={"center"}>
                      {feePaymentsData[searchResults].feeSchemeName}
                    </Td>
                    <Td w="17%" textAlign={"center"}>
                      {feePaymentsData[searchResults].feeSchemeType}
                    </Td>
                    <Td w="17%">
                      {feePaymentsData[searchResults].paidInstallments.map(
                        (element, index) => {
                          return <Text key={index}>{element}</Text>;
                        }
                      )}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <form
              action=""
              onSubmit={handleFormSubmit}
              style={{ width: "100%" }}
            >
              <TableContainer
                bg="#E2E1FF70"
                background="rgba(226, 225, 255, 0.44)"
                boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
                borderRadius="12px"
                w="100%"
                my="20px"
                overflow={"visiblex !important"}
                overflowY={"visiblex !important"}
              >
                <Table>
                  <Thead borderBottom="2px solid #5a5a5a">
                    <Tr display={"flex"} justifyContent={"space-between"}>
                      <Th
                        textAlign={"center"}
                        w="17%"
                        fontSize={"sm"}
                        textTransform="capitalize"
                        color="#25557B"
                      >
                        Due Installments
                      </Th>
                      <Th
                        w="17%"
                        fontSize={"sm"}
                        textTransform="capitalize"
                        color="#25557B"
                      >
                        Partial Payment
                      </Th>
                      <Th
                        w="17%"
                        fontSize={"sm"}
                        textTransform="capitalize"
                        color="#25557B"
                        textAlign={"center"}
                      >
                        Due
                      </Th>
                      <Th
                        w="17%"
                        fontSize={"sm"}
                        textTransform="capitalize"
                        color="#25557B"
                      >
                        Partial Payment
                      </Th>
                      <Th
                        w="17%"
                        fontSize={"sm"}
                        textTransform="capitalize"
                        color="#25557B"
                      >
                        Include Tax
                      </Th>
                      <Th
                        w="17%"
                        fontSize={"sm"}
                        textTransform="capitalize"
                        color="#25557B"
                      >
                        Mode Of Payment
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody borderBottom="2px solid #5a5a5a">
                    <Tr display={"flex"} justifyContent={"space-between"}>
                      <Td w="17%">
                        {feePaymentsData[searchResults].dueInstallments.map(
                          (element, index) => {
                            return (
                              <Box
                                key={index}
                                mt="5px"
                                display={"flex"}
                                alignItems="center"
                                gap="5px"
                              >
                                <input
                                  type="checkbox"
                                  value={element}
                                  id={element}
                                  onChange={handleDueInstallmentsCheckboxAction}
                                  name={`dueInstallmentsDate`}
                                  style={{ width: "17px", height: "17px" }}
                                />
                                <label htmlFor={element}> {element} </label>
                              </Box>
                            );
                          }
                        )}
                      </Td>
                      <Td w="17%">
                        {feePaymentsData[searchResults].partialPayments.map(
                          (element, index) => {
                            return (
                              <Box
                                key={index}
                                mt="5px"
                                display={"flex"}
                                alignItems="center"
                                gap="5px"
                              >
                                <input
                                  type="checkbox"
                                  value={element[0]}
                                  id={element[0]}
                                  onChange={handlePartialPaymentsCheckboxAction}
                                  style={{ width: "17px", height: "17px" }}
                                />
                                <label htmlFor={element[0]}>
                                  {" "}
                                  {element[0]}{" "}
                                </label>
                              </Box>
                            );
                          }
                        )}
                      </Td>
                      <Td w="17%" textAlign={"center"}>
                        {feePaymentsData[searchResults].partialPayments.map(
                          (element, index) => {
                            return (
                              <Text key={index} mt="5px">
                                {element[1]}
                              </Text>
                            );
                          }
                        )}
                      </Td>
                      <Td w="17%">
                        <Box>
                          <Input
                            type="number"
                            background="#FFFFFF"
                            border="0.444px solid #474747"
                            boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                            borderRadius="5px"
                            h="30px"
                            name="partialPaymentAmount"
                            onChange={formik.handleChange}
                          ></Input>
                          <Divider h="1px" bg="gray" mt="10px" />
                          <Text fontSize={"sm"} mt="5px">
                            Apply Discount
                          </Text>
                          {/* CUSTOM DROP DOWN */}
                          <Box position={"relative"}>
                            <Button
                              bg="#fff"
                              w="100%"
                              border="0.444px solid #474747"
                              boxShadow="-2px 2px 10px rgba(196, 226, 255, 0.19)"
                              borderRadius="5px"
                              id="classesDropDown"
                              onClick={() =>
                                openCustomOptions(customDiscountOptionsRef)
                              }
                            >
                              {chosenDiscountOption}
                              <ChevronDownIcon boxSize={6} />
                            </Button>

                            {/* LIST OF OPTIONS */}
                            <VStack
                              gap="0"
                              ref={customDiscountOptionsRef}
                              display={"none"}
                              position="absolute"
                              w="100%"
                              zIndex={1}
                            >
                              {discountOptions.map((element, index) => {
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
                                        : index === discountOptions.length - 1
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
                        </Box>
                      </Td>
                      <Td w="17%">
                        <RadioGroup
                          defaultValue="yes"
                          value={taxRadio}
                          onChange={setTaxRadio}
                        >
                          <Box
                            display={"flex"}
                            flexDirection="column"
                            gap="10px"
                          >
                            <Radio
                              value="yes"
                              border={"1px solid lightgray"}
                              bg="white"
                            >
                              Yes
                            </Radio>
                            <Radio
                              value="no"
                              border={"1px solid lightgray"}
                              bg="white"
                            >
                              No
                            </Radio>
                          </Box>
                        </RadioGroup>
                      </Td>
                      <Td w="17%">
                        <RadioGroup
                          defaultValue="cash"
                          value={paymentMethodRadio}
                          onChange={setPaymentMethodRadio}
                        >
                          <Box
                            display={"flex"}
                            flexDirection="column"
                            gap="10px"
                          >
                            <Radio
                              value="cash"
                              border={"1px solid lightgray"}
                              bg="white"
                            >
                              Cash
                            </Radio>
                            <Radio
                              value="neft/imps"
                              border={"1px solid lightgray"}
                              bg="white"
                            >
                              NEFT/IMPS
                            </Radio>
                            <Radio
                              value="online payment"
                              border={"1px solid lightgray"}
                              bg="white"
                            >
                              Online Payment
                            </Radio>
                            <Radio
                              value="cheque"
                              border={"1px solid lightgray"}
                              bg="white"
                            >
                              Cheque
                            </Radio>
                            <Radio
                              value="debit/credit"
                              border={"1px solid lightgray"}
                              bg="white"
                            >
                              Debit / Credit
                            </Radio>
                          </Box>
                        </RadioGroup>
                      </Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr display={"flex"} flexDirection="space-between">
                      <Td ml="auto">
                        <Text fontSize={"lg"}>Grand Total</Text>
                        <Text fontSize={"md"} fontWeight={500}>
                          {formik.values.partialPaymentAmount}
                        </Text>
                      </Td>
                      <Td>
                        <Button
                          color="white"
                          background="#4D68E6"
                          boxShadow="0px 1px 11px rgba(0, 0, 0, 0.09)"
                          borderRadius="5px"
                          type="submit"
                        >
                          Make Payment
                        </Button>
                      </Td>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </form>
            <Heading
              as="h3"
              fontSize={"xl"}
              fontWeight={400}
              w="100%"
              marginBlock={"20px !important"}
            >
              Payment History
            </Heading>
            <TableContainer
              borderRadius={"12px"}
              border="1px solid #8C8C8C"
              w="100%"
            >
              <Table>
                <Thead bg="#E2E1FF70" borderBottom={"2px solid #8C8C8C"}>
                  <Tr>
                    <Td textAlign={"center"}>Mode of Payment</Td>
                    <Td textAlign={"center"}>Installment Date</Td>
                    <Td textAlign={"center"}>Payment Date</Td>
                    <Td textAlign={"center"}>Discount</Td>
                    <Td textAlign={"center"}>Paid Amount</Td>
                  </Tr>
                </Thead>
                <Tbody>
                  {feePaymentsData[searchResults].paymentHistory.map(
                    (element, index) => {
                      return (
                        <Tr key={`${element.modeOfPayment}_${index}`}>
                          <Td fontWeight={500} textAlign={"center"}>
                            {element.modeOfPayment}
                          </Td>
                          <Td fontWeight={500} textAlign={"center"}>
                            {element.installmentDate}
                          </Td>
                          <Td fontWeight={500} textAlign={"center"}>
                            {element.paymentDate}
                          </Td>
                          <Td
                            fontWeight={500}
                            textAlign={"center"}
                          >{`${element.discount}%`}</Td>
                          <Td fontWeight={500} textAlign={"center"}>
                            {element.paidAmount}
                          </Td>
                        </Tr>
                      );
                    }
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        )}
      </VStack>
    </MainPage>
  );
};

export default Index;
