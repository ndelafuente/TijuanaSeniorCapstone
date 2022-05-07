import React, {Component} from "react";
import {Link} from 'react-router-dom'

function Contribute2(){
    return(
        <div>
            <div className="Contribute2">
                <div className="a">
                    <p>First Name*</p>
                    <input class="name"></input>
                    <p>Email Address*</p>
                    <input class="info"></input>
                    <p>Relation to project</p>
                    <input class="info"></input>
                </div>
                <div className="b">
                    <p>Last Name*</p>
                    <input class="name"></input>
                </div>
                <Link to= "/Contribute1">
                            <button class="previous">
                                <a href="#">Previous</a>
                            </button>
                </Link>
                <Link to= "/Contribute3">
                            <button class="next3">
                                <a href="#">Next</a>
                            </button>
                </Link>
            </div>
        </div>
    )
}

export default Contribute2;