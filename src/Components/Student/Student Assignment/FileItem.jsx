import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useFilesProvider } from "./FilesProvider";

const FileItem = ({ fileName }) => {
  const [modalBodyFileList, setModalBodyFileList] = useFilesProvider();

  const handleRemove = (e) => {
    // const indexOfElementToBeRemoved = modalBodyFileList.findIndex((element) => {
    //   return element === e.target.parentElement.children[0].innerText;
    // });

    setModalBodyFileList(
      modalBodyFileList.filter((element) => {
        return element != e.target.parentElement.children[0].innerText;
      })
    );
  };

  return (
    <Flex
      justifyContent={"space-between"}
      alignItems="center"
      mt="10px"
      bg="#cecece"
      w="96%"
      mx="auto"
      p="10px"
      px="15px"
      borderRadius={"10px"}
    >
      <Text>{fileName}</Text>
      <Button onClick={handleRemove}>X</Button>
    </Flex>
  );
};

export default FileItem;
