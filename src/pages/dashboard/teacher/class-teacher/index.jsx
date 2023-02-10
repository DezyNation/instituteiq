import React from 'react'
import Layout from '../layout'
import {
    Stack,
    HStack,
    Box,
    Text,
    VStack,
    Badge,
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
import { BsPlusCircleFill } from 'react-icons/bs'

Chartjs.register(ArcElement, Tooltip, Legend)

export const ThreeColTable = ({ head, body, color }) => {
    return (
        <>
            <VStack w={'full'} pb={4} rounded={16} overflow={'hidden'} bg={'#F4F2FA'}>
                <HStack w={'full'} spacing={2} px={3} py={2} bg={color} color={'white'}>
                    {
                        head.map((item, key) => {
                            return (
                                <>
                                    <Text
                                        key={key}
                                        flex={1}
                                        textAlign={'center'}
                                        fontWeight={'semibold'}
                                        fontSize={'xs'}
                                        textTransform={'capitalize'}
                                    >
                                        {item}
                                    </Text>
                                </>
                            )
                        })
                    }
                </HStack>
                {
                    body.map((entry, key) => {
                        return (
                            <HStack w={'90%'} spacing={2} py={1} borderBottom={'1px'}>
                                <Text flex={1} textAlign={'center'} fontSize={'xs'}>{key + 1}</Text>
                                <Text flex={1} textAlign={'center'} fontSize={'xs'}>{entry.col2}</Text>
                                <Text flex={1} textAlign={'center'} fontSize={'xs'}>{entry.col3}</Text>
                            </HStack>
                        )
                    })
                }
            </VStack>
        </>
    )
}

const Index = () => {
    const attendanceChartData = {
        labels: ['Present', 'Absent'],
        datasets: [{
            label: "Staff Attendance",
            data: [80, 20],
            backgroundColor: [
                'rgb(61, 207, 79)',
                'rgb(241, 135, 80)',
            ],
            borderRadius: 30,
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
            ],
            borderRadius: 30,
        }]
    }

    const doughnutOptions = {
        cutout: 70,
    }

    const doughnutPlugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 100).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = "80%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]

    const absentStudents = [
        {
            col2: "Sangam Kumar",
            userId: 23,
            col3: "A",
        },
        {
            col2: "Sangam Kumar",
            userId: 23,
            col3: "A",
        },
        {
            col2: "Sangam Kumar",
            userId: 23,
            col3: "A",
        },
        {
            col2: "Sangam Kumar",
            userId: 23,
            col3: "A",
        },
    ]

    const complaints = [
        {
            col2: "Sangam Kumar",
            col3: "10/02/23",
        },
        {
            col2: "Sangam Kumar",
            col3: "10/02/23",
        },
        {
            col2: "Sangam Kumar",
            col3: "10/02/23",
        },
        {
            col2: "Sangam Kumar",
            col3: "10/02/23",
        },
    ]

    const leaderboardData = [
        {
            rank: 1,
            name: "Bhoomi",
            percentage: 90,
        },
        {
            rank: 1,
            name: "Bhoomi",
            percentage: 90,
        },
        {
            rank: 1,
            name: "Bhoomi",
            percentage: 90,
        },
        {
            rank: 1,
            name: "Bhoomi",
            percentage: 90,
        },
        {
            rank: 1,
            name: "Bhoomi",
            percentage: 90,
        },
    ]

    return (
        <>
            <Layout pageTitle={'Class Teacher'}>
                <Box bg={'#F8FAFA'} p={4} h={'auto'}>
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
                                    plugins={doughnutPlugins}
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
                                    plugins={doughnutPlugins}
                                />
                            </Box>
                        </Box>
                        <Box
                            boxSize={'xs'}
                        >
                            <Text mb={4}>Absent List</Text>
                            <ThreeColTable head={['S. No.', 'Name', 'Section']} body={absentStudents} color={'#003865E5'} />
                        </Box>
                    </Stack>
                    <Stack
                        direction={['column', 'row']}
                        spacing={6} py={6}
                        justifyContent={'space-between'}
                    >
                        <VStack h={'sm'} p={4} bg={'#26567CCC'} color={'white'} w={['full', 'xs']} roundedTop={20}>
                            <Text fontWeight={'medium'} pb={6}>Leaderboard</Text>
                            <HStack rounded={'full'} w={'full'} px={4} py={2} bg={'white'} color={'black'}>
                                <Text flex={1}>Rank</Text>
                                <Text flex={1}>Name</Text>
                                <Text flex={1}>Percentage</Text>
                            </HStack>
                            {
                                leaderboardData.map((student, key) => {
                                    return (
                                        <HStack
                                            key={key}
                                            px={4} pt={3}
                                            pb={1} w={'full'}
                                            borderBottom={'1px'}
                                            borderBottomColor={'aliceblue'}
                                        >
                                            <Text flex={1}>{student.rank}</Text>
                                            <Text flex={1}>{student.name}</Text>
                                            <Text flex={1} textAlign={'center'}>{student.percentage}</Text>
                                        </HStack>
                                    )
                                })
                            }
                        </VStack>
                        <VStack h={'sm'} overflowY={'scroll'} p={4} bg={'#F4F2FA'} w={['full', 'xs']} roundedTop={20}>
                            <Text fontWeight={'medium'} pb={6} w={'full'} textAlign={'left'}>
                                To Do List
                                <Badge
                                    ml={2} bg={'#3CCF4E'}
                                    color={'white'}
                                    fontSize={'12'}
                                    px={1} rounded={'full'}
                                >
                                    30
                                </Badge>
                            </Text>
                            <HStack spacing={4} rounded={'12'} w={'full'} px={4} py={2} bg={'white'} cursor={'pointer'}>
                                <BsPlusCircleFill color='#3CCF4E' fontSize={28} />
                                <Box>
                                    <Text color={'#3CCF4E'} fontSize={'md'}>Add a new task</Text>
                                    <Text color={'#666'} fontSize={'xs'}>Create your new task</Text>
                                </Box>
                            </HStack>
                            {
                                leaderboardData.map((student, key) => {
                                    return (
                                        <Box w={'full'} p={3} rounded={12} bg={'white'}>
                                            Lorem ipsum dolor elit...
                                        </Box>
                                    )
                                })
                            }
                        </VStack>
                        <Box
                            boxSize={'xs'}
                        >
                            <Text mb={4}>Complaints</Text>
                            <ThreeColTable head={['S. No.', 'Name', 'Date']} body={complaints} color={'#F67C38E5'} />
                        </Box>
                    </Stack>
                </Box>
            </Layout>
        </>
    )
}

export default Index