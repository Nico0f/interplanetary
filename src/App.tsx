import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import { SimpleGrid, Box, Container, Wrap, WrapItem, Image, Center } from '@chakra-ui/react'
import Filters from './components/filters'
import Options from './components/options'
import Missioncard from './components/card'
import axios from 'axios'

function App() {

  const [view, setView] = useState('body')

  const [missions, setMissions] = useState([])

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

  const [filters, setFilters] = useState({
    bodies: [],
    agency: [],
    location: [],
    launchsystem: [],
    outcome: []
  })


  const urlGen = () => {
    let url = 'https://4rn65pwdsfreecqjwfyxhbd57y0pcurz.lambda-url.us-east-1.on.aws/?query=exclude'
    let arr: Array<string> = []
    Object.keys(filters).map((e: any) => {
      //@ts-ignore
      if (filters[e].length > 0) {
        arr.push('&' + e + '=')
        //@ts-ignore
        arr.push(filters[e])
      }
    })
    let query: Array<string> = arr.flat().map((e:any) => e.replaceAll(',', '-'))
    //@ts-ignore
    return url.concat(query).replaceAll(' ', '_').replaceAll(',', '~')
  }

  const missionsFilter = async () => {
    const url = urlGen()
    const res = await axios.get(url)
    const data = res.data
    setMissions(data)   
  }

  const changeFilters = async (event: any) => {
    const { name, value } = event.target
    //@ts-ignore
    filters[name].includes(value) ? setFilters((prevState: any) => ({...prevState, [name]: prevState[name].filter((e: any) => e !== value)})) : setFilters((prevState: any) => ({...prevState, [name]: [...prevState[name], value]})) 
    }

    useEffect(() => {
      console.log('update');
      missionsFilter()
    },[filters])


  const getInfo = async () => {
    const response = await axios.get('https://4rn65pwdsfreecqjwfyxhbd57y0pcurz.lambda-url.us-east-1.on.aws/?filters=info')
    const data = response.data
    // @ts-ignore
    setInfo((prevState) => ({ ...prevState, agencies: data.agencies, launchsite: data.locations, launchsystem: data.launchsystems, outcomes: data.outcomes, bodies: data.bodies }))
  }

  const getMissions = async () => {
    const res = await axios.get('https://4rn65pwdsfreecqjwfyxhbd57y0pcurz.lambda-url.us-east-1.on.aws/?filters=missions')
    const data = res.data
    setMissions(data)
}

  useEffect(() => {
    const data = getInfo()
    getMissions()
  }, [])

  const getMission = async (event: any) => {
    const res = await axios.get(`https://4rn65pwdsfreecqjwfyxhbd57y0pcurz.lambda-url.us-east-1.on.aws/?mission=${event.target.value}`)
    const data = res.data
    setMission(data)
  }

  return (
    <div className="App">
      <Header />
      <Wrap justify={'center'} m={2}>
        <WrapItem>
          <Filters setView={setView}/>
        </WrapItem>
        <WrapItem>
          <Options view={view} info={info} changeFilters={changeFilters} filters={filters}/>
        </WrapItem>
        <WrapItem>
          <Missioncard getMission={getMission} mission={mission} missions={missions}/>
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
