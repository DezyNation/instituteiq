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
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import { BsChevronRight } from 'react-icons/bs'

const Index = () => {
  return (
    <>
      <Layout pageTitle={'Curriculum Progress'}>
        <HStack alignItems={'flex-start'} spacing={4} w={'full'}>
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
                      <AccordionPanel>
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

                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>

                </AccordionPanel>
              </AccordionItem>

            </Accordion>
          </VStack>

          <Box w={'full'}>
            <Text fontSize={'2xl'} pl={8} pb={8}>Curriculum Progress</Text>
            <Accordion allowToggle>
              <AccordionItem border={'none'}>
                <AccordionButton>
                  <Box
                    border={'1px solid #DDD'}
                    borderLeft={'6px'} px={4}
                    bg={'#FFF'} rounded={8}
                    position={'relative'}
                    overflow={'hidden'} py={1}
                    w={'full'}
                  >
                    <Box position={'absolute'} top={0} left={0} w={3} h={'28'} bg={'green.400'}></Box>
                    <HStack w={'full'} justifyContent={'space-between'}>
                      <Box textAlign={'left'} pl={4}>
                        <Text fontSize={'lg'}>Chapter Name</Text>
                        <Text fontSize={'sm'}>Total Duration: 123456</Text>
                      </Box>
                      <HStack spacing={4}>
                        <VStack>
                          <CircularProgress value={84} color={'twitter.400'}>
                            <CircularProgressLabel fontWeight={'medium'}>84%</CircularProgressLabel>
                          </CircularProgress>
                          <Text fontSize={'xs'}>Progress</Text>
                        </VStack>
                      </HStack>
                    </HStack>
                  </Box>
                </AccordionButton>
                <AccordionPanel px={8}>
                  <Box
                    border={'1px solid #DDD'}
                    borderLeft={'6px'} px={4}
                    bg={'#FFF'} rounded={8}
                    position={'relative'}
                    overflow={'hidden'} py={1}
                    w={'full'}
                  >
                    <Box position={'absolute'} top={0} left={0} w={3} h={'28'} bg={'green.400'}></Box>
                    <HStack w={'full'} justifyContent={'space-between'} pl={16} py={2}>
                      <Text flex={1}>Topic Name</Text>
                      <Text flex={1}>2 hours</Text>
                      <Text flex={1}>Pending</Text>
                    </HStack>
                  </Box>
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