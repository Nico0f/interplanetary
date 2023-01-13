import axios from "axios"
import Card from "./card"
import { useEffect, useState } from "react"

export default function Missions(props: any) {

    console.log(props.props)
    const [allMissions, setAllMissions] = useState([])


    return (
        <div>
            <select name="missions" id="missions">
                {props.props.map((e: any) => (<option>{e.mission_name}</option>))}
                {/* [<option value="2">asd</option>, <option value="2">Hola</option>] */}
            </select>
            <div>
                <Card />
            </div>
        </div>
    )
}