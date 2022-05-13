import React, { Component } from "react";
import { render } from "react-dom";
import "./About.css"

class About extends Component {
    render() {
        return (
            <div className="home">
                <h1 className ="title">Tijuana River Watershed Monitoring System
                </h1>
                <div className="img">
                    <img className ="img" src="TRWatershed.jpeg"width="570" height="450"alt=""></img>
                </div>      
                <div className="text">
                    
                    <p className="intro1"></p>
                    <h2 className="intro0">A Brief Introduction</h2>
                    <p className="intro2">- The Tijuana River Watershed (TRW) is a binational water basin that spans 1,750 sq miles across the U.S.-Mexican border, with 75% of the watershed based in Mexico. It provides habitats for plants and animals as well as drinking water for people and wildlife. Water quality monitoring efforts are important in providing empirical evidence to support decision making on health and environmental issues.
                    <br></br><br></br>- Multiple agencies lead monitoring efforts in different parts of the TRW with little communication and coordination among them, leading to issues around data transparency and accessibility and limiting overall watershed management and protection efforts.

                    In 2020, the San Diego Regional Water Quality Control Board will begin an effort to gain a comprehensive understanding of the water quality monitoring efforts taking place across the watershed in the U.S. However, that effort does not include the majority of the watershed, which is located in Mexico. 
                    </p>
                    
                    <h2 className="intro3">Problem context 
                    </h2>
                    <p className="intro4">- Numerous organizations monitor water quality parameters in the Tijuana River watershed. These organizations are stretched across the San Diego and Tijuana region. 
                    <br></br><br></br>- Due to the lack of a singular, coordinated means of communication, many of these organizations miss opportunities to learn about the work others are doing, collaborate, and share important information and data. 
                    </p>
                </div>
                
            </div>
        );
    }
    
}
export default About;

const container = document.getElementById("about");

// Only render if the container is in the DOM
if (container != null) {
  render(<About />, container);
}