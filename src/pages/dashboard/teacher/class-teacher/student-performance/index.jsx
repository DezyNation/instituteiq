import React from 'react'
import Layout from '../../layout'
import {
    HStack,
    VStack,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionIcon,
    AccordionPanel,
    Box,
    Text,
    Button,
    CircularProgress,
    CircularProgressLabel,
    Select,
} from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'

const Index = () => {
    return (
        <>
            <Layout pageTitle={'Student Performance'}>
                <HStack spacing={4} alignItems={'flex-start'}>
                    <VStack minW={'64'}>
                        <Accordion w={'full'} allowToggle allowMultiple>
                            <AccordionItem border={'none'} mb={2}>

                                <AccordionButton
                                    border={'1px solid #DDD'}
                                    bg={'#F6F6F6'} rounded={8}
                                >
                                    <HStack w={'full'} justifyContent={'space-between'}>
                                        <Box textAlign={'left'}>
                                            <Text fontSize={'lg'}>Class 5</Text>
                                            <Text fontSize={'sm'}>Total Capacity: 50</Text>
                                            <Text fontSize={'sm'}>Seats Left: 8</Text>
                                        </Box>
                                        <CircularProgress value={84} color={'green.400'} size={'20'}>
                                            <CircularProgressLabel fontSize={'md'}>84%</CircularProgressLabel>
                                        </CircularProgress>
                                    </HStack>
                                </AccordionButton>

                                <AccordionPanel px={0}>

                                    {/* Child Accordion */}

                                    <Box
                                        bg={'#F6F6F6'} p={4}
                                        border={'1px solid #DDD'}
                                        rounded={8}
                                    >
                                        <HStack w={'full'} justifyContent={'space-between'}>
                                            <Box textAlign={'left'}>
                                                <Text fontSize={'sm'}>Section A</Text>
                                                <Text fontSize={'xs'}>Capacity: 50</Text>
                                                <Text fontSize={'xs'}>Left: 8</Text>
                                            </Box>
                                            <CircularProgress value={84} color={'yellow.400'}>
                                                <CircularProgressLabel>84%</CircularProgressLabel>
                                            </CircularProgress>
                                        </HStack>
                                    </Box>

                                </AccordionPanel>
                            </AccordionItem>


                        </Accordion>
                    </VStack>
                    <VStack
                        w={'full'} pl={4}
                        borderLeft={['unset', '1px solid #DDD']}
                    >
                        <HStack w={'full'} justifyContent={'space-between'}>
                            <Text fontSize={'lg'}>Student Performance</Text>
                            <HStack spacing={4}>
                                <Text>Exam</Text>
                                <Select size={'sm'} bg={'white'}>
                                    <option value="Mid Semester">Mid Semester</option>
                                </Select>
                            </HStack>
                        </HStack>

                        <Accordion w={'full'} allowToggle allowMultiple>
                            <AccordionItem border={'none'} mb={2}>

                                <AccordionButton
                                    border={'1px solid #DDD'}
                                    borderLeft={'6px'}
                                    bg={'#FFF'} rounded={8}
                                    position={'relative'}
                                    overflow={'hidden'}
                                >
                                    <Box position={'absolute'} top={0} left={0} w={3} h={'28'} bg={'green.400'}></Box>
                                    <HStack w={'full'} justifyContent={'space-between'}>
                                        <Box textAlign={'left'} pl={4}>
                                            <Text fontSize={'lg'}>Sangam Kumar</Text>
                                            <Text fontSize={'sm'}>Roll No.: 123456</Text>
                                        </Box>
                                        <HStack>
                                            <Text>Overall Performance</Text>
                                            <CircularProgress value={84} color={'green.400'}>
                                                <CircularProgressLabel fontWeight={'medium'}>84%</CircularProgressLabel>
                                            </CircularProgress>
                                        </HStack>
                                    </HStack>
                                </AccordionButton>

                                <AccordionPanel px={0}>

                                    {/* Child Accordion */}

                                    <Box
                                        bg={'#FFF'} px={4} py={2}
                                        border={'1px solid #DDD'}
                                        rounded={8}
                                    >
                                        <HStack w={'full'} justifyContent={'space-between'}>
                                            <Text flex={1} fontSize={'sm'}>English</Text>
                                            <Text flex={1} fontSize={'sm'}>English wali ma'am</Text>
                                            <Text flex={1} fontSize={'sm'}>600/600</Text>
                                            <CircularProgress value={84} color={'yellow.400'}>
                                                <CircularProgressLabel>84%</CircularProgressLabel>
                                            </CircularProgress>
                                        </HStack>
                                    </Box>

                                </AccordionPanel>
                            </AccordionItem>


                        </Accordion>
                    </VStack>
                </HStack>
            </Layout>
        </>
    )
}

export default Index