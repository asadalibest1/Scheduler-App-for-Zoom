import React from 'react'
import "../css/menubar.css"

export default function MenuBar(props) {
// function hidden(){
//   document.getElementsByClassName("menu-pane")[0].style.width = "0vw";
//   document.querySelector(".menu-pane ul").style.width = "0vw";
// }

  return (
        <div>
            

<div className="menu-container">
  
  <input type="checkbox" id="openmenu" className="hamburger-checkbox" />  
  <div className="hamburger-icon">
    
    <label htmlFor="openmenu" id="hamburger-label">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </label>    
  </div>

    <div className="menu-pane">
      
      <nav>
        <ul>
          <li onClick={()=>{props.sheduleData(0)}}>Monday</li>
          <li onClick={()=>{props.sheduleData(1)}}>Theusday</li>
          <li onClick={()=>{props.sheduleData(2)}}>Wednesday</li>
          <li onClick={()=>{props.sheduleData(3)}}>Thursday</li>
          <li onClick={()=>{props.sheduleData(4)}}>Friday</li>
  
          </ul>
          {/* <button onClick={()=>{hidden()}}>Click</button> */}
      </nav>
    </div>
  </div>


        </div>
    )
}
