import React from 'react'
import Layout from '../layout'
import {
    HStack,
    VStack,
    Stack,
    Text,
    Button,
    Box,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    DrawerCloseButton,
    useDisclosure,
    RadioGroup,
    Radio,
    FormControl,
    FormLabel,
    Input,
    Textarea,
} from '@chakra-ui/react'
import { BsMegaphone } from 'react-icons/bs'

const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Layout pageTitle={'Circular Management'}>
                <HStack w={'full'} justifyContent={'space-between'}>
                    <Text fontSize={'lg'}>Circular Management</Text>
                    <VStack>
                        <Text>28 Feb 2023</Text>
                        <Button
                            size={'sm'}
                            leftIcon={'+'} bg={'white'}
                            colorScheme={'twitter'}
                            variant={'outline'}
                            rounded={'full'}
                        >
                            Create Circular
                        </Button>
                    </VStack>
                </HStack>
                <Box>
                    <Stack direction={['column', 'row']} p={8} gap={8} w={'full'}>
                        <HStack spacing={[2, 4]} w={'full'}>
                            <Text color={'twitter.500'}>Filter By: </Text>
                            <Button
                                size={'sm'} bg={'white'}
                                variant={'outline'}
                                fontWeight={'normal'}
                            >All</Button>
                            <Button
                                size={'sm'} bg={'white'}
                                variant={'outline'}
                                fontWeight={'normal'}
                            >Today</Button>
                            <Button
                                size={'sm'} bg={'white'}
                                variant={'outline'}
                                fontWeight={'normal'}
                            >Yesterday</Button>
                            <Button
                                size={'sm'} bg={'white'}
                                variant={'outline'}
                                fontWeight={'normal'}
                            >This Week</Button>
                        </HStack>
                        <HStack spacing={[2, 4]} w={'full'}>
                            <Text color={'twitter.500'}>Date Range: </Text>
                            <Input
                                type={'date'} w={'fit-content'}
                                name={'fromDate'}
                                placeholder={'From'}
                                bg={'white'} size={'sm'}
                                variant={'outline'}
                            />
                            <Text color={'twitter.500'}>To</Text>
                            <Input
                                type={'date'} w={'fit-content'}
                                name={'toDate'}
                                placeholder={'To'}
                                bg={'white'} size={'sm'}
                                variant={'outline'}
                            />
                        </HStack>
                    </Stack>

                    <VStack gap={6} p={8}>
                        <Box
                            w={'full'} p={4}
                            rounded={'12'}
                            bg={'white'}
                            boxShadow={'base'}
                        >
                            <HStack spacing={8}>
                                <Box>
                                    <HStack>
                                        <BsMegaphone />
                                        <Text fontSize={'lg'}>Circular Title</Text>
                                    </HStack>
                                    <Text noOfLines={2} pt={4}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Hic et, totam provident sunt veniam a fuga? A maiores,
                                        amet harum eius velit molestias odit voluptates inventore
                                        sed minus esse quod minima dolorem modi saepe dolore sunt!
                                        Aperiam atque totam ducimus exercitationem odio itaque
                                        aliquid, cupiditate, quaerat recusandae alias doloribus facere!
                                    </Text>
                                </Box>
                                <VStack spacing={6}>
                                    <Button
                                        w={'full'} onClick={onOpen}
                                        colorScheme={'facebook'}
                                        size={'sm'}>Edit</Button>
                                    <Button w={'full'} colorScheme={'facebook'} size={'sm'} variant={'outline'}>Delete</Button>
                                </VStack>
                            </HStack>
                        </Box>
                    </VStack>
                </Box>
            </Layout>

            {/* Circular Edit / Add Drawer */}
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                size={'lg'}
                placement={'right'}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <Text>Create New Circular</Text>
                        <DrawerCloseButton />
                    </DrawerHeader>
                    <DrawerBody>
                        <Box>
                            <Text>Show Circular To:</Text>
                            <RadioGroup name='circularAudience' py={2}>
                                <HStack spacing={6}>
                                    <Radio value={'students'}> Students</Radio>
                                    <Radio value={'teachers'}> Teachers</Radio>
                                    <Radio value={'all'}> All</Radio>
                                </HStack>
                            </RadioGroup>
                        </Box>
                        <FormControl py={4}>
                            <FormLabel>Circular Title</FormLabel>
                            <Input name={'circularTitle'} />
                        </FormControl>
                        <FormControl py={4}>
                            <FormLabel>Message</FormLabel>
                            <Textarea name={'circularMessage'} h={'24'} resize={'none'} />
                        </FormControl>
                        <FormControl py={4}>
                            <FormLabel
                                htmlFor={'circularAttachment'}
                                fontWeight={'medium'}
                                color={'twitter.500'}
                                cursor={'pointer'}
                            >+ Add Attachment</FormLabel>
                            <Input type={'file'} name={'circularAttachment'} display={'none'} />
                        </FormControl>
                    </DrawerBody>
                    <DrawerFooter>
                        <HStack spacing={6}>
                            <Button colorScheme={'facebook'}>Create Circular</Button>
                            <Button>Cancel</Button>
                        </HStack>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Index