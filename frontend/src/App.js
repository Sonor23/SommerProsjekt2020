import React from 'react';
import './App.css';
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Files from "./Components/Files";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route path="/About" component={About}/>
          <Route path="/Files" component={Files}/>
        </div>
    </Router>
  );
}

export default App;
