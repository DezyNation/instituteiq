import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Box,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import FileItem from "./FileItem";
import { useFilesProvider } from "./FilesProvider";

const UploadModal = ({ button, chapter }) => {
  const [input, setInput] = useState("");
  const [modalBodyFileList, setModalBodyFileList] = useFilesProvider();

  const handleInputChange = (e) => setInput(e.target.value);

  const onFileUpload = (e) => {
    let modalBodyFilesArray = [];
    for (const [, value] of Object.entries(e.target.files)) {
      modalBodyFilesArray.push(value.name);
    }
    setModalBodyFileList(modalBodyFilesArray);
  };
  
  const isError = input === "";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleCancel = () => {
    setModalBodyFileList([]);
    onClose();
  };

  return (
    <>
      <Button
        onClick={onOpen}
        bg="transparent"
        color="#3948cd"
        display={"block"}
        ml="auto"
      >
        {button}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
        closeOnOverlayClick={false}
      >
        <ModalOverlay bg="rgba(217, 217, 217, 0.6)" />
        <ModalContent
          bg="white"
          borderRadius="20px"
          h="max-content"
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
                <Text
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
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  quisquam voluptatum soluta ab, odio laboriosam maiores
                  molestias rerum nam nemo? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Vitae odit sapiente dolor
                  tempora facilis doloribus reprehenderit harum pariatur nihil
                  deleniti! Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Corrupti, harum.
                </Text>
              </FormControl>
              <Box>
                {modalBodyFileList?.map((element, index) => {
                  return (
                    <FileItem key={`${element}_${index}`} fileName={element} />
                  );
                })}
              </Box>
              <Text ml="20px" fontSize={"xs"} mt="50px">
                Published on 20-06-2022 03:16 PM
              </Text>
              <Divider height="1px" w="95%" mx="auto" bg="#B0B2B6" />
              <Flex w="95%" mx="auto" mt="10px" justifyContent={"flex-end"}>
                <FormLabel
                  for="filesAttachment"
                  color="#2987DE"
                  alignSelf="flex-start"
                  marginRight="auto"
                  cursor="pointer"
                >
                  <AttachmentIcon color="#2987DE" /> Attachments
                </FormLabel>
                <Input
                  type="file"
                  multiple={true}
                  id="filesAttachment"
                  display="none"
                  onChange={onFileUpload}
                />
                <Button
                  w="130px"
                  h="28px"
                  borderRadius="12px"
                  bg="#1C80DD"
                  color="white"
                  type="submit"
                  _hover={{
                    color: "#1c80DD",
                    bg: "#fff",
                    border: "1px solid gray",
                  }}
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
                  onClick={handleCancel}
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
