import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import { SimpleGrid, Box, Container, Wrap, WrapItem, Image } from '@chakra-ui/react'
import Filters from './components/filters'
import Options from './components/options'
import Missioncard from './components/card'
import axios from 'axios'

function App() {

  const [view, setView] = useState('body')

  const [info, setInfo] = useState({
    agencies: [],
    launchsite: [],
    launchsystem: [],
    outcomes: [],
    bodies: []
  })

  const [mission, setMission] = useState([{
    missionname: '',
    location: '',
    years: { longValues: [0] },
    bodies: { stringValues: [] },
    description: '',
    image: '',
    trajectory: ""
  }])

  const getInfo = async () => {
    const response = await axios.get('https://4rn65pwdsfreecqjwfyxhbd57y0pcurz.lambda-url.us-east-1.on.aws/?filters=info')
    const data = response.data
    // @ts-ignore
    setInfo((prevState) => ({ ...prevState, agencies: data.agencies, launchsite: data.locations, launchsystem: data.launchsystems, outcomes: data.outcomes, bodies: data.bodies }))
  }

  useEffect(() => {
    const data = getInfo()
  }, [])

  const getMission = async (event: any) => {
    const res = await axios.get(`https://4rn65pwdsfreecqjwfyxhbd57y0pcurz.lambda-url.us-east-1.on.aws/?mission=${event.target.value}`)
    const data = res.data
    setMission(data)
  }

  return (
    <div className="App">
      <Header />
      <Wrap justify={"space-between"} m={2}>
        <WrapItem>
          <Filters setView={setView}/>
        </WrapItem>
        <WrapItem>
          <Options view={view} info={info}/>
        </WrapItem>
        <WrapItem>
          <Missioncard getMission={getMission} mission={mission}/>
        </WrapItem>
      </Wrap>
      <div className='image'>
      <Image src='https://res.cloudinary.com/dgcsnhguo/image/upload/v1674455192/Interplanetary/Solar%20System/SOLARSYSTEM_nncmgi.png' alt='SolarSystem' />
      <Image className='trajectory' src={`${mission[0].trajectory}`} alt='trajectoy'/>

      </div>
    </div>
  )
}

export default App
