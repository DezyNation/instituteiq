import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const Card = ({ icon, color, text, data }) => {
    return (
        <>
            <Box
                position={'relative'} h={36}
                w={'22.5%'} p={4} bg={'white'}
                rounded={20} boxShadow={'lg'}
                display={'flex'} flexDir={'column'}
                alignItems={'flex-end'}
                justifyContent={'flex-end'}
            >
                <Box
                    pos={'absolute'}
                    top={'-6'} left={'6'}
                    w={20} h={14}
                    bg={color} color={'white'}
                    display={'grid'}
                    placeContent={'center'}
                    rounded={'inherit'}
                >
                    {icon}
                </Box>
                <Text
                    w={'full'} color={'#666'}
                    textAlign={'right'}
                    borderBottom={'1px'}
                    borderBottomColor={'#999'}
                    fontSize={'2xl'}
                >
                    {data}
                </Text>
                <Text w={'full'} color={'#555'} textAlign={'left'}>
                    {text}
                </Text>
            </Box>
        </>
    )
}

export default Card