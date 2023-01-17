import axios from "axios"
import Card from "./card"
import styles from './card.module.css'
import { useEffect, useState } from "react"

export default function Missions(props: any) {

    console.log(props.props[0])
    const [mission, setMission] = useState([])
    
    // useEffect(() => {
    //     if (!mission) {
    //         setMission(props.props[0])
    //     }
    // }, [])

    const handleChange = (event: any) => {
        console.log(event.target.value)
        let mission = props.props.filter((e: any) => e.mission_name === event.target.value)
        setMission(mission)
    }
    

    return (
        <div>
            {/* @ts-ignore */}
            <select className={styles.customSelect} name="missions" id="missions" onChange={handleChange}>
                {props.props.map((e: any) => (<option key={e.mission_name} value={e.mission_name}>{e.mission_name}</option>))}
                {/* [<option value="2">asd</option>, <option value="2">Hola</option>] */}
            </select>
            <div>
                {mission ? <Card props={mission} /> : <p>Loading ...</p>}
            </div>
        </div>
    )
}