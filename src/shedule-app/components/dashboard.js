import React from 'react'
import MenuBar from "./menuBar"
import "../css/dashboard.css"
import { Link, useHistory } from 'react-router-dom';

export default function Dashboard({ classSection }) {

    const history = useHistory()


    // localStorage.removeItem('timetable')

    let timetable = JSON.parse(localStorage.getItem('timetable'));

    const timetableAvailable = (Object.keys(timetable).length === 0) ? true : false;

    if (timetableAvailable) {
        history.push('/class')
    }


    const Name = localStorage.getItem('name');



    const [toggle, setToggle] = React.useState(true);


    const myclass = classSection ? classSection : Object.keys(timetable)[0];

    const [Data, setData] = React.useState({
        data: !timetableAvailable ? timetable[myclass][0] : [],
        // data: (timetable = {}) ? [] : timetable[ myclass ][0],
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
        } else if (ind === 5) {
            day = "Satur"
        } else if (ind === 6) {
            day = "Sun"
        };

        // Object.keys(timetable)


        setData({ data: timetable[myclass][ind], day: day });
        // console.log(timetable[classSection][ind])
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
        <div className="dashboard-div mt-5">
            <MenuBar sheduleData={sheduleData} name={Name} />
            <h1>Dashboard ({Data.day})</h1>
            <h4>{myclass}</h4>
            
            <div className="back-cross">

                <Link to="/class">
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                </Link>

            </div>

            <p className="name"><span onClick={() => { localStorage.removeItem('name'); history.push("/") }}>
                Assalamu alaikum {Name}</span>
                ,<br />
                Hope you are taking your classes<br />properly. Have a Bright Future.
            </p>


            {
                (!Data.data.length) ?
                    <div className="text-center">
                        <p className="text-white">No class found!</p>

                        <Link to="/edit">
                            <button className="btn btn-danger"
                            >Add New
                            </button>
                        </Link>

                    </div>
                    :
                    false
            }

            <ul className="dashboard-list mx-auto">

                {
                    Data.data.map((item, ind) => {
                        return (
                            <li onClick={() => { listToggle(ind + 1) }} key={ind + 1} id={ind + 1}
                                className="mx-auto"
                            >
                                <label className="traingle"></label>
                                <span>Subject<b>{item.Subject}</b></span>
                                <span>Host<b>{item.Host}</b></span>
                                <span>Timing<b>{item.Timing}</b></span>
                                <span>Zoom<img onClick={() => window.open(item.link)}
                                    src={require("../images/zoom.jpg")} alt="zoom" /></span>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}