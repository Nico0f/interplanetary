import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import planets from '../styles/Planets.module.css'
import trajectory from '../styles/Trajectory.module.css'
import asteroids from '../styles/Asteroids.module.css'
import { useState, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [planetInfo, setPlanetInfo] = useState(false)

  return (
    <>
    <div>
      <p>filters</p>
      <select>PLANET</select>
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
