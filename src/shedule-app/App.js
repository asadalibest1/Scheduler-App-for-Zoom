import React from 'react'
import "./css/app.css"
import InputName from "./components/inputName"
import ChooseSec from "./components/chooseSec"
import Dashboard from "./components/dashboard"
import {timetable} from "./components/helper.js"


export default function App() { 
    const [condition, setCondition] = React.useState(0)
    const [name, setName] = React.useState("")
    const [classSec, setClassSec] = React.useState(timetable[0])
    
    function classSection(section){
        setClassSec(section)
    }
    function changeCondition(__condition){
        setCondition(__condition)   
    }

    function getName(name){
            setName(name);
}
            // console.log(localStorage.getItem("name"))            
            console.log(classSec)            
            // alert(classSec)
   return (
        <div>
            <h1 className="main-header">Shedule App</h1>
            {(condition === 0) ? <InputName getName={getName} condition={changeCondition}/> : false}
            {(condition === 1) ? <ChooseSec classSection={classSection} condition={changeCondition}/> : false}
            {(condition === 2) ? <Dashboard classSec={classSec} name={name}condition={changeCondition}/> : false}

        </div>
    )
}