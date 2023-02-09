import Sidebar from '@/Components/Teacher/Sidebar'
import Topbar from '@/Components/Teacher/Topbar'
import {
    HStack,
    Box,
    Text
} from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'

const Layout = ({pageTitle, children}) => {
    return (
        <>
            <Head><title>{`institute IQ ${pageTitle}`}</title></Head>
            <HStack justifyContent={'flex-start'} spacing={0}>
                <Sidebar />
                <Box flex={10} h={'100vh'} overflowY={'scroll'}>
                    <Topbar pageTitle={pageTitle} />
                    {children}
                </Box>
            </HStack>
        </>
    )
}

export default Layout