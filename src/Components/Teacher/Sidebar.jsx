import {
    VStack,
    Text,
    Image,
    HStack,
    Box
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { 
    BsGrid, 
    BsJournalBookmark, 
    BsSpeedometer, 
    BsSnow3, 
    BsFileEarmarkCheck,
    BsWallet
} from 'react-icons/bs'
import { FaUsersCog } from 'react-icons/fa'

const SidebarOptions = [
    {
        text: "dashboard",
        link: "/dashboard/teacher/class-teacher/",
        icon: <BsGrid fontSize={20} />
    },
    {
        text: "management controls",
        link: "/dashboard/teacher/class-teacher/",
        icon: <BsSpeedometer fontSize={20} />
    },
    {
        text: "fee management",
        link: "/dashboard/teacher/class-teacher/",
        icon: <BsWallet fontSize={20} />
    },
    {
        text: "branch management",
        link: "/dashboard/teacher/class-teacher/",
        icon: <BsSnow3 fontSize={20} />
    },
    {
        text: "user management",
        link: "/dashboard/teacher/class-teacher/",
        icon: <FaUsersCog fontSize={20} />
    },
    {
        text: "lesson planner",
        link: "/dashboard/teacher/class-teacher/",
        icon: <BsJournalBookmark fontSize={20} />
    },
    {
        text: "exam management",
        link: "/dashboard/teacher/class-teacher/",
        icon: <BsFileEarmarkCheck fontSize={20} />
    },
]

const Sidebar = () => {
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
                                <Link style={{ width: '100%' }} href={option.link}>
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