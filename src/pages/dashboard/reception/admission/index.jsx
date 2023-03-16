import React from 'react'
import {
    Stack,
    HStack,
    VStack,
    Box,
    Text,
    Spacer,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    Select,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
    Drawer,
    DrawerOverlay,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    useDisclosure,
    Show,
} from '@chakra-ui/react'
import Layout from '../layout'
import { BsDownload, BsPlusLg, BsSearch } from 'react-icons/bs'

const Admission = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Layout pageName={'Admissions'}>
                <HStack>
                    <Text fontSize={'2xl'} color={'#333'}>Admissions</Text>
                    <Spacer />
                    <Button
                        rounded={'full'}
                        colorScheme={'facebook'}
                        leftIcon={<BsPlusLg />}
                        iconSpacing={3}
                        fontWeight={'normal'}
                        onClick={onOpen}
                    >
                        New Admission
                    </Button>
                </HStack>
                <HStack py={6} spacing={8} alignItems={'flex-end'}>
                    <FormControl w={['full', '64']}>
                        <InputGroup rounded={'full'}>
                            <InputLeftAddon children={<BsSearch />} roundedLeft={'full'} />
                            <Input placeholder='Search' name='search' rounded={'full'} bg={'#EDF2F7'} />
                        </InputGroup>
                    </FormControl>
                    <VStack alignItems={'flex-start'} justifyContent={'flex-start'}>
                        <Text fontSize={'sm'} color={'#555'}>Filters</Text>
                        <HStack spacing={8}>
                            <FormControl w={['full', '64']}>
                                <HStack spacing={1} alignItems={'flex-end'}>
                                    <FormLabel fontSize={'sm'}>Class</FormLabel>
                                    <Select name='class' placeholder='Select' bg={'white'} rounded={'full'}>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Select>
                                </HStack>
                            </FormControl>
                            <FormControl w={['full', '64']}>
                                <HStack spacing={1} alignItems={'flex-end'}>
                                    <FormLabel fontSize={'sm'}>Section</FormLabel>
                                    <Select name='section' placeholder='Select' bg={'white'} rounded={'full'}>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Select>
                                </HStack>
                            </FormControl>
                            <FormControl w={['full', '64']}>
                                <HStack spacing={1} alignItems={'flex-end'}>
                                    <FormLabel fontSize={'sm'}>Date</FormLabel>
                                    <Input type={'date'} name={'date'} bg={'white'} rounded={'full'} />
                                </HStack>
                            </FormControl>
                        </HStack>
                    </VStack>
                </HStack>
                {/* <Box py={6}>
                    <Text fontSize={'xl'} fontWeight={'medium'}>View Attendance</Text>
                    <Text fontSize={'sm'} color={'#444'}>Student's Directory</Text>
                </Box> */}
                <VStack py={6} spacing={4}>
                    <HStack
                        w={'full'} spacing={6}
                        py={2} fontSize={'sm'}
                        bg={'#4B4A4C'} color={'white'}
                        roundedTop={'24'} px={6}
                        justifyContent={'space-between'}
                    >
                        <Text flex={1} textAlign={'center'}>Sl. No.</Text>
                        <Text flex={1} textAlign={'center'}>Student Name</Text>
                        <Text flex={1} textAlign={'center'}>Class</Text>
                        <Text flex={1} textAlign={'center'}>Section</Text>
                        <Text flex={1} textAlign={'center'}>Roll No</Text>
                        <Text flex={1} textAlign={'center'}>Phone Number</Text>
                        <Text flex={1} textAlign={'center'}>Status</Text>
                    </HStack>
                    <Stack
                        direction={['column', 'row']}
                        spacing={6} p={4} bg={'white'}
                        rounded={12} border={'1px'}
                        borderColor={'rgba(0,0,0,0.2)'}
                        boxShadow={'base'} w={'full'}
                        justifyContent={'space-between'}
                        fontSize={'sm'} px={6}
                    >
                        <VStack flex={[0, 1]}>
                            <Show below={'md'}><Text>Sl. No.</Text></Show>
                            <Text>1</Text>
                        </VStack>
                        <VStack flex={[0, 1]}>
                            <Show below={'md'}><Text>Student Name</Text></Show>
                            <Text>Sangam Kumar</Text>
                        </VStack>
                        <VStack flex={[0, 1]}>
                            <Show below={'md'}><Text>Class</Text></Show>
                            <Text>8</Text>
                        </VStack>
                        <VStack flex={[0, 1]}>
                            <Show below={'md'}><Text>Section</Text></Show>
                            <Text>A</Text>
                        </VStack>
                        <VStack flex={[0, 1]}>
                            <Show below={'md'}><Text>Roll No</Text></Show>
                            <Text>202321</Text>
                        </VStack>
                        <VStack flex={[0, 1]}>
                            <Show below={'md'}><Text>Phone Number</Text></Show>
                            <Text>7838074742</Text>
                        </VStack>
                        <VStack flex={[0, 1]}>
                            <Show below={'md'}><Text>Attendance</Text></Show>
                            <Text color={'green.400'}>Fee Pending</Text>
                        </VStack>
                    </Stack>
                </VStack>


                {/* Attendance Drawer */}
                <Drawer
                    placement='right'
                    size={['full', 'lg']}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader>
                            <Text color={'#345F85'}>Add Student</Text>
                            <DrawerCloseButton />
                        </DrawerHeader>
                        <DrawerBody>
                            <Box p={4}>
                                <HStack py={2}>
                                    <Text>Bulk Upload</Text>
                                    <Spacer />
                                    <HStack color={'twitter.600'}>
                                        <Text>Download Sample</Text>
                                        <BsDownload />
                                    </HStack>
                                </HStack>
                                <VStack
                                    w={'full'} h={12}
                                    bg={'#F4F2FA'} p={12}
                                    justifyContent={'center'}
                                >
                                    <Text color={'#888'}>Drop your file here or click to upload</Text>
                                </VStack>
                            </Box>
                            <hr />
                            <HStack
                                justifyContent={'center'}
                                p={2} color={'#666'}
                            >
                                <Text>Or enter manually</Text>
                            </HStack>
                            <VStack
                                mt={8} spacing={4}
                            >
                                <Accordion w={'full'} allowMultiple allowToggle>

                                    <AccordionItem border={'none'}>
                                        <AccordionButton >
                                            <HStack
                                                justifyContent={'space-between'}
                                                p={2} bg={'#F4F2FA'} rounded={8}
                                                w={'full'}
                                            >
                                                <Text>Basic Details</Text>
                                                <AccordionIcon />
                                            </HStack>
                                        </AccordionButton>
                                        <AccordionPanel>

                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem border={'none'}>
                                        <AccordionButton >
                                            <HStack
                                                justifyContent={'space-between'}
                                                p={2} bg={'#F4F2FA'} rounded={8}
                                                w={'full'}
                                            >
                                                <Text>Address Details</Text>
                                                <AccordionIcon />
                                            </HStack>
                                        </AccordionButton>
                                        <AccordionPanel>

                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem border={'none'}>
                                        <AccordionButton >
                                            <HStack
                                                justifyContent={'space-between'}
                                                p={2} bg={'#F4F2FA'} rounded={8}
                                                w={'full'}
                                            >
                                                <Text>Parents' Details</Text>
                                                <AccordionIcon />
                                            </HStack>
                                        </AccordionButton>
                                        <AccordionPanel>

                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem border={'none'}>
                                        <AccordionButton >
                                            <HStack
                                                justifyContent={'space-between'}
                                                p={2} bg={'#F4F2FA'} rounded={8}
                                                w={'full'}
                                            >
                                                <Text>Guardian's Details</Text>
                                                <AccordionIcon />
                                            </HStack>
                                        </AccordionButton>
                                        <AccordionPanel>

                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem border={'none'}>
                                        <AccordionButton >
                                            <HStack
                                                justifyContent={'space-between'}
                                                p={2} bg={'#F4F2FA'} rounded={8}
                                                w={'full'}
                                            >
                                                <Text>Additional Details</Text>
                                                <AccordionIcon />
                                            </HStack>
                                        </AccordionButton>
                                        <AccordionPanel>

                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem border={'none'}>
                                        <AccordionButton >
                                            <HStack
                                                justifyContent={'space-between'}
                                                p={2} bg={'#F4F2FA'} rounded={8}
                                                w={'full'}
                                            >
                                                <Text>Previous School Details</Text>
                                                <AccordionIcon />
                                            </HStack>
                                        </AccordionButton>
                                        <AccordionPanel>

                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem border={'none'}>
                                        <AccordionButton >
                                            <HStack
                                                justifyContent={'space-between'}
                                                p={2} bg={'#F4F2FA'} rounded={8}
                                                w={'full'}
                                            >
                                                <Text>Upload Documents</Text>
                                                <AccordionIcon />
                                            </HStack>
                                        </AccordionButton>
                                        <AccordionPanel>

                                        </AccordionPanel>
                                    </AccordionItem>

                                </Accordion>
                            </VStack>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button colorScheme={'twitter'}>Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </Layout>
        </>
    )
}

export default Admission