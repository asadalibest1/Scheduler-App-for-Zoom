import React from 'react'
import "../css/inputName.css"

export default function inputName(props) {
    
    if(localStorage.getItem("name")){
        props.getName(localStorage.getItem("name"))
        props.condition(1)
    };

    let getInputValue = "";
    function inputaValue(e){
            e.preventDefault();
            getInputValue = e.target.value;
        }
        function submitData(){
            localStorage.setItem('name', getInputValue)
            props.getName(localStorage.getItem("name"))
            props.condition(1)
        }

    return (
    <>
        <div className="input-div">
            <p>Enter your name fro better experince</p>
            <input type="text" onChange={inputaValue}/><br />
            <button onClick={submitData}>Enter</button>
            {/* <button onClick={()=>{localStorage.clear()}}>Clear localStorage</button> */}
        </div>
    </>
    )
}
