import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header'
import { SimpleGrid, Box, Container, Wrap, WrapItem, Image, Center } from '@chakra-ui/react'
import Filters from './components/filters'
import Options from './components/options'
import Missioncard from './components/card'
import axios from 'axios'
import { Mission, Filter, Info, Missions } from '../src/interfaces/interfaces'

export interface CardProps {
  mission: Mission,
  missions: Missions,
  getMission: any
} 

export interface FiltersProps {
  setView: any
}

function App() {

  const [view, setView] = useState<String>('body')

  const [missions, setMissions] = useState<Mission[]>([])



  const [info, setInfo] = useState<Info>({
    agencies: [],
    launchsite: [],
    launchsystem: [],
    outcomes: [],
    bodies: []
  })

  const [mission, setMission] = useState<Mission>({
    missionname: '',
    location: '',
    years: { longValues: [0] },
    bodies: {
      stringValues: []
    },
    description: '',
    agency: '',
    image: '',
    trajectory: ''
  })

  const [filters, setFilters] = useState<Filter>({
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
    const data: Missions = res.data
    setMissions(data)
}

  useEffect(() => {
    const data = getInfo()
    getMissions()
  }, [])

  const getMission = async (event: any) => {
    const res = await axios.get(`https://4rn65pwdsfreecqjwfyxhbd57y0pcurz.lambda-url.us-east-1.on.aws/?mission=${event.target.value}`)
    const data = res.data[0]
    setMission(data)
  }

  interface SetView {
    setView: React.Dispatch<React.SetStateAction<String>>;
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
      {mission?.trajectory ? <Image className='trajectory' src={`${mission.trajectory}`} alt='trajectoy'/> : null}

      </div>
    </div>
  )
}

export default App
