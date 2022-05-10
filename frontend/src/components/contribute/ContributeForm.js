import React, { Component } from 'react'
import { render } from "react-dom"
import ContactDetails from "./steps/ContactDetails"
import OrganizationDetails from "./steps/OrganizationDetails"
import ProjectDetails from "./steps/ProjectDetails"
import Confirmation from "./steps/Confirmation"

export default class ContributeForm extends Component {

  state = {
    step: 1,
    email: '',
    username: '', 
    password: '',
    firstName: '',
    lastName: '',
    country: '',
    levelOfEducation: '',
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
  }

  render() {
    const { step } = this.state;
    const { email, username, password, firstName, lastName, country, levelOfEducation } = this.state;
    const values = { email, username, password, firstName, lastName, country, levelOfEducation }
    
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