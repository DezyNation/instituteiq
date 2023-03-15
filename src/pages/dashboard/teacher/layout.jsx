import React from 'react'
import Head from 'next/head'
import Sidebar from '@/Components/Global/Sidebar'
import Topbar from '@/Components/Global/Topbar'
import {
    HStack,
    Box,
    Text
} from '@chakra-ui/react'
import {
    BsGrid,
    BsJournalBookmark,
    BsCalendarEvent,
    BsSpeedometer,
    BsSnow3,
    BsFileEarmarkCheck,
    BsWallet
} from 'react-icons/bs'
import { FaUserCog, FaUserClock, FaUserGraduate } from 'react-icons/fa'

const Layout = ({ pageTitle, children }) => {

    const SidebarOptions = [
        {
            text: "dashboard",
            link: "/dashboard/teacher/class-teacher/",
            icon: <BsGrid fontSize={20} />
        },
        {
            text: "student performance",
            link: "/dashboard/teacher/class-teacher/",
            icon: <FaUserGraduate />
        },
        {
            text: "student attendance",
            link: "/dashboard/teacher/class-teacher/student-attendance",
            icon: <FaUserClock fontSize={20} />
        },
        {
            text: "student info",
            link: "/dashboard/teacher/class-teacher/",
            icon: <FaUserCog fontSize={20} />
        },
        {
            text: "curriculum progress",
            link: "/dashboard/teacher/class-teacher/",
            icon: <BsJournalBookmark fontSize={20} />
        },
        {
            text: "leave application",
            link: "/dashboard/teacher/class-teacher/",
            icon: <BsCalendarEvent fontSize={20} />
        },
    ]
    return (
        <>
            <Head><title>{`institute IQ ${pageTitle}`}</title></Head>
            <HStack justifyContent={'flex-start'} spacing={0}>
                <Sidebar SidebarOptions={SidebarOptions} />
                <Box flex={10} h={'100vh'} overflowY={'scroll'}>
                    <Topbar pageTitle={pageTitle} />
                    <Box bg={'#F8FAFA'} p={4} h={'full'}>
                        {children}
                    </Box>
                </Box>
            </HStack>
        </>
    )
}

export default Layout