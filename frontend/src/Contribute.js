import React, {Component} from "react";
import {Link} from 'react-router-dom'

class Contribute extends Component{
    state = {
        value: "Yes",
        value2: "No"
    };
    
    onchange = e =>{
        this.setState({[e.target.name] : e.target.value});
    }
    render(){
        const{value, value2} = this.state;
        return(
            <form>
                <div>
                    <div className="Contribute">
                        <p className="Tellus">Tell us about your organization</p>
                        <div className="Contribute_name">
                            <p>Is this your first time submitting a project?</p> 
                            <label className="yes0">
                                Yes
                                <input type="radio"
                                    value="Yes"
                                    name="value"
                                    class="yes"
                                    checked={value==="Yes"}
                                    onChange={this.onchange}/>
                            </label>
                            <br/>
                            <label className="no0">
                                No  
                                <input type="radio"
                                        value="No"
                                        name="value"
                                        class="no"
                                        checked={value==="No"}
                                        onChange={this.onchange}/>
                            </label>  
                        </div>
                        <div className="OrgName">
                            <p> Organization name:</p>  
                            <input></input>
                        </div>
                        <Link to= "/Contribute1">
                            <button class="next1">
                                <a href="#">Next</a>
                            </button>
                        </Link>
                       
                    </div>  
                </div>
           
            </form>
            
        )
    }
}
export default Contribute;