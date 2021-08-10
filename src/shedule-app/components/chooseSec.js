import React from 'react'
import { Link } from 'react-router-dom';
import "../css/chooseSec.css"

export default function ChooseSec({ classSection }) {

    let initialzeTimetable =  JSON.parse(localStorage.getItem('timetable'));


    const newClass = React.useRef();

    // let initialzeTimetable = {
    //     '2c': [[{ Subject: 'Urdu' }], [{ Subject: 'eng' }], [{ Subject: 'eng' }], [{ Subject: 'eng' }], [{ Subject: 'eng' }], [{ Subject: 'eng' }], [{ Subject: 'eng' }]],
    //     '3c': [[{ Subject: 'Draw' }], [{ Subject: 'Draw' }], [{ Subject: 'Draw' }], [{ Subject: 'Draw' }], [{ Subject: 'Draw' }], [{ Subject: 'Draw' }], [{ Subject: 'Draw' }]],
    // };

    let [Data, setData] = React.useState(initialzeTimetable)
    let [Refresh, setRefresh] = React.useState(false);


    function saveClassEvent() {
        const _new = newClass.current.value
        initialzeTimetable = { ...initialzeTimetable, [_new]: [[], [], [], [], [], [], []] };

        localStorage.setItem("timetable", JSON.stringify(initialzeTimetable));

        setData(initialzeTimetable)
    }

    function deleteClass() {

        const _Class = newClass.current.value;

        if (Data[_Class]) {

            const ask = window.confirm(`Are you sure you want to delete ${_Class}`)
            if (ask) {
                delete Data[_Class];
                localStorage.setItem("timetable", JSON.stringify(Data));
                setRefresh(!Refresh)
            }

        } else {
            alert(`${_Class} is not available`)
        }

    }

    // console.log()

    return (
        <div className="chooseSec">
            <h2>Pleaze Choose your Class Section!</h2>

            {

                (Object.keys(Data).length === 0) ?


                    <div className="classes new-classes"
                        data-toggle="modal" data-target="#add_new_class">
                        <Link>
                            Add Class
                        </Link>
                    </div>

                    :
                    <>
                        {Object.keys(Data).map((item, ind) => {
                            //    console.log(item)
                            return <div className="classes" onClick={() => classSection(item)}>
                                <Link to="/dashboard">
                                    {item}
                                </Link>
                            </div>

                        })}
                        <div className="classes new-classes"
                            data-toggle="modal" data-target="#add_new_class">
                            <Link>
                                Edit
                            </Link>
                        </div>
                    </>
            }

            <div class="modal fade" tabindex="-1" role="dialog" id="add_new_class">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add new class</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" ref={newClass} aria-label="Default" placeholder="Class" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={saveClassEvent} >Save class</button>
                            <button type="button" class="btn btn-secondary" onClick={deleteClass} data-dismiss="modal">Delete</button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}
