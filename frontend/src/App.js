import React from 'react';
import './App.css';
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Files from "./Components/Files";
import Contact from "./Components/Contact"
import Frontpage from "./Components/Frontpage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
      <Router>
        <div className="App">
          <NavBar/>
          <Switch/>
              <Route path="/" exact component={Frontpage} />
              <Route path="/About" component={About}/>
              <Route path="/Files" component={Files}/>
              <Route path="/Contact" component={Contact}/>
          <Switch/>
        </div>
    </Router>
  );
}

export default App;
