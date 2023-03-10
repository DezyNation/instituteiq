import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Flex,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const InputModal = ({
  children,
  heading,
  itemList,
  setItemList,
  placeholder,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const formik = useFormik({
    initialValues: {
      newListItemToAdd: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // Axios code goes here
      onClose();
    },
  });


  return (
    <>
      <Button onClick={onOpen} color="#3948cd" w="100%" p="0px" my="20px">
        {children}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay bg="rgba(217, 217, 217, 0.6)" />
        <ModalContent
          bg="white"
          borderRadius="20px"
          h="max-content"
          w="700px"
          mx="auto"
          my="auto"
        >
          <ModalHeader
            borderTopRadius="20px"
            padding="5px"
            pl="20px"
            fontSize="xl"
            color="#fff"
            bg="#2987DE"
          >
            {heading}
          </ModalHeader>
          <ModalBody mt="20px" pb="10px">

            <form action="" method="post" onSubmit={formik.handleSubmit}>
              <FormControl>
                <Input
                  type="text"
                  bg="#F6EBEB"
                  resize={"none"}
                  w="96%"
                  borderRadius="20px"
                  placeholder={placeholder}
                  p="20px"
                  pb="100px"
                  mt="-5px"
                  mx="auto"
                  display="block"
                  name={"newListItemToAdd"}
                  value={formik.values.newListItemToAdd}
                  onChange={formik.handleChange}
                />
              </FormControl>
              <Flex w="95%" mx="auto" mt="30px" justifyContent={"flex-end"}>
                <Button
                  w="130px"
                  h="28px"
                  borderRadius="12px"
                  bg="#1C80DD"
                  color="white"
                  type="submit"
                >
                  Add
                </Button>
                <Button
                  w="130px"
                  h="28px"
                  borderRadius="12px"
                  bg="#fdfdfd"
                  border="1px solid #D1D5DB"
                  ml="15px"
                  onClick={onClose}
                >
                  Cancel
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InputModal;
