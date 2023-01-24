import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Flex, Container, Box, Select } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/icons'
import { ImLocation } from "react-icons/im";
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Missioncard(props: any) {


    const mis = {"0": {"mission_name": "Venera 1", "Description": "Venera 1 (\u0412\u0435\u043d\u0435\u0440\u0430-1 meaning Venus 1), was the first spacecraft to fly past Venus, as part of the Soviet Union's Venera program. Launched in February 1961, it flew past Venus on 19 May of the same year; however, radio contact with the probe was lost before the flyby, resulting in it returning no data.", "Launch_year": [1961], "Trajectory": "venus_flyby", "wiki_link": "https://en.wikipedia.org/wiki/Venera_1", "outcome": 1, "image": "https://res.cloudinary.com/dgcsnhguo/image/upload/v1673896729/Interplanetary/Interplanetary_images/venera1_lntlay.jpg", "Agency": "Soviet Space Program (CCCP)", "Launch_Location": "Baikonur 1/5, Kazakhstan, Soviet Union (USSR)", "Launch_system": "Molniya 8K78", "Celestial_body": ["Venus"]}}

    const [missions, setMissions] = useState([])

    const [mission, setMission] = useState([{
        missionname: '',
        location: '',
        years: {longValues: [0]},
        bodies: {stringValues: []},
        description: '',
        image: ''
    }])

    const getMissions = async () => {
        const res = await axios.get('https://4rn65pwdsfreecqjwfyxhbd57y0pcurz.lambda-url.us-east-1.on.aws/?filters=missions')
        const data = res.data
        setMissions(data)
    }
    
    useEffect(() => {
        getMissions()
    }
    , [])


        // @ts-ignore
        const displaynames = missions.map((e:any) => (
            <option value={Object.keys(e)}>{Object.values(e)}</option>))

    return (
        <Container>
            <Stack>
                <Select variant='filled' placeholder='Select mission' size='sm' onChange={props.getMission}>
                    {displaynames}  
                </Select>
            </Stack>
            {props.mission[0].missionname === '' ? <h1 style={{color: "white"}}>Select a mission</h1> :
            <Card bg="none" color={"white"} w={"auto"}>
                <CardBody>
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
                            <Text fontSize='xs'>Agency: {`${props.mission[0].agency}`}</Text>
                            <Text fontSize='xs'>Year /s of service: {props.mission[0].years.longValues.length === 1 ? `${props.mission[0].years.longValues}` : `${props.mission[0].years.longValues[0]} - ${props.mission[0].years.longValues[1]}`}</Text>
                            <Text fontSize='xs'>Destination: {`${props.mission[0].bodies.stringValues[0]}`}</Text>
                        </Stack>
                    </Flex>
                </CardBody>
                <CardFooter paddingRight={0} paddingTop={0} fontSize={14} sx={{overflowY: 'scroll'}}>
                    {`${props.mission[0].description}`}
                </CardFooter>
            </Card>}
        </Container>
    )
}