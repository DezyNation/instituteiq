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
import { useFormik } from "formik";

const UploadModal = ({ button, chapter }) => {
  const [modalBodyFileList, setModalBodyFileList] = useFilesProvider();
  const [disableSubmitButton, setDisableSubmitButton] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const filesReference = e.target.querySelector(
      "input#filesAttachment"
    ).files;
    if (filesReference.length > 0) {
      console.log(e.target.querySelector("input#filesAttachment").files);
    }
  };

  const onFileUpload = (e) => {
    let modalBodyFilesArray = [];
    const filesRef = e.target.files;
    if (filesRef.length > 0) {
      setDisableSubmitButton(false);
    }
    for (const [, value] of Object.entries(e.target.files)) {
      modalBodyFilesArray.push(value.name);
    }
    setModalBodyFileList(modalBodyFilesArray);
  };

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
            <form action="" method="post" onSubmit={handleFormSubmit}>
              <FormControl>
                <Text
                  bg="#F6EBEB"
                  resize={"none"}
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
                <Box>
                  {modalBodyFileList?.map((element, index) => {
                    return (
                      <FileItem
                        key={`${element}_${index}`}
                        fileName={element}
                      />
                    );
                  })}
                </Box>
                <Text ml="20px" fontSize={"xs"} mt="50px">
                  Published on 20-06-2022 03:16 PM
                </Text>
                <Divider height="1px" w="95%" mx="auto" bg="#B0B2B6" />
                <Flex w="95%" mx="auto" mt="10px" justifyContent={"flex-end"}>
                  <FormLabel
                    htmlFor="filesAttachment"
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
                    name="filesAttachment"
                    display="none"
                    onChange={onFileUpload}
                  />
                  <Box
                    as="button"
                    w="130px"
                    h="28px"
                    borderRadius="12px"
                    bg="#1C80DD"
                    color="white"
                    type="submit"
                    transition={"all 0.2s ease"}
                    disabled={disableSubmitButton}
                    _disabled={{
                      cursor:"not-allowed",
                      opacity:"0.5",
                    }}
                    _hover={{
                      color: "#1c80DD",
                      bg: "#fff",
                      border: "1px solid gray",
                    }}
                  >
                    Submit
                  </Box>
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
              </FormControl>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UploadModal;
