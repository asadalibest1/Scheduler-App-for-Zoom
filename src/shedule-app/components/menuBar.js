import React from 'react'
import "../css/menubarIcon.css"
import "../css/menubar.css"

export default function MenuBar(props) {
  const [menuboxToggle, setMenuboxToggle] = React.useState(true);

  function menuboxToggleFun() {
    if (menuboxToggle === true) {
      document.getElementsByClassName("menubox")[0].style.width = "92vw";
      document.querySelector(".menubox ul").style.left = "0vw";
    } else {
      document.getElementsByClassName("menubox")[0].style.width = "0vw";
      document.querySelector(".menubox ul").style.left = "-61vw";
    }
    setMenuboxToggle(!menuboxToggle);
  }
  return (
    <div>


      <div className="menu-container">

        <input type="checkbox" id="openmenu" className="hamburger-checkbox" />
        <div className="hamburger-icon">
          <div className="dish">
            <label onClick={menuboxToggleFun} htmlFor="openmenu" id="hamburger-label">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>

        <div className="menubox" onClick={menuboxToggleFun}>
          <ul>
            <p onClick={() => {localStorage.clear(); props.condition(0)}} className="UserName">{props.name}</p>
            <li onClick={() => { props.sheduleData(0) }}>Monday</li>
            <li onClick={() => { props.sheduleData(1) }}>Theusday</li>
            <li onClick={() => { props.sheduleData(2) }}>Wednesday</li>
            <li onClick={() => { props.sheduleData(3) }}>Thursday</li>
            <li onClick={() => { props.sheduleData(4) }}>Friday</li>
            <div>
              <img onClick={()=>{window.open("https://www.facebook.com/asadali.asad.355")}} src={require("../images/fb.png")} alt='fb png' />
              <img onClick={()=>{window.open("https://api.whatsapp.com/send?phone=+923181038402")}} src={require("../images/wa.png")} alt='fb png' />
              <img onClick={()=>{window.open("https://github.com/asadalibest1/Sheduler-App-for-Zoom")}} src={require("../images/github.png")} alt="github" />
            </div>
          </ul>
        </div>
      </div>

    </div>
  )
}
