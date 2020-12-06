import React from 'react'
import "../css/chooseSec.css"

export default function ChooseSec(props) {
    return (
        <div className="chooseSec">
        <h1>Pleaze Choose your Class Section!</h1>
            <div onClick={()=>{props.condition(2)}} className="classes">Class 2 C</div>
            <div onClick={()=>{props.classSection(1); props.condition(2)}} className="classes">Class 2 D</div>
    </div>
    )
}
