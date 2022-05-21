import React from "react";
import {BrowserRouter} from 'react-router-dom';
import "./home.css"
// import NavBar from "../../NavBar";

const HomePage = () => {

    return (
        <BrowserRouter>
            <div className="myNav">
                <h1>NavBar</h1>
            </div>
            <div className="Home">
                <div className="centered">Tijuana River Watershed Monitoring System</div>
            </div>
            <div>
            </div>
            <div className="row">
            <div className="column1">
                <div className="centeredsub1">Map</div>
            </div>
            <div className="column2">
                <div className="centeredsub1">About</div>
            </div>
            <div className="column3">
                <div className="centeredsub1">Contribute</div>
            </div>
            </div>

            
            
        </BrowserRouter>
    )
}

export default HomePage;
