import React from 'react';
// import NavBar from "./components/NavBar";
import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Projects from "./views/Projects";
import About from "./views/About";
import Claim from "./components/ContactForm/";

function App() {
  return (
      <div className="App">
          <div className="wrapper">
            {/* <NavBar /> */}
            <Main />
            <Projects />
            <About />
            <Claim />
          </div>
      </div>
  );
}

export default App;

            // <Main />
            // <Projects />
            // <About />
            // <Claim />
