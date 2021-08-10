import React from 'react'
import "./css/app.css"
import InputName from "./components/inputName"
import ChooseSec from "./components/chooseSec"
import Dashboard from "./components/dashboard"
import Edit from "./components/edit"
import firebaseService from "./firebase//firebaseService"
import {
    Switch,
    Route,
} from "react-router-dom";

export default function App() {

    firebaseService();

    if (!localStorage.getItem("timetable")) {
        localStorage.setItem("timetable", JSON.stringify({}));
    };



    const [condition, setCondition] = React.useState(2)
    // const [name, setName] = React.useState("")
    const [classSec, setClassSec] = React.useState(null)

    function classSection(section) {
        setClassSec(section)
    }

    return (
        <div>
            <h2 className="main-header">Zoom Scheduler</h2>

            <Switch>
                <Route path="/edit">
                    <Edit classSection={classSec}/>
                </Route>

                <Route path="/dashboard">
                    <Dashboard classSection={classSec} />
                </Route>

                <Route path="/class">
                    <ChooseSec classSection={classSection} />
                </Route>

                <Route path="/">
                    <InputName />
                </Route>
            </Switch>
        </div>
    )
}