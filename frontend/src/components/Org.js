import React, { useState, useCallback, Component } from "react";
import { render } from "react-dom";
// import {BrowserRouter} from 'react-router-dom';
// import client from "../../components/Client";
// import NavBar from "../../components/App"

class OrgForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      description: '',
      website: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: -1,
      country: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      type: 'State',
      description: 'Monitor water in TJ River',
      website: 'waterboards.ca.gov',
      email: 'info@waterboards.ca.gov',
      address: '123 Sesame St',
      city: 'San Diego',
      state: 'CA',
      zip: 92111,
      country: 'US',
    })
    console.log(this.state);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const name = target.name;
    this.setState({[name]: value});

    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = this.state;
    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    console.log(init);
    
    // TODO wait until user presses "submit" to POST everything
    fetch("api/contribute/organization", init)
    .then(response => {
      if (response.status > 400) {
        return this.setState(() => {
          return { placeholder: "Something went wrong!" };
        });
      }
      return response.json();
    })
    .then(data => {
      console.log("x", data);
      let id = data.id;
      console.log("ID", id);
      // this.setState(() => {
      //   return {
      //     data,
      //     loaded: true
      //   };
      // });
    });

  }
  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {
          Object.keys(this.state).map(field => {
          return (
            <label key={field}>
              {field.replace(field[0], field[0].toUpperCase())}
              <input
                name={field}
                type="text" // TODO make dynamic
                value={this.state.field}
                onChange={this.handleInputChange}
              />
              <br />
            </label>
          );
        })
        }
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default OrgForm;

const container = document.getElementById("contribute");

// Only render if the container is in the DOM
if (container != null) {
  render(<OrgForm />, container);
  console.log("Org", container);
}