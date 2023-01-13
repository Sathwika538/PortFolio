import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import App from "./components/App";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
ReactDOM.render(
    <Router>
       <Routes>
       <App />
       <Route exact path="/"  element={<App />}/>
            <Route exact path="/about"  element={<About />}/>
            
          <Route exact path="/projects">
            <Projects />
          </Route>
         
          <Route exact path="/contact">
            <Contact />
          </Route>
           </Routes>
    </Router>,
    document.getElementById('root')
);
