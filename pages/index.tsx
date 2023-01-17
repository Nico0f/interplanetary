import Head from 'next/head'
import Image from 'next/image'
import { Inter, Preahvihear } from '@next/font/google'
import styles from '../styles/Home.module.css'
import planets from '../styles/Planets.module.css'
import trajectory from '../styles/Trajectory.module.css'
import asteroids from '../styles/Asteroids.module.css'
import { useState, useRef, useEffect } from 'react'
// import type { GetStaticProps } from 'next'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { json } from 'stream/consumers'
import Missions from '../components/missions'


export default function Home<Props>(data: any) {
  const [planetInfo, setPlanetInfo] = useState(false)
  
  const [select, setSelect] = useState('body')

  const agency_info = data.agencies_info.map((e:any, i: any) => (
    <div>
      <input
        key={i}
        type="checkbox"
        id="Agencies"
        name="Agencies"
        value="Agencies"
        className={styles.filter_elements}
      // checked={}
      // onChange={}
      />
      <label htmlFor="Agencies">{e}</label>
      <br />
    </div>
  ))

  const bodies_info = data.bodies_info.map((e:any, i: any) => (
    <div>
      <input
        key={i}
        type="checkbox"
        id="Body"
        name="Body"
        value="Body"
        className={styles.filter_elements}
      // checked={}
      // onChange={}
      />
      <label htmlFor="Body">{e}</label>
      <br />
    </div>
  ))

  const launchSite_info = data.launchSite_info.map((e:any, i: any) => (
    <div>
      <input
        key={i}
        type="checkbox"
        id="Site"
        name="Site"
        value="Site"
        className={styles.filter_elements}
      // checked={}
      // onChange={}
      />
      <label htmlFor="Site">{e}</label>
      <br />
    </div>
  ))

  const launchSystem_info = data.launchSystem_info.map((e:any, i: any) => (
    <div>
      <input
        key={i}
        type="checkbox"
        id="System"
        name="System"
        value="System"
        className={styles.filter_elements}
      // checked={}
      // onChange={}
      />
      <label htmlFor="System">{e}</label>
      <br />
    </div>
  ))

  const outcomes_info = data.outcomes_info.map((e:any, i: any) => (
    <div>
      <input
        key={i}
        type="checkbox"
        id="Outcomes"
        name="Outcomes"
        value="Outcomes"
        className={styles.filter_elements}
      // checked={}
      // onChange={}
      />
      <label htmlFor="Outcomes">{e}</label>
      <br />
    </div>
  ))
  // console.log(JSON.parse(data.aa))
  // const agen: Array<any> = []
  // for (const property in data.data.agencies) {
  //   agen.push(<div>
  //     <input
  //       type="checkbox"
  //       id="Body"
  //       name="Body"
  //       value="Body"
  //     // checked={}
  //     // onChange={}
  //     />
  //     <label htmlFor="Body">{data.data.agencies.property}</label>
  //     <br />
  //   </div>)
  // }

  
  return (
    <>
    <nav className={styles.nav}>
    <img style={{margin: "4px"}} src="https://res.cloudinary.com/dgcsnhguo/image/upload/c_scale,h_50/v1673928116/Interplanetary/Interplanetary_images/logo/logo_jwkua5.png" alt="logo" />
    </nav>
    <div className={styles.upper}>
        {/* <div className={styles.mainSelect}>
          <h2>filters</h2>
          <input
            type="checkbox"
            id="Body"
            name="Body"
            value="Body"
          // checked={}
          // onChange={}
          />
          <label htmlFor="Body">Planet/Asteroid/Comet</label>
          <br />
          <input
            type="checkbox"
            id="Agency"
            name="Agency"
            value="Agency"
          // checked={}
          // onChange={}
          />
          <label htmlFor="Agency">Agency</label>
          <br />
          <input
            type="checkbox"
            id="LaunchSystem"
            name="LaunchSystem"
            value="LaunchSystem"
          // checked={}
          // onChange={}
          />
          <label htmlFor="LaunchSystem">Launch System</label>
          <br />
          <input
            type="checkbox"
            id="MissionType"
            name="MissionType"
            value="MissionType"
          // checked={}
          // onChange={}
          />
          <label htmlFor="MissionType">Type of Mission</label>

          <select name="body" id="body">
          <option value="0">Planet/Asteroid/Comet</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          </select>
        </div> */}
        <div className={styles.filters}>
          <div className={select === 'body' ? styles.selected : styles.select} onClick={() => setSelect('body')}>
            <h3 style={{fontWeight: 300, margin: 5, marginRight: 50, fontSize: 24}}>Planet / Asteroid / Comet</h3><h3>{'>'}</h3>
          </div>
          <div className={select === 'agency' ? styles.selected : styles.select} onClick={() => setSelect('agency')}>
            <h3 style={{fontWeight: 300, margin: 5, marginRight: 15, fontSize: 24}}>Agency</h3><h3>{'>'}</h3>
          </div>
          <div className={select === 'launchSite' ? styles.selected : styles.select} onClick={() => setSelect('launchSite')}>
            <h3 style={{fontWeight: 300, margin: 5, marginRight: 15, fontSize: 24}}>Launch Site</h3><h3>{'>'}</h3>
          </div>
          <div className={select === 'launchSystem' ? styles.selected : styles.select} onClick={() => setSelect('launchSystem')}>
            <h3 style={{fontWeight: 300, margin: 5, marginRight: 15, fontSize: 24}}>Launch System</h3><h3>{'>'}</h3>
          </div>
          <div className={select === 'outcome' ? styles.selected : styles.select} onClick={() => setSelect('outcome')}>
            <h3 style={{fontWeight: 300, margin: 5, marginRight: 15, fontSize: 24}}>Outcome</h3><h3>{'>'}</h3>
          </div>
        </div>
        <div className={styles.filter_divs}>
        {select === 'body' ? bodies_info : null}
        {select === 'agency' ? agency_info : null}
        {select === 'launchSite' ? launchSite_info : null}
        {select === 'launchSystem' ? launchSystem_info : null}
        {select === 'outcome' ? outcomes_info : null}
        </div>
        <div className={styles.info}>
          <Missions props={data.missions}/>
        </div>
    </div>
    <div className={styles.main}>
      <div className={planets.sun}>
        {/* <div className={trajectory.mercury_orb}></div> */}
        {/* <div className={trajectory.venus_flyby}></div> */}
        {/* <div className={trajectory.venus_land}></div> */}
        {/* <div className={trajectory.venus_orb}></div> */}
        {/* <div className={trajectory.venus_orb_land}></div> */}
        {/* <div className={trajectory.mars_flyby}></div> */}
        {/* <div className={trajectory.mars_land}></div> */}
        {/* <div className={trajectory.mars_orb}></div> */}
        {/* <div className={trajectory.mars_orb_land}></div> */}
        {/* <div className={trajectory.jupiter_flyby}></div> */}
        {/* <div className={trajectory.venus_vega_halley}></div> */}
        {/* <div className={trajectory.venus_vega_land}></div> */}
        {/* <div className={trajectory.mariner10_mercury_orb}></div> */}
        {/* <div className={trajectory.mariner10_ven_to_mer}></div> */}
        <div className={trajectory.pioneer11_jupiter_flyby}></div>
        <div className={trajectory.pioneer11_saturn_flyby}></div>



        <div className={planets.mercury}>
        <div className={planets.mercury_orbit}></div>
        {/* <div className={planets.mercury_orbit_full}></div> */}
        </div>
        <div className={planets.venus}>
        <p className={planets.hide}>Venus</p>
        <div className={planets.venus_orbit}></div>
        {/* <div className={planets.venus_orbit_full}></div> */}
        </div>
        <div className={planets.earth}>
          <div className={planets.earth_orbit}></div>
        </div>
        <div className={planets.mars} onMouseEnter={() => setPlanetInfo(true)} onMouseLeave={() => setPlanetInfo(false)}>
          {planetInfo ? <p>Mars</p> : null}
          <div className={planets.mars_orbit}></div>
          {/* <div className={planets.mars_orbit_full}></div> */}
        </div>
        <div className={planets.jupiter}>
          <div className={planets.jupiter_orbit}></div>
          {/* <div className={planets.jupiter_orbit_full}></div> */}
        </div>
        <div className={planets.saturn}>
          <div className={planets.saturn_orbit}></div>
        </div>
        <div className={planets.uranus}>
          <div className={planets.uranus_orbit}></div>
        </div>
        <div className={planets.neptune}>
          <div className={planets.neptune_orbit}></div>
        </div>
        <div className={planets.pluto}>
          <div className={planets.pluto_orbit}></div>
        </div>
        <div className={asteroids.halley}></div>
      </div>
    </div>
    </>
  )
}

interface Props {
  agencies: Array<Object>,
  launch_locations: Array<Object>,
  launch_systems: Array<Object>,
  celestial_bodies: Array<Object>,
  outcomes: Array<Object>
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get<Props>('https://x5cbpezadw7jksa35e2gpl5npi0fvalh.lambda-url.us-east-1.on.aws/?filters=all')
  const data = res.data

  const missions: Array<Object> = []
  const res2 = await axios.get<any>('https://x5cbpezadw7jksa35e2gpl5npi0fvalh.lambda-url.us-east-1.on.aws/?filters=missions')
  const all_missions = res2.data
  for (const property in all_missions) {
    missions.push(all_missions[property])
  }

  const agencies_info: Array<any> = []
  for (const property in data.agencies) {
    // @ts-ignore
    agencies_info.push(data.agencies[property])
  }

  const bodies_info: Array<any> = []
  for (const property in data.celestial_bodies) {
    // @ts-ignore
    bodies_info.push(data.celestial_bodies[property])
    
  }

  const launchSite_info: Array<any> = []
  for (const property in data.launch_locations) {
    // @ts-ignore
    launchSite_info.push(data.launch_locations[property])
    
  }

  const launchSystem_info: Array<any> = []
  for (const property in data.launch_systems) {
    // @ts-ignore
    launchSystem_info.push(data.launch_systems[property])
    
  }

  const outcomes_info: Array<any> = []
  for (const property in data.outcomes) {
    // @ts-ignore
    outcomes_info.push(data.outcomes[property])
    
  }
  // const aa = JSON.stringify(agen)

return {
  props: {
    data,
    agencies_info,
    bodies_info,
    launchSite_info,
    launchSystem_info,
    outcomes_info,
    missions
  },
}
}