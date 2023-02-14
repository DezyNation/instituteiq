import React from 'react'
import Layout from '../../layout'
import {
    HStack,
    VStack,
    Stack,
    Box,
    Show,
    Text,
    Spacer,
    Button,
    FormControl,
    FormLabel,
    InputGroup,
    Input,
    Switch,
    InputLeftAddon,
    Select,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    DrawerFooter,
    useDisclosure,
} from '@chakra-ui/react'
import { BsPlusLg, BsSearch } from 'react-icons/bs'

const Attendance = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Layout pageTitle={'Student Attendance'}>
                <HStack>
                    <Text fontSize={'2xl'} color={'#333'}>Attendance</Text>
                    <Spacer />
                    <Button
                        rounded={'full'}
                        colorScheme={'facebook'}
                        leftIcon={<BsPlusLg />}
                        iconSpacing={3}
                        fontWeight={'normal'}
                        onClick={onOpen}
                    >
                        Add/Edit Attendance
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
                <Box py={6}>
                    <Text fontSize={'xl'} fontWeight={'medium'}>View Attendance</Text>
                    <Text fontSize={'sm'} color={'#444'}>Student's Directory</Text>
                </Box>
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
                        <Text flex={1} textAlign={'center'}>Attendance</Text>
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
                            <Text>78xxxxxxxx42</Text>
                        </VStack>
                        <VStack flex={[0, 1]}>
                            <Show below={'md'}><Text>Attendance</Text></Show>
                            <Text color={'green.400'}>Present</Text>
                        </VStack>
                    </Stack>
                </VStack>
            </Layout>


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
                        <Text color={'#345F85'}>Take Attendance</Text>
                        <DrawerCloseButton />
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={4}>
                            <HStack spacing={4} w={'full'}>
                                <Box flex={1}>
                                    <Text fontSize={'sm'}>Class</Text>
                                    <Select name='class' placeholder='Select' bg={'white'} rounded={'full'}>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Select>
                                </Box>
                                <Box flex={1}>
                                    <Text fontSize={'sm'}>Section</Text>
                                    <Select name='section' placeholder='Select' bg={'white'} rounded={'full'}>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                    </Select>
                                </Box>
                            </HStack>
                            <HStack spacing={4} w={'full'}>
                                <Box flex={1}>
                                    <Text fontSize={'sm'}>Date</Text>
                                    <Input type={'date'} name={'date'} bg={'white'} rounded={'full'} />
                                </Box>
                                <Box flex={1}>
                                    <Text fontSize={'sm'}>Status</Text>
                                    <Text fontSize={'lg'}>Attendance Taken</Text>
                                </Box>
                            </HStack>
                        </VStack>
                        <VStack 
                        mt={8} p={6} rounded={16}
                        spacing={4} bg={'#F4F2FA'}
                        border={'1px'} minH={'sm'}
                        borderColor={'#C9C9C9'}
                        >
                            <HStack
                                w={'full'} spacing={6}
                                py={2} fontSize={'sm'}
                                bg={'#4B4A4C'} color={'white'}
                                roundedTop={'24'} px={6}
                                justifyContent={'space-between'}
                            >
                                <Text flex={1} textAlign={'center'}>Sl. No.</Text>
                                <Text flex={1} textAlign={'center'}>Student Name</Text>
                                <Text flex={1} textAlign={'center'}>Roll No</Text>
                                <Text flex={1} textAlign={'center'}>Attendance</Text>
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
                                    <Show below={'md'}><Text>Roll No</Text></Show>
                                    <Text>202321</Text>
                                </VStack>
                                <VStack flex={[0, 1]}>
                                    <Show below={'md'}><Text>Attendance</Text></Show>
                                    <Switch />
                                </VStack>
                            </Stack>
                        </VStack>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button colorScheme={'twitter'}>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Attendance