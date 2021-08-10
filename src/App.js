import React from 'react';
import './App.css';
import
{
    BrowserRouter as Router,
    Route
}   from "react-router-dom";
import { ReactTitle, MetaTags } from 'react-meta-tags';

import BurgerMenu from './components/BurgerMenu'
//import Navbar from './components/Navbar'
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import Contact from './contents/Contact'



function App() {
    return(
        
        <Router>
            <div className="App">
                <ReactTitle title="Henry Susantin"/>
                <MetaTags>
                    <meta property="og:image" content="https://www.pcgamesn.com/wp-content/uploads/2021/07/genshin-impact-kokomi-release-date.jpg" />
                    <meta property="og:description" content="Henry Susantin is a current CSE student at UC Irvine with a love for coding, problem solving, and expanding his horizons." />
                    <meta property="og:url"content="http://henrysus10.github.io" />
                    <meta property="og:title" content="Henry Susantin" />
                </MetaTags>
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