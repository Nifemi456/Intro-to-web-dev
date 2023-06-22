import React from "react";
import "./Main.css"
import Logo from "./Waterstone.JPG"

function Main() {
    return(
        <div > 
            <div className="Logo">
            <img src={Logo} alt="Logo" width="140"></img>
            </div>
            <br/><br/><br/><br/>
            <div className="Intro">Hello, it's me!</div>
            <h1>Nifemi</h1>
            <p className="Info">An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world</p>
        </div>
    );
    
}

export default Main;