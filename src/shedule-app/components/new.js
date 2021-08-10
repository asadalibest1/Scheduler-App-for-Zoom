import React from 'react'

export default function NewField({ num, setDelete, Delete, section, setRefresh, Refresh }) {

    const timetable = JSON.parse(localStorage.getItem('timetable'));


    const [toggle, setToggle] = React.useState(true);

    const subject = React.useRef();
    const host = React.useRef();
    const startTiming = React.useRef();
    const endTiming = React.useRef();
    const zLink = React.useRef();

    function submit() {
        const value = {
            id: Math.random(),
            Subject: subject.current.value,
            Host: host.current.value,
            Timing: startTiming.current.value + " to " + endTiming.current.value,
            link: zLink.current.value
        }
        timetable[section][num].push(value)

        localStorage.setItem("timetable", JSON.stringify(timetable));

        // console.log(timetable)
        setRefresh(!Refresh)

    }


    return (
        <>

            <div className="text-center my-3 pr-3 d-flex justify-content-around">
                <button className="btn btn-primary w-50"
                    onClick={() => { setToggle(!toggle); setDelete(true) }}>
                    {(toggle) ? "Add New" : "Close"}
                </button>

                <button className="btn btn-danger w-25" hidden={(timetable[section][num] && toggle) ? false : true}
                    onClick={() => setDelete(!Delete)}
                >
                    {Delete ? "Delete" : "Done"}
                </button>
            </div>

            <div hidden={toggle}>


                <div class="input-group mb-3">
                    <input type="text" class="form-control" ref={subject} aria-label="Default" placeholder="Subject" />
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" ref={host} aria-label="Default" placeholder="Host" />
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control mr-1" ref={startTiming} aria-label="Default" placeholder="Start Timing" />
                    <input type="text" class="form-control ml-1" ref={endTiming} aria-label="Default" placeholder="End Timing" />
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" ref={zLink} aria-label="Default" placeholder="Zoom Link" />
                </div>

                <div className="text-center">
                    <button className="btn btn-danger w-50"
                        onClick={submit}>
                        Add
                    </button>


                </div>
            </div>

        </>
    )
}





