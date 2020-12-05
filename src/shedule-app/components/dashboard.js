import React from 'react'
import MenuBar from "./menuBar"
import "../css/dashboard.css"
import { timetable } from "./helper.js"

export default function Dashboard(props) {
    const [toggle, setToggle] = React.useState(true);
    const [Data, setData] = React.useState({
        data: timetable[props.classSec][0],
        day: "Mon"
    });


    function sheduleData(ind) {
        let day;
        if (ind === 0) {
            day = "Mon"
        } else if (ind === 1) {
            day = "Theus"
        } else if (ind === 2) {
            day = "Wed"
        } else if (ind === 3) {
            day = "Thurs"
        } else if (ind === 4) {
            day = "Fri"
        };
        setData({ data: timetable[props.classSec][ind], day: day });
    }
    const listToggle = id => {
        if (toggle === true) {
            document.getElementById(id).style.height = "227px";
        } else {
            document.getElementById(id).style.height = "52px";
        }
        setToggle(!toggle)
    }
    return (
        <div className="dashboard-div">
            <MenuBar sheduleData={sheduleData} />
            <h1>Dashboard ({Data.day})</h1>
            <div onClick={() => { props.condition(1) }} className="back-cross">
                <span></span>
                <span></span>
            </div>
            <p className="name">Salam {props.name},<br />Hope you are taking your classes<br />properly. Have a Bright Future.</p>
            <ul className="dashboard-list">

                {
                    Data.data.map((item, ind) => {
                        return (
                            <li onClick={() => { listToggle(ind + 1) }} key={ind + 1} id={ind + 1}>
                                <label className="traingle"></label>
                                <span>Subject<b>{item.Subject}</b></span>
                                <span>Host<b>{item.Host}</b></span>
                                <span>Timing<b>{item.Timing}</b></span>
                                <span>Zoom<img onClick={() => { window.open(item.link) }} src={require("../images/zoom.jpg")} alt="zoom" /></span>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}