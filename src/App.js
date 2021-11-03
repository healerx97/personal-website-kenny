import './App.css';
import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom"
import {useHistory} from "react-router-dom"

// import components
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import Projects from "./Components/Projects"
import About from "./Components/About"


function App() {
  return (
    <div className="App">
      <div class='relative'>
      <NavBar/>
    
      <Switch>
        <Route path="/projects" component={() => <Projects/>} />
        <Route path="/about" component={()=> <About/>} />
        <Route path="/" component={()=> <Home />} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
