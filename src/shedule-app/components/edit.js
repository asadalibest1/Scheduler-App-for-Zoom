import React from 'react'
import MenuBar from "./menuBar"
import "../css/dashboard.css"
import NewField from './new';
import { Link, useHistory, Redirect } from 'react-router-dom';

export default function Edit({  classSection  }) {

    const history = useHistory()

    const timetable = JSON.parse(localStorage.getItem('timetable'));


    const [days, setDays] = React.useState(0);
    const [toggle, setToggle] = React.useState(true);
    const [Delete, setDelete] = React.useState(true);

    const [Refresh, setRefresh] = React.useState(false);

    if (Object.keys(timetable).length === 0) {
        return <Redirect to="/class" />
      }

    const myclass = classSection ? classSection : Object.keys(timetable)[0];

    function daysName(num) {
        if (num === 0) {
            return "Monday"
        } else if (num === 1) {
            return "Theusday"
        } else if (num === 2) {
            return "Wednesday"
        } else if (num === 3) {
            return "Thursday"
        } else if (num === 4) {
            return "Friday"
        } else if (num === 5) {
            return "Saturday"
        } else if (num === 6) {
            return "Sunday"
        }
    }

    const listToggle = id => {
        if (toggle === true) {
            document.getElementById(id).style.height = "227px";
        } else {
            document.getElementById(id).style.height = "52px";
        }
        setToggle(!toggle)
    }

    function _delete(val) {

        // console.log(val)


        const a = timetable[ classSection ][ days ].filter(function (item) {
            return item.id !== val
        })

        timetable[ classSection ][ days ] = a

        localStorage.setItem("timetable", JSON.stringify(timetable));

        // console.log(a)
        setRefresh(!Refresh)
    }

// console.log(timetable[ classSection ][0] [0].Subject)

    return (
        <div className="dashboard-div mt-4 p-4">

            <h3 class="text-white text-center">Customize Dashboard</h3>


            <div class="dropdown mt-4 mb-2 text-center">
                <button class="btn dropdown-toggle w-50" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {daysName(days)}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" onClick={() => setDays(0)}>Monday</a>
                    <a class="dropdown-item" href="#" onClick={() => setDays(1)}>Theusday</a>
                    <a class="dropdown-item" href="#" onClick={() => setDays(2)}>Wednesday</a>
                    <a class="dropdown-item" href="#" onClick={() => setDays(3)}>Thursday</a>
                    <a class="dropdown-item" href="#" onClick={() => setDays(4)}>Friday</a>
                    <a class="dropdown-item" href="#" onClick={() => setDays(5)}>Saturday</a>
                    <a class="dropdown-item" href="#" onClick={() => setDays(6)}>Sunday</a>
                </div>
            </div>
            <div className="text-white text-center mb-3">{timetable[myclass][ days ] ? timetable[myclass][ days ].length + " classes mentioned" : "No class found!"}</div>


            <ul className="dashboard-list list-group mb-3 ml-0">

                {
                    (timetable[ myclass ][ days ]) ?
                        <>

                            {
                                timetable[ myclass ][ days ].map((item, ind) => {

                                    return (
                                        <div className="position-relative">

                                            <button className="btn close-btn"
                                                onClick={() => _delete(item.id)}
                                                hidden={Delete}>
                                                <i className="fa fa-times"></i>
                                            </button>

                                            <li className={`mb-1 ${Delete ? " mx-auto" : "mx-0"}`}
                                                onClick={() => { listToggle(ind + 1) }} key={ind + 1} id={ind + 1}>
                                                <label className="traingle"></label>
                                                <span>Subject<b>{item.Subject}</b></span>
                                                <span>Host<b>{item.Host}</b></span>
                                                <span>Timing<b>{item.Timing}</b></span>
                                                <span>Zoom<img onClick={() => window.open(item.link)}
                                                    src={require("../images/zoom.jpg")} alt="zoom" /></span>
                                            </li>
                                        </div>
                                    )
                                })
                            }

                            <NewField num={days} section={myclass} setDelete={setDelete} Delete={Delete} setRefresh={setRefresh} Refresh={Refresh} />
                        </>

                        :
                        <>

                            <NewField />

                        </>
                    // }
                }

            </ul>

            <div className="text-center">
                <Link to="/dashboard">
                    <button className="btn btn-info w-50">
                        Go to Dashboard
                    </button>
                </Link>
            </div>



        </div >
    )
}