import React from 'react'
import Layout from '../layout'
import {
    HStack,
    VStack,
    Accordion,
    AccordionIcon,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Text,
    Box,
    Button,
    Stack,
    Show,
    Select
} from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'

const Index = () => {
    return (
        <>
            <Layout pageTitle={'Exam Management'}>
                <HStack alignItems={'flex-start'} spacing={4} w={'full'}>
                    <VStack minW={'64'}>
                        <Accordion w={'full'} allowToggle>
                            <AccordionItem border={'none'} mb={2}>

                                <AccordionButton
                                    border={'1px'}
                                    borderColor={'#DDD'}
                                    bg={'#FFF'} rounded={8}
                                >
                                    <Box as="span" flex='1' textAlign='left'>
                                        Secondary
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel px={0}>

                                    {/* Child Accordion */}
                                    <Accordion defaultIndex={[]} allowToggle>
                                        <AccordionItem border={'none'}>
                                            <AccordionButton
                                                border={'1px'}
                                                borderColor={'#DDD'}
                                                bg={'#FFF'} rounded={8}
                                            >
                                                <Box as="span" flex='1' textAlign='left'>
                                                    Class 11
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel>
                                                <Button
                                                    rightIcon={<BsChevronRight />} size={'sm'}
                                                    w={'full'} mb={2} fontWeight={'medium'}
                                                    colorScheme={'twitter'} bg={'twitter.500'}
                                                    justifyContent={'space-between'}
                                                >
                                                    Section A
                                                </Button>
                                                <Button
                                                    rightIcon={<BsChevronRight />} size={'sm'}
                                                    w={'full'} mb={2} fontWeight={'medium'}
                                                    colorScheme={'twitter'} bg={'twitter.500'}
                                                    justifyContent={'space-between'}
                                                >
                                                    Section B
                                                </Button>

                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>

                                </AccordionPanel>
                            </AccordionItem>

                        </Accordion>
                    </VStack>

                    <Box w={'full'}>
                        <HStack px={8} pb={8} justifyContent={'flex-start'}>
                            <Text fontSize={'2xl'}>Exam Management</Text>
                        </HStack>
                        <Accordion allowToggle>
                            <AccordionItem border={'none'}>
                                <AccordionButton>
                                    <Box
                                        border={'1px solid #DDD'}
                                        borderLeft={'6px'} px={4}
                                        bg={'#FFF'} rounded={8}
                                        position={'relative'}
                                        overflow={'hidden'} py={2}
                                        w={'full'}
                                    >
                                        <Box position={'absolute'} top={0} left={0} w={3} h={'28'} bg={'twitter.400'}></Box>
                                        <HStack w={'full'} justifyContent={'space-between'}>
                                            <Box textAlign={'left'} pl={4}>
                                                <Text fontSize={'lg'} fontWeight={'medium'}>Assessment 1</Text>
                                                <Text fontSize={'sm'}>21 Jan 2023 - 12 Feb 2023</Text>
                                            </Box>
                                            {/* <HStack spacing={4}>
                                                <VStack spacing={1}>
                                                    <Button
                                                        size={'xs'}
                                                        colorScheme={'facebook'}
                                                    >Declare Result</Button>
                                                    <Text
                                                        fontSize={'xs'}
                                                        textTransform={'capitalize'}
                                                    >Status - Ongoing</Text>
                                                </VStack>
                                            </HStack> */}
                                        </HStack>
                                    </Box>
                                </AccordionButton>
                                <AccordionPanel px={16}>
                                    <VStack py={6} spacing={0}>
                                        <HStack
                                            w={'full'} spacing={6}
                                            py={2} fontSize={'sm'}
                                            bg={'#25557D'} color={'white'}
                                            roundedTop={'24'} px={6}
                                            justifyContent={'space-between'}
                                        >
                                            <Text flex={1} textAlign={'center'}>Sl. No.</Text>
                                            <Text flex={1} textAlign={'center'}>Date</Text>
                                            <Text flex={1} textAlign={'center'}>Time</Text>
                                            <Text flex={1} textAlign={'center'}>Subject</Text>
                                        </HStack>
                                        <Stack
                                            direction={['column', 'row']}
                                            spacing={6} py={2} bg={'white'}
                                            border={'1px'} px={6}
                                            borderColor={'rgba(0,0,0,0.2)'}
                                            w={'full'} fontSize={'sm'}
                                            justifyContent={'space-between'}
                                        >
                                            <VStack flex={[0, 1]}>
                                                <Show below={'md'}><Text>Sl. No.</Text></Show>
                                                <Text>1</Text>
                                            </VStack>
                                            <VStack flex={[0, 1]}>
                                                <Show below={'md'}><Text>Date</Text></Show>
                                                <Text>21 Jan 2023</Text>
                                            </VStack>
                                            <VStack flex={[0, 1]}>
                                                <Show below={'md'}><Text>Time</Text></Show>
                                                <Text>09:00</Text>
                                            </VStack>
                                            <VStack flex={[0, 1]}>
                                                <Show below={'md'}><Text>Subject</Text></Show>
                                                <Text>English</Text>
                                            </VStack>
                                        </Stack>
                                    </VStack>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </HStack>
            </Layout>
        </>
    )
}

export default Index