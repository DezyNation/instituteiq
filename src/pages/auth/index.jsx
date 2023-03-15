import React, { useState, useEffect } from 'react'
import {
    Stack,
    Text,
    HStack,
    VStack,
    Spacer,
    Button,
    Box,
    Image,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    PinInput,
    PinInputField
} from '@chakra-ui/react'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import Link from 'next/link'
import Head from 'next/head'

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [passwordIcon, setPasswordIcon] = useState(<BsEyeFill />)

    useEffect(() => {
        passwordVisible ? setPasswordIcon(<BsEyeFill />) : setPasswordIcon(<BsEyeSlashFill />)
    }, [passwordVisible])

    return (
        <>
        <Head>
            <title>institute iQ | Login</title>
        </Head>
            <Text fontSize={'xl'} fontWeight={'semibold'} color={'#444'} p={4}>institute iQ</Text>
            <Stack
                p={4}
                w={'full'} minH={'100vh'}
                direction={['column', 'row']}
                alignItems={'center'}
                justifyContent={'space-around'}
            >
                <VStack>
                    <Image src={'/login.jpg'} w={['xs', 'lg']} />
                </VStack>
                <VStack
                    p={6} w={['xs', 'sm']}
                    bg={'blue.50'} border={'1px'}
                    borderColor={'blue.100'}
                    rounded={12}
                >
                    <Text fontSize={'2xl'} fontWeight={'medium'} pb={2}>Staff Login</Text>
                    <FormControl py={4}>
                        <FormLabel fontWeight={'normal'}>Email</FormLabel>
                        <Input type={'email'} bg={'white'} placeholder={'Enter your email'} />
                    </FormControl>
                    <FormControl pb={4}>
                        <FormLabel fontWeight={'normal'}>Password</FormLabel>
                        <InputGroup bg={'white'}>
                            <Input type={passwordVisible ? 'text' : 'password'} placeholder={'Enter password'} />
                            <InputRightElement
                                children={passwordIcon}
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                cursor={'pointer'}
                            />
                        </InputGroup>
                    </FormControl>
                    <Button bg={'white'} w={'full'} border={'1px'} borderColor={'#888'}>Send OTP</Button>

                    <VStack pt={6} w={'full'}>
                        <Text>Enter OTP</Text>

                        <HStack spacing={4} w={'full'} py={4} justifyContent={'center'}>
                            <PinInput otp>
                                <PinInputField bg={'white'} />
                                <PinInputField bg={'white'} />
                                <PinInputField bg={'white'} />
                                <PinInputField bg={'white'} />
                            </PinInput>
                        </HStack>
                        <Button colorScheme={'twitter'} w={'full'}>Login</Button>
                    </VStack>
                </VStack>
            </Stack>
        </>
    )
}

export default Login