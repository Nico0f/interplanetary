import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Flex, Container, Box, Select } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { ImLocation } from "react-icons/im";
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Missioncard(props: any) {

    const [mission, setMission] = useState([{
        missionname: '',
        location: '',
        years: {longValues: [0]},
        bodies: {stringValues: []},
        description: '',
        image: ''
    }])

        // @ts-ignore
        const displaynames = props.missions.map((e:any) => (
            <option value={Object.keys(e)}>{Object.values(e)}</option>))

    return (
        <Container>
            <Stack>
                <Select variant='filled' placeholder='Select mission' size='sm' onChange={props.getMission}>
                    {displaynames}  
                </Select>
            </Stack>
            {props.mission[0].missionname === '' ? <h1 style={{color: "white", fontSize: "25px"}}>Select a mission</h1> :
            <Card bg="none" color={"white"} w={'auto'} p={0}>
                <CardBody p={1}>
                    <Flex>
                        <Image
                            objectFit='cover'
                            height={140}
                            width={140}
                            src={`${props.mission[0].image}`}
                            alt='Mission image'
                        />
                        <Stack paddingLeft={3}>
                            <Text fontSize='xs'><Icon as={ImLocation} color={"red"} />{`${props.mission[0].location}`}</Text>

                            <Heading size='xl'>{`${props.mission[0].missionname}`}</Heading>
                            <p style={{fontSize: '12px', marginTop: '8px'}}><b>Agency: </b>{`${props.mission[0].agency}`}</p>
                            <p style={{fontSize: '12px', marginTop: '0'}}><b>Year /s of service: </b>{props.mission[0].years.longValues.length === 1 ? `${props.mission[0].years.longValues}` : `${props.mission[0].years.longValues[0]} - ${props.mission[0].years.longValues[1]}`}</p>
                            <p style={{fontSize: '12px', marginTop: '0'}}><b>Destination: </b>{`${props.mission[0].bodies.stringValues[0]}`}</p>
                        </Stack>
                    </Flex>
                </CardBody>
                <CardFooter p={1} fontSize={14} sx={{overflowY: 'scroll'}}>
                    {`${props.mission[0].description}`}
                </CardFooter>
            </Card>}
        </Container>
    )
}