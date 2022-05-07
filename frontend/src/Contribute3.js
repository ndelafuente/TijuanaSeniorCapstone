import React, {Component} from "react";
import {Link} from 'react-router-dom'

function Contribute3(){
    return(
        <div>
            <div className="Contribute3">
                <p>Organization Information</p>
                <p>Project Details</p>
                <p>Contact Information</p>
                <Link to= "/Contribute2">
                            <button class="previous">
                                <a href="#">Previous</a>
                            </button>
                </Link>
                <button class="submit">
                    <a href="#">Submit</a>
                </button>
            </div>
        </div>
    )
}

export default Contribute3;