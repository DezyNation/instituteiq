import React, {useEffect} from 'react'
import Head from 'next/head'
import {
    Stack,
    Text,
    Box,
    VStack,
    HStack,
    Show,
    Image,
    Input,
} from '@chakra-ui/react'
import { BsSpeedometer, BsSearch } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'

const Sidenav = () => {

    useEffect(() => {
      
        // Fetching with API
    }, [])
    
    
    const SidenavItems = [
        {
            type: "link",
            text: "dashboard",
            icon: <BsSpeedometer fontSize={'1.25rem'} />,
            link: "/dashboard/student",
        },
        {
            type: "link",
            text: "fee section",
            icon: <BiRupee fontSize={'1.25rem'} />,
            link: "/dashboard/student",
        },
    ]
    return (
        <>
            <Box
                flex={3} bg={'#111827'} py={4} px={3}
                h={'100vh'} color={'white'} overflowY={'scroll'}
            >
                <HStack spacing={2} py={4}>
                    <Image src='https://picsum.photos/200' w={12} rounded={'full'} objectFit={'cover'} />
                    <Box>
                        <Text fontSize={'lg'} fontWeight={'semibold'}>John Doe</Text>
                        <Text fontSize={'xs'}>Reception</Text>
                    </Box>
                </HStack>
                <Box w={'full'} h={12}></Box>
                <VStack alignItems={'flex-start'}>
                    <HStack 
                    spacing={2} mb={4}
                    bg={'whiteAlpha.200'} px={3}
                    py={2} rounded={8} w={'full'}
                    color={'whiteAlpha.800'}
                    >
                        <BsSearch fontSize={'1.25rem'} />
                        <Input 
                        type={'search'} 
                        placeholder={'Search here...'} 
                        outline={'none'} border={'none'} 
                        p={0} bg={'transparent'} h={'auto'}
                        focusBorderColor={'transparent'}
                        />
                    </HStack>
                    {
                        SidenavItems.map((item, key) => {
                            if (item.type == "link") {
                                return (
                                    <HStack
                                        spacing={4}
                                        w={'full'}
                                        key={key}
                                        id={item.text}
                                        px={2} py={3}
                                        alignItems={'center'}
                                        justifyContent={'flex-start'}
                                        cursor={'pointer'}
                                        transition={'all .3s ease'}
                                        _hover={{ bg: "rgba(255,255,255,0.15)" }}
                                        rounded={8}
                                    >
                                        {item.icon}
                                        <Text textTransform={'capitalize'}>{item.text}</Text>
                                    </HStack>
                                )
                            }
                        })
                    }
                </VStack>
            </Box>
        </>
    )
}

const Layout = ({ children, pageName }) => {
    return (
        <>
            <Head><title>{`institute iQ | ${pageName}`}</title></Head>
            <Stack
                w={'full'} h={'100vh'}
                direction={['column', 'row']}
            >
                <Sidenav />
                <Box p={4} h={'full'} overflowY={'scroll'} flex={12}>
                    {children}
                </Box>
            </Stack>
        </>
    )
}

export default Layout