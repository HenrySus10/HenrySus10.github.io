import React from 'react';
import './App.css';

import
{
    BrowserRouter as Router,
    Route
}   from "react-router-dom";

import BurgerMenu from './components/BurgerMenu';
import './css/Menu.css'

import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';



function App() {
    return(
        
        <Router>
            <div className="App">
                <BurgerMenu pageWrapId={"page-wrap"} outerContainerId={"App"} width={'15%'}/>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/education">
                    <Education />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </div>
        </Router>
    )
}

export default App;