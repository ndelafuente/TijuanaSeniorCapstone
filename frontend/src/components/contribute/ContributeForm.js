import React, { Component } from 'react'
import { render } from "react-dom"
import ContactDetails from "./steps/ContactDetails"
import OrganizationDetails from "./steps/OrganizationDetails"
import ProjectDetails from "./steps/ProjectDetails"
import Confirmation from "./steps/Confirmation"

export default class ContributeForm extends Component {

  state = {
    step: 1,
    name: '',
    type: '',
    description: '',
    website: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    country: '',
    
    contact_name: '',
    contact_email: '',

    project_name: '',
    funding_agencies: '',
    params_default: [],
    params_other: '',
    location_name: '',
    latitude: '',
    longitude: '',
    is_active: false,
    start_date: '',
    end_date: '',
    purpose: ''
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => (e, newValue) => {
    if (input === 'params_default') {
      const params = newValue.map(option => option.value || option);
      this.setState({
        [input]: params
      })
      console.log('handleChange', params, this.state.params_default)
    }
    else {
      this.setState({ 
        [input]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
      });
    }
    console.log(this.state);
  }

  handleSubmit = (values) => {
    // Extract fields from state
    const { name, type, description, website, email, address, city, state, zip_code, country, contact_name, contact_email, project_name, funding_agencies, params_default, params_other, location_name, latitude, longitude, is_active, start_date, end_date, purpose } = this.state
    // Create a new dictionary of just the fields
    const org_values = { name, type, description, website, email, address, city, state, zip_code, country };

    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(org_values)
    };
    console.log(init);
    
    // TODO implement GET for existing Organization
    fetch("api/contribute/organization", init)
    .then(response => {
      if (response.status > 400) {
        console.log("Something went wrong!");
      }
      return response.json();
    })
    .then(data => {
      console.log("org", data);
      const fk_organization = data.id;
      const project_values = { fk_organization, contact_name, contact_email, project_name, funding_agencies, params_default, params_other, location_name, latitude, longitude, is_active, start_date, end_date, purpose };
      init.body = JSON.stringify(project_values);
      console.log(init.body);
      
      fetch("api/contribute/project", init)
      .then(response => {
        if (response.status > 400) {
          console.log("Something went wrong!", response.statusText);
        }
        return response.json();
      })
      .then(data => {
        console.log("project", data);
        // let id = data.id;
      });
    });
    
    this.nextStep()

  }

  render() {
    const { step } = this.state;
    // Extract fields from state
    const { name, type, description, website, email, address, city, state, zip_code, country, contact_name, contact_email, project_name, funding_agencies, params_default, params_other, location_name, latitude, longitude, is_active, start_date, end_date, purpose } = this.state
    // Create a new dictionary of just the fields
    const values = { name, type, description, website, email, address, city, state, zip_code, country, contact_name, contact_email, project_name, funding_agencies, params_default, params_other, location_name, latitude, longitude, is_active, start_date, end_date, purpose };

    switch(step) {
      case 1: 
        return (
          <ContactDetails 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
        return (
          <OrganizationDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 3: 
        return (
          <ProjectDetails 
            prevStep={ this.prevStep }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 4: 
          return (
            <Confirmation 
              prevStep={ this.prevStep }
              nextStep={ this.handleSubmit }
              values={ values }
            />
          )
      case 5: 
        return (
          <div>
            <h1>You are done!</h1>
          </div>
        )
      default: 
          // do nothing
    }
  }
}

const container = document.getElementById("contribute");

// Only render if the container is in the DOM
if (container != null) {
  render(<ContributeForm />, container);
  console.log("Contribute", container);
}