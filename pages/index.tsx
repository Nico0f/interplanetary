import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [planetInfo, setPlanetInfo] = useState(false)

  return (
    <>
    <div className={styles.main}>
      <div className={styles.sun}>
        {/* <div className={styles.trajectory_ven_land}></div> */}
        <div className={styles.trajectory_ven_orb}></div>
        <div className={styles.mercury}>
        <div className={styles.mercury_orbit}></div>
        </div>
        <div className={styles.venus}>
        <p className={styles.hide}>Venus</p>
        {/* <div className={styles.venus_orbit}></div> */}
        <div className={styles.venus_orbit_full}></div>
        </div>
        <div className={styles.earth}>
          <div className={styles.earth_orbit}></div>
        </div>
        <div className={styles.mars} onMouseEnter={() => setPlanetInfo(true)} onMouseLeave={() => setPlanetInfo(false)}>
          {planetInfo ? <p>Mars</p> : null}
          <div className={styles.mars_orbit}></div>
        </div>
        <div className={styles.jupiter}>
          <div className={styles.jupiter_orbit}></div>
        </div>
        <div className={styles.saturn}>
          <div className={styles.saturn_orbit}></div>
        </div>
        <div className={styles.uranus}>
          <div className={styles.uranus_orbit}></div>
        </div>
        <div className={styles.neptune}>
          <div className={styles.neptune_orbit}></div>
        </div>
        <div className={styles.pluto}>
          <div className={styles.pluto_orbit}></div>
        </div>
      </div>
    </div>
    </>
  )
}
