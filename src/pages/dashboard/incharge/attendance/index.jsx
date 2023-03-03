import React from 'react'
import Layout from '../layout'
import {
  HStack,
  VStack,
  Box,
  Text,
  Accordion,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <Layout pageTitle={'Manage Attendance'}>
        <HStack alignItems={'flex-start'} spacing={4}>
          <VStack minW={'64'}>
            <Accordion w={'full'} allowToggle allowMultiple>
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
                      <AccordionPanel px={0}>
                        <Button
                          rightIcon={<BsChevronRight />}
                          w={'full'} mb={2} fontWeight={'medium'}
                          colorScheme={'teal'} bg={'rgb(80,120,150)'}
                          justifyContent={'space-between'}
                        >
                          Section A
                        </Button>
                        <Button
                          rightIcon={<BsChevronRight />}
                          w={'full'} mb={2} fontWeight={'medium'}
                          colorScheme={'teal'} bg={'rgb(80,120,150)'}
                          justifyContent={'space-between'}
                        >
                          Section B
                        </Button>
                        <Link href={'#'} style={{ width: '100%' }}>
                          <Text color={'twitter.500'} textAlign={'center'} mt={2}>
                            + Add new section
                          </Text>
                        </Link>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                </AccordionPanel>
              </AccordionItem>


            </Accordion>
          </VStack>

          <Box w={'full'}>

            <Text
              p={2} bg={'white'}
              fontWeight={'medium'}
            >
              Class 12 - A
            </Text>

            <Box
              w={'full'} p={2}
              bg={'white'} my={4}
            >
              <Text>
                Manage class teacher, attendance for 12-A
              </Text>
              <Text fontSize={'xs'} color={'#666'} mb={4}>
                Class teacher is responsible for day to day activities of the class
              </Text>
              <hr />
              <Link href={'#'}>
                <Text color={'twitter.500'} pt={4}>+ Add class teacher</Text>
              </Link>
            </Box>

            <Box
              w={'full'} p={2}
              bg={'white'} my={4}
            >
              <Text>
                Manage subjects for 12-A
              </Text>
              <Text fontSize={'xs'} color={'#666'} mb={4}>
                Add/remove subjects for the class and assign teachers to respective subjects
              </Text>

              <TableContainer>
                <Table variant='simple'>
                  <TableCaption placement='bottom'><Link href={'#'}><Text color={'twitter.500'}>+Add Subject</Text></Link></TableCaption>
                  <Thead bg={'rgba(35, 85, 120, 0.8)'}>
                    <Tr>
                      <Th color={'white'}>subject</Th>
                      <Th color={'white'}>type</Th>
                      <Th color={'white'}>teacher</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>English</Td>
                      <Td>Compulsory</Td>
                      <Td><Link href={'#'}><Text color={'twitter.500'}>Assign</Text></Link></Td>
                    </Tr>
                    <Tr>
                      <Td>English</Td>
                      <Td>Compulsory</Td>
                      <Td><Link href={'#'}><Text color={'twitter.500'}>Assign</Text></Link></Td>
                    </Tr>
                    <Tr>
                      <Td>English</Td>
                      <Td>Compulsory</Td>
                      <Td><Link href={'#'}><Text color={'twitter.500'}>Assign</Text></Link></Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Box
              w={'full'} p={2}
              bg={'white'} my={4}
            >
              <Text>
                Manage students for 12-A
              </Text>
              <Text fontSize={'xs'} color={'#666'} mb={4}>
                Add or remove students for the class
              </Text>
              <hr />
              <Link href={'#'}>
                <Text color={'twitter.500'} pt={4}>+ Add students</Text>
              </Link>
            </Box>
          </Box>
        </HStack>
      </Layout>
    </>
  )
}

export default Index