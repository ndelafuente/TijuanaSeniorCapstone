import React, {Component} from "react";
import {Link} from 'react-router-dom'

function Contribute1(){
    return(
        <div>
            <div className="Contribute1">
                <p className="Tellus">Tell us about your project.</p>
                <div className="Monitoring">
                    <div className="Info">
                        <p>Monitoring location</p> 
                        <input class="Location"></input>
                        <p>Start Date</p>
                        <input class="Start_date"></input>
                        <p>End Date</p>
                        <input class="End_date"></input>
                        <br></br>
                        <br></br>
                        <input type="checkbox"/> Currently in progress
                        <br></br>
                        <br></br>
                        <p>Funding agencies</p>
                        <input class="Funding"></input>
                    </div>
                    <div className="Parameters">
                        <p>Monitoring Parameters</p>
                         <input type="checkbox"/> Air temperature
                         <br></br>
                         <input type="checkbox"/> Heavy metals
                         <br></br>
                         <input type="checkbox"/> Bacteria
                         <br></br>
                         <input type="checkbox"/> Storm water
                         <br></br>
                         <input type="checkbox"/> Depth
                         <br></br>
                         <input type="checkbox"/> pH
                    </div>
                </div>
                <Link to= "/Contribute">
                            <button class="previous">
                                <a href="#">Previous</a>
                            </button>
                </Link>
                <Link to= "/Contribute2">
                            <button class="next2">
                                <a href="#">Next</a>
                            </button>
                </Link>
            </div>
        </div>
    )
}

export default Contribute1;