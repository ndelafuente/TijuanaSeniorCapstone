import React, { Component } from 'react'
import { render } from "react-dom"
import ContactDetails from "./steps/ContactDetails"
import OrganizationDetails from "./steps/OrganizationDetails"
import ProjectDetails from "./steps/ProjectDetails"
import Confirmation from "./steps/Confirmation"

export default class ContributeForm extends Component {

  state = {
    step: 1,
    org_name: '',
    org_type: '',
    org_description: '',
    org_website: '',
    org_email: '',
    org_address: '',
    org_city: '',
    org_state: '',
    org_zip_code: '',
    org_country: '',
    
    contact_name: '',
    contact_email: '',

    project_name: '',
    funding_agencies: '',
    params_default: '',
    params_other: '',
    location_name: '',
    latitude: '',
    longitude: '',
    is_active: '',
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
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    console.log(this.state);
  }

  render() {
    const { step } = this.state;
    // Extract fields from state
    const { org_name, org_type, org_description, org_website, org_email, org_address, org_city, org_state, org_zip_code, org_country, contact_name, contact_email, project_name, funding_agencies, params_default, params_other, location_name, latitude, longitude, is_active, start_date, end_date, purpose } = this.state
    // Create a new dictionary of just the fields
    const values = { org_name, org_type, org_description, org_website, org_email, org_address, org_city, org_state, org_zip_code, org_country, contact_name, contact_email, project_name, funding_agencies, params_default, params_other, location_name, latitude, longitude, is_active, start_date, end_date, purpose };

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
              nextStep={ this.nextStep }
              values={ values }
            />
          )
      case 4: 
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