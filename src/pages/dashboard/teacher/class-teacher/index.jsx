import React from 'react'
import Layout from '../layout'
import {
    Stack,
    HStack,
    Box,
    Text,
} from '@chakra-ui/react'
import Card from '@/Components/Card'
import {
    HiOutlineUsers,
    HiOutlineChartPie,
    HiOutlinePresentationChartLine,
} from 'react-icons/hi2'
import { IoCalendarOutline } from 'react-icons/io5'
import { Chart as Chartjs, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

Chartjs.register(ArcElement, Tooltip, Legend)

const Index = () => {
    const attendanceChartData = {
        labels: ['Present', 'Absent'],
        datasets: [{
            label: "Staff Attendance",
            data: [80, 20],
            backgroundColor: [
                'rgb(61, 207, 79)',
                'rgb(241, 135, 80)',
            ]
        }]
    }
    const curriculumChartData = {
        labels: ['Finished', 'Pending'],
        datasets: [{
            label: "Curriculum Progress",
            data: [65, 35],
            backgroundColor: [
                'rgb(61, 207, 79)',
                'rgb(241, 135, 80)',
            ]
        }]
    }

    const doughnutOptions = {
        cutout: 70,
    }

    return (
        <>
            <Layout pageTitle={'Class Teacher'}>
                <Box bg={'#F8FAFA'} p={4} h={'inherit'}>
                    <Stack
                        direction={['column', 'row']}
                        spacing={6} py={6}
                        justifyContent={['center', 'space-between']}
                    >
                        <Card color={'#27577C'} icon={<HiOutlineUsers fontSize={28} />} text={'No. of Students'} data={'226/500'} />
                        <Card color={'#27577C'} icon={<HiOutlineChartPie fontSize={28} />} text={'No. of Staff'} data={'36'} />
                        <Card color={'#27577C'} icon={<IoCalendarOutline fontSize={28} />} text={'Overall Attendance'} data={'36'} />
                        <Card color={'#27577C'} icon={<HiOutlinePresentationChartLine fontSize={28} />} text={'Overall Performance'} data={'36'} />
                    </Stack>
                    <Stack
                        direction={['column', 'row']}
                        spacing={6} py={6}
                        justifyContent={'space-between'}
                    >
                        <Box
                            boxSize={'xs'}
                            bg={'#F4F2FA'}
                            rounded={16}
                            p={4}
                        >
                            <Text mb={6}>Staff Attendance</Text>
                            <Box w={'full'} h={'56'} marginX={'auto'} display={'grid'} placeContent={'center'}>
                                <Doughnut
                                    data={attendanceChartData}
                                    options={doughnutOptions}
                                />
                            </Box>
                        </Box>
                        <Box
                            boxSize={'xs'}
                            bg={'#F4F2FA'}
                            rounded={16}
                            p={4}
                        >
                            <Text mb={6}>Curriculum Progress</Text>
                            <Box w={'full'} h={'56'} marginX={'auto'} display={'grid'} placeContent={'center'}>
                                <Doughnut
                                    data={curriculumChartData}
                                    options={doughnutOptions}
                                />
                            </Box>
                        </Box>
                    </Stack>
                </Box>
            </Layout>
        </>
    )
}

export default Index