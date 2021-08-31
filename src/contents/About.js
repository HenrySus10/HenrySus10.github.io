import React, { Component } from 'react';
import BGParticles from "../components/BGParticles"
import Fade from 'react-reveal'
import '../css/About.css'

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <BGParticles/>
                <div id="content">
                    <Fade bottom>
                    <h1 className="subtopic">About Me</h1>
                    </Fade>
                    <br></br>
                    <Fade bottom>
                    <p id="aboutText">
                        Hi! My name is Henry Susantin and I'm a current CSE student at UC Irvine. I'm a problem solver at heart,
                        with an affinity for computer science and new subjects. In my spare time, I enjoy video games, music mixing,
                        composition, and playing, as well as making quirky side projects for my own amusement.
                    </p>
                    </Fade>
                </div>
                
            </div>
        )
    }
}

export default About