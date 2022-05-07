
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home"
import Contribute from "./Contribute"
import Contribute1 from "./Contribute1"
import Contribute2 from "./Contribute2"
import Contribute3 from "./Contribute3"
import {BrowserRouter as Router, Switch, Route, Routes, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <NavBar></NavBar> 
        <Routes>
          <Route path='/Home' element={<Home/>} />
          <Route path='/Contribute' element={<Contribute/>} />
          <Route path='/Contribute1' element={<Contribute1/>} />
          <Route path='/Contribute2' element={<Contribute2/>} />
          <Route path='/Contribute3' element={<Contribute3/>} />
        </Routes>
      </div>    
    </BrowserRouter>
     
  );
}

export default App;

