import {
    VStack,
    Text,
    Image,
    HStack,
    Box
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'


const Sidebar = ({SidebarOptions}) => {
    return (
        <>
            <Box py={8} px={4} h={'100vh'} bg={'rgb(17,24,39)'} flex={2} color={'white'} overflowY={'scroll'}>
                <Text textAlign={'center'} fontWeight={'medium'}>School Name</Text>
                <VStack py={6} spacing={0}>
                    <Image src={'https://picsum.photos/100'} alt={'User Name'} rounded={'full'} />
                    <Text fontSize={'lg'} fontWeight={'medium'}>User Name</Text>
                    <Text fontSize={'sm'}>Class Teacher</Text>
                </VStack>
                <VStack py={6} spacing={6} alignItems={'flex-start'} justifyContent={'flex-start'}>
                    {
                        SidebarOptions.map((option, key) => {
                            return (
                                <Link style={{ width: '100%' }} href={option.link} key={key}>
                                    <HStack spacing={2} w={'full'} justifyContent={'flex-start'} color={'aqua'} _hover={{color: 'white'}}>
                                        {option.icon}
                                        <Text textTransform={'capitalize'} fontSize={15}>{option.text}</Text>
                                    </HStack>
                                </Link>
                            )
                        })
                    }
                </VStack>
            </Box>
        </>
    )
}

export default Sidebar