import { Card, Center, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Flex, Container, Box, Select } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { ImLocation } from "react-icons/im";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Mission, Missions } from '../interfaces/interfaces';
import { CardProps } from '../interfaces/interfaces';

export default function Missioncard({ mission, missions, getMission }: CardProps) {

        const displaynames = missions?.map((e: Object) => (
            <option value={Object.keys(e)} key={Object.keys(e)[0]}>{Object.values(e)}</option>))

    return (
        <Container>
            <Center>
            <Stack w={325}>
                <Select variant='filled' placeholder='Select mission' size='sm' onChange={getMission}>
                    {displaynames}  
                </Select>
            </Stack>
            </Center>
            {mission.missionname === '' || missions?.length === 0  || (!mission.years) ? <h1 style={{color: "white", fontSize: "25px"}}>Select a mission</h1> :
            <Card bg="none" color={"white"} w={'auto'} p={0}>
                <CardBody p={1}>
                    <Flex>
                        <Image
                            objectFit='cover'
                            height={140}
                            width={140}
                            src={`${mission.image}`}
                            alt='Mission image'
                        />
                        <Stack paddingLeft={3}>
                            <Text fontSize='xs'><Icon as={ImLocation} color={"red"} />{`${mission.location}`}</Text>

                            <Heading size='xl'>{`${mission.missionname}`}</Heading>
                            <p style={{fontSize: '12px', marginTop: '8px'}}><b>Agency: </b>{`${mission.agency}`}</p>
                            <p style={{fontSize: '12px', marginTop: '0'}}><b>Year /s of service: </b>{mission.years.longValues.length === 1 ? `${mission.years.longValues}` : `${mission.years.longValues[0]} - ${mission.years.longValues[1]}`}</p>
                            <p style={{fontSize: '12px', marginTop: '0'}}><b>Destination: </b>{`${mission.bodies.stringValues[0]}`}</p>
                        </Stack>
                    </Flex>
                </CardBody>
                <CardFooter p={1} fontSize={14} sx={{overflowY: 'scroll'}}>
                    {`${mission.description}`}
                </CardFooter>
            </Card>}
        </Container>
    )
}