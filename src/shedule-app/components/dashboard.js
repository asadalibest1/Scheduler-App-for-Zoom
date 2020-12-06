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
            <MenuBar sheduleData={sheduleData} condition={props.condition} name={props.name} />
            <h1>Dashboard ({Data.day})</h1>
            <div  className="back-cross">
                <div onClick={() => { props.condition(1) }}>
                <span></span>
                <span></span>
                </div>
            </div>
            <p className="name"><span onClick={() => { localStorage.clear(); props.condition(0) }}>
                Assalamu alaikum {props.name}</span>,<br />Hope you are taking your classes<br />properly. Have a Bright Future.</p>
            <ul className="dashboard-list">

                {
                    Data.data.map((item, ind) => {
                        return (
                            <li onClick={() => { listToggle(ind + 1) }} key={ind + 1} id={ind + 1}>
                                <label className="traingle"></label>
                                <span>Subject<b>{item.Subject}</b></span>
                                <span>Host<b>{item.Host}</b></span>
                                <span>Timing<b>{item.Timing}</b></span>
                                <span>Zoom<img onClick={
                                    () => {
                                        (item.link !== "#") ? window.open(item.link) :
                                        alert("Dear user, I didn't found this zoom link, So I am unable to schedule this link. In the future, I will try to solve this issue.")
                                        }
                                } src={require("../images/zoom.jpg")} alt="zoom" /></span>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}