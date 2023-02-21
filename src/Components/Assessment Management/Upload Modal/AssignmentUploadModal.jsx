import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";

const AssignmentUploadModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submitButton, setSubmitButton] = useState(true);
  const handleAddAssignmentSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <Box as="button" onClick={onOpen} {...props}>
        + Add an assignment
      </Box>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent p="20px" borderRadius="0px">
          <ModalHeader fontWeight={400} w="400px">
            Upload Assignment
          </ModalHeader>
          <ModalBody>
            <form action="#" method="" onSubmit={handleAddAssignmentSubmit}>
              <InputGroup display={"flex"} flexDirection="column">
                <FormLabel
                  htmlFor="assignmentInputTitle"
                  display={"block"}
                  fontWeight={400}
                >
                  Title :
                </FormLabel>
                <Input
                  display={"block"}
                  placeholder="Type here"
                  background="#FFFFFF"
                  border="1px solid #ABABAB"
                  boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
                  borderRadius="12px"
                />
                <FormLabel
                  mt="20px"
                  htmlFor="assignmentInputTitle"
                  display={"block"}
                  fontWeight={400}
                >
                  Description :
                </FormLabel>
                <Textarea
                  resize={"none"}
                  display={"block"}
                  rows="5"
                  placeholder="Type here"
                  background="#FFFFFF"
                  border="1px solid #ABABAB"
                  boxShadow="2px 2px 10px rgba(230, 246, 241, 0.25)"
                  borderRadius="12px"
                />
                <FormLabel color="#25557B" htmlFor="fileUpload" mt="15px">
                  +Attach a document
                </FormLabel>
                <Input
                  type="file"
                  border="0"
                  display={"none"}
                  id="fileUpload"
                />
                <Flex>
                  <Box mr="50px">
                    <FormLabel
                      display="inline"
                      color="#818181"
                      fontWeight={400}
                      mt="15px"
                    >
                      Due Date :
                    </FormLabel>
                    <Input
                      display={"inline"}
                      type="date"
                      background="#FFFFFF"
                      border="1px solid #A8A8A8"
                      borderRadius="6px"
                      p="10px"
                      w="100px"
                    />
                  </Box>
                  <Box>
                    <FormLabel
                      display="inline"
                      color="#818181"
                      fontWeight={400}
                      mt="15px"
                    >
                      Points :
                    </FormLabel>
                    <Input
                      w="40px"
                      p="5px"
                      display={"inline"}
                      type="number"
                      background="#FFFFFF"
                      border="1px solid #A8A8A8"
                      borderRadius="6px"
                    />
                  </Box>
                </Flex>
                {!submitButton && (
                  <>
                    <Text color="gray" fontSize={"lg"} mt="20px" mb="10px">
                      Schedule :{" "}
                    </Text>
                    <Flex>
                      <Box mr="50px">
                        <FormLabel
                          display="inline"
                          color="#818181"
                          fontWeight={400}
                          mt="15px"
                        >
                          Date :
                        </FormLabel>
                        <Input
                          display={"inline"}
                          type="date"
                          background="#FFFFFF"
                          border="1px solid #A8A8A8"
                          borderRadius="6px"
                          p="10px"
                          w="100px"
                        />
                      </Box>
                      <Box>
                        <FormLabel
                          display="inline"
                          color="#818181"
                          fontWeight={400}
                          mt="15px"
                        >
                          Time :
                        </FormLabel>

                        <Flatpickr
                          options={{
                            // inline: true,
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "H:i",
                          }}
                          className="assignmentModalTimePicker"
                        />
                      </Box>
                    </Flex>
                  </>
                )}
              </InputGroup>
              <Box mt="100px">
                <Box ml="auto" w="max-content">
                  <Box
                    alignItems="center"
                    h={"40px"}
                    display="inline-block"
                    w="max-content"
                    mr="10px"
                  >
                    <Button
                      // onClick={onClose}
                      h="100%"
                      border="1px solid #D1D5DB"
                      borderRadius="5px"
                      borderTopRightRadius={0}
                      borderBottomRightRadius={0}
                      borderRightStyle="none"
                      type="submit"
                      background="#25557B"
                      boxShadow="0px 1px 11px rgba(0, 0, 0, 0.09)"
                      color="white"
                      px="40px"
                      _hover={{ bg: "#25557B" }}
                    >
                      {submitButton && "Assign"}
                      {!submitButton && "Schedule"}
                    </Button>
                    <Button
                      borderRadius="5px"
                      borderTopLeftRadius={0}
                      borderBottomLeftRadius={0}
                      as="button"
                      h="100%"
                      border="1px solid #D1D5DB"
                      borderLeftStyle="none"
                      p="0"
                      background="#25557B"
                      boxShadow="0px 1px 11px rgba(0, 0, 0, 0.09)"
                      color="white"
                      onClick={() => setSubmitButton(!submitButton)}
                      _hover={{ bg: "#25557B" }}
                    >
                      <ChevronDownIcon />
                    </Button>
                  </Box>
                  <Button
                    onClick={onClose}
                    background="#FDFDFD"
                    border="1px solid #D1D5DB"
                    borderRadius="5px"
                  >
                    Cancel
                  </Button>
                </Box>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AssignmentUploadModal;
