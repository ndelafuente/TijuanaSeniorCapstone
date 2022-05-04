import React, { useState, useEffect, useCallback } from "react";
import {BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from 'react-router-dom';
import client from "../../Client";
import NavBar from "../../NavBar";

const OrgPage = () => {

    const [org, setOrg] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');

    const createOrg = useCallback(
        () => {
            client.post('/organization',{
                'name': name,
                'type': 'Type 3',
                'description': description,
                'website': website,
                'email': 'abc@gmail.com',
                'address': 'Add 2',
                'city': 'San Diego',
                'state': 'CA',
                'zip': '92110',
                'country': 'VN'
            }).then(function(response){
                setOrg(response.data)
            })
        }, [name,description,website], setOrg
    )

  


    return (
        /*<div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            <input type="text" onChange={(e) => setWebsite(e.target.value)}/>
            <button onClick={createOrg}>Confirm</button>
            {org && <h1>{org.name}</h1>}
            {org && <h1>{org.description}</h1>}
            {org && <h1>{org.website}</h1>}
        </div>*/
        <BrowserRouter>
            <div className="App">
                <NavBar></NavBar> 
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                <input type="text" onChange={(e) => setDescription(e.target.value)}/>
                <input type="text" onChange={(e) => setWebsite(e.target.value)}/>
                <button onClick={createOrg}>Confirm</button>
                {org && <h1>{org.name}</h1>}
                {org && <h1>{org.description}</h1>}
                {org && <h1>{org.website}</h1>}
            </div>
        </BrowserRouter>
    )
}

export default OrgPage;
