import React from 'react'
import { HStack, Box, Show, Spacer, Text } from '@chakra-ui/react'
import { BsTelephoneFill } from 'react-icons/bs'
import { VscMortarBoard } from 'react-icons/vsc'
import { FaBell, FaUserCircle } from 'react-icons/fa'

const Topbar = ({ pageTitle }) => {
    return (
        <>
            <HStack p={4} bg={'white'}>
                <Text textTransform={'capitalize'} fontSize={'xl'} fontWeight={'medium'}>{pageTitle}</Text>
                <Spacer />
                <HStack spacing={6}>
                    <Box 
                    boxSize={6} 
                    display={'grid'} 
                    placeContent={'center'} 
                    bg={'rgb(53,211,152)'} 
                    color={'white'}
                    rounded={'full'}
                    >
                        <BsTelephoneFill fontSize={12} />
                    </Box>
                    <VscMortarBoard color='rgb(55,211,52)' fontSize={'1.75rem'} />
                    <Box position={'relative'}>
                        <FaBell fontSize={'1.25rem'} color={'#555'} />
                        <Box position={'absolute'} top={0} right={0} boxSize={2} rounded={'full'} bg={'red'} border={'1px'} borderColor={'white'}></Box>
                    </Box>
                    <FaUserCircle fontSize={'1.5rem'} />
                </HStack>
            </HStack>
        </>
    )
}

export default Topbar