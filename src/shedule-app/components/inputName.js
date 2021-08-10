import React from 'react'
import { useHistory } from 'react-router-dom';
import "../css/inputName.css"

export default function InputName() {

    const history = useHistory()
    // const initialzeTimetable = [[], [], [], [], [], [], []];

    // if (localStorage.getItem("timetable") == null) {
    //     localStorage.setItem("timetable", JSON.stringify(initialzeTimetable));
    // };
    

    const Name = React.useRef();

    if (localStorage.getItem("name")) history.push("/class");

    function submitData() {
        localStorage.setItem('name', Name.current.value);
        
        history.push("/class")
    }

    return (
        <>
            <div className="input-div">
                <p>Enter your name for better experince</p>
                <input type="text" placeholder="Enter your name" ref={Name} /><br />
                <button onClick={submitData}>Enter</button>
                {/* <button onClick={()=>{localStorage.clear()}}>Clear localStorage</button> */}
            </div>
        </>
    )
}