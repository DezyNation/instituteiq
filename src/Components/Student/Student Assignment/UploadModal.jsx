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

const UploadModal = ({ button, chapter }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmitClick = (e) =>{
    e.preventDefault()
    console.log(e.target.form)
  }
  return (
    <>
      <Button onClick={onOpen} color="#3948cd" display={"block"} ml="auto">
        {button}
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
            {chapter}
          </ModalHeader>
          <ModalBody mt="20px" pb="10px">
            <form action="" method="post">
              <FormControl isInvalid={isError}>
                <Textarea
                  value={input}
                  onChange={handleInputChange}
                  bg="#F6EBEB"
                  resize={"none"}
                  h="181px"
                  w="96%"
                  borderRadius="20px"
                  placeholder="Description..."
                  p="20px"
                  mt="-5px"
                  mx="auto"
                  display="block"
                />
              </FormControl>
              <Text ml="20px" fontSize={"xs"} mt="200px">Published on 20-06-2022 03:16 PM</Text>
              <Divider height="1px" w="95%" mx="auto" bg="#B0B2B6"/>
              <Flex w="95%" mx="auto" mt="10px" justifyContent={"flex-end"}>
                <label htmlFor="filesAttachment" style={{color:"#2987DE",alignSelf:"flex-start",marginRight:"auto"}}><AttachmentIcon color="#2987DE"/> Attachments</label>
                <Input type="file" multiple={true} id="filesAttachment" display="none"/>
                <Button
                  w="130px"
                  h="28px"
                  borderRadius="12px"
                  bg="#1C80DD"
                  color="white"
                  type="submit"
                  onClick={onSubmitClick}
                  >
                  Submit
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

export default UploadModal;
