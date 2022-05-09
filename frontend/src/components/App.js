import React, { Component } from "react";
import { render } from "react-dom"

import './App.css';
import OrgPage from './Org'
import AlvarosMap from "./AlvarosMap";
import NavBar from "./NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructing");
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    console.log("giddy-up");
  }

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <NavBar />
        
      </div>    
    );
  }
}

export default App;

const container = document.getElementById("app");

// Only render if the container is in the DOM
if (container != null) {
  render(<App />, container);
  console.log("App", container);
}