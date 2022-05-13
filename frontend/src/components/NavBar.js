import React, { Component } from "react";
import { render } from "react-dom";
import "./NavBar.css"

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <div className="Logo">
                    <img className ="Logo" src="Tremlogo.png"width="170" height="120"alt=""></img>
                </div>
                <div className='textlinks'> 
                    <ul className = "links">
                        <button><a href='/home'>Home</a></button>
                        <button><a href='/map'>Map</a></button>
                        <button><a href='/about'>About</a></button>
                        <button><a href='/contribute'>Contribute</a></button>
                    </ul>
                </div>
            </div>
        );
    }
    
}
export default NavBar;

const container = document.getElementById("navbar");

// Only render if the container is in the DOM
if (container != null) {
  render(<NavBar />, container);
}