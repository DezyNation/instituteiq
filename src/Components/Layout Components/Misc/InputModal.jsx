import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  Divider,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";

const InputModal = ({ children, heading,itemList, setItemList,placeholder }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmitClick = (e) => {
    e.preventDefault();
    setItemList([ ...itemList, {task: e.target[0].value} ]);
    onClose();
  };
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
            <form action="" method="post" onSubmit={onSubmitClick}>
              <FormControl isInvalid={isError}>
                <Input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
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
