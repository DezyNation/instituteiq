import React from 'react'
import Layout from '../layout'
import {
    HStack,
    VStack,
    Button,
    TableContainer,
    Table,
    Thead,
    Tr,
    Td,
    Tbody,
    Box,
    Text,
    FormControl,
    FormLabel,
    Input,
    Select,
    Textarea,
} from '@chakra-ui/react'
import { FaPaperPlane } from 'react-icons/fa'
import { BsFillCalendarWeekFill, BsPenFill, BsQuestionCircle } from 'react-icons/bs'

const LeaveManagement = () => {
    return (
        <>
            <Layout pageTitle={'Leave Management'}>
                <HStack
                    alignItems={'flex-start'}
                    justifyContent={'space-between'}>
                    <Box>
                        <Box p={2} bg={'aqua'} rounded={16}>
                            <Text p={2}>My Leaves</Text>

                            <TableContainer pt={4}>
                                <Table size={'sm'} fontSize={'xs'}>
                                    <Thead color={'facebook.700'}>
                                        <Tr>
                                            <Td>Leave Type</Td>
                                            <Td>From Date</Td>
                                            <Td>To Date</Td>
                                            <Td>Status</Td>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        <Tr>
                                            <Td>Vrindavan Leave</Td>
                                            <Td>23-03-23</Td>
                                            <Td>28-12-23</Td>
                                            <Td>
                                                <HStack spacing={4}>
                                                    <Text>Pending</Text>
                                                    <Button size={'sm'} bg={'white'}>Cancel</Button>
                                                </HStack>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Box>
                    <Box
                        w={'xs'}
                        p={4} h={'85vh'}
                        borderLeft={'1px solid #666'}
                    >
                        <Text fontSize={'lg'} pb={4}>New Application</Text>
                        <VStack spacing={4} w={'full'}>
                            <HStack w={'full'} justifyContent={'flex-start'}>
                                <Box
                                    boxSize={8}
                                    bg={'facebook.600'}
                                    display={'grid'}
                                    placeContent={'center'}
                                    rounded={8} color={'white'}
                                >
                                    <FaPaperPlane />
                                </Box>
                                <Select
                                    placeholder='Leave Type'
                                >
                                    <option value="Vrindavan"></option>
                                </Select>
                            </HStack>

                            <HStack w={'full'} justifyContent={'flex-start'}>
                                <Box
                                    boxSize={8}
                                    bg={'facebook.600'}
                                    display={'grid'}
                                    placeContent={'center'}
                                    rounded={8} color={'white'}
                                >
                                    <BsQuestionCircle />
                                </Box>
                                <Input
                                    placeholder='Reason'
                                />
                            </HStack>

                            <HStack w={'full'} justifyContent={'flex-start'}>
                                <Box
                                    boxSize={8}
                                    bg={'facebook.600'}
                                    display={'grid'}
                                    placeContent={'center'}
                                    rounded={8} color={'white'}
                                >
                                    <BsFillCalendarWeekFill />
                                </Box>
                                <HStack spacing={4} alignItems={'center'}>
                                    <HStack alignItems={'center'} spacing={0}>
                                        <FormLabel fontSize={'xs'}>From</FormLabel>
                                        <Input type={'date'} p={2} w={'16'} rounded={8} borderColor={'#666'} />
                                    </HStack>
                                    <HStack alignItems={'center'} spacing={1}>
                                        <FormLabel fontSize={'xs'}>To</FormLabel>
                                        <Input type={'date'} p={2} w={'16'} rounded={8} borderColor={'#666'} />
                                    </HStack>
                                </HStack>
                            </HStack>
                            <HStack w={'full'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                                <Box
                                    boxSize={8}
                                    bg={'facebook.600'}
                                    display={'grid'}
                                    placeContent={'center'}
                                    rounded={8} color={'white'}
                                >
                                    <BsPenFill />
                                </Box>
                                <Textarea
                                    h={24} resize={'none'}
                                    placeholder={'Description'}
                                >

                                </Textarea>
                            </HStack>

                            <Box w={'full'} h={28}>

                            </Box>
                            <Button colorScheme={'facebook'} w={'full'}>Apply for 2 days</Button>
                        </VStack>
                    </Box>
                </HStack>
            </Layout>
        </>
    )
}

export default LeaveManagement