import React, { Component } from 'react';
import Social from '../components/Social'

//import profilepic from '../img/cringe.jpg';
import ReactTypingEffect from 'react-typing-effect';
//import Particles from "react-particles-js"
import BGParticles from "../components/BGParticles"
import Fade from 'react-reveal/Fade';

import '../css/Home.css'


class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <div id="tsparticles">
                  <BGParticles />
                </div>
                <Fade>
                  <div id="home-text">
                    <h1 id="title">Henry Susantin</h1>
                    <ReactTypingEffect id="typingeffect" text={['Hi!', 'I\'m Henry Susantin.','This is my website!']} speed={100} eraseDelay={400}/>
                  </div>
                </Fade>
            </div>
        )
    }
}

export default Home