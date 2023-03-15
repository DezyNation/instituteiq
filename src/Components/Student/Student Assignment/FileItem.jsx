import { CloseIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useFilesProvider } from "./FilesProvider";

const FileItem = ({ fileName }) => {
  const [filesToBeUploaded, , handleDeleteItem] = useFilesProvider();

  const handleRemove = (e) => {
    const clickedFileName = e.target.parentElement.children[0].innerText;

    {
      filesToBeUploaded &&
        Object.entries(filesToBeUploaded).map((fileElement, index) => {
          if (fileElement[1].name == clickedFileName) handleDeleteItem(index);
        });
    }
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
