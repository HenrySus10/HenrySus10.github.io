import React, { Component } from 'react';
import Social from '../components/Social'

//import profilepic from '../img/cringe.jpg';
import ReactTypingEffect from 'react-typing-effect';
import Particles from "react-particles-js"

import '../css/Home.css'

function BGParticles() {
    return (
      <>
        <Particles
          params={{
            background: {
              color: {
                value: "#282625",
              },
            },
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
              color: {
                value: "#12EACE",
              },
  
              links: {
                color: {
                  value: "#12EACE",
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </>
    );
  }


//<img src={profilepic} alt="ProfilePic" className="profilepic" width="50%"></img><br></br>
//<Particle outerContainerId={"condiv"} className="bg"/>
/*
ReactTypingEffect style={{position: "absolute"}} outerContainerId={"condiv"} className="typingeffect" text={['I\'m Henry Susantin','This is my website!']} speed={100} eraseDelay={700}/>
            <Social />
            <h1 style={{position: "fixed"}}>Hello</h1>
            */
class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <div id="tsparticles">
                  <BGParticles />
                </div>
                
                <div id="home-text">
                  <h1 id="title">Henry Susantin</h1>
                  <ReactTypingEffect id="typingeffect" text={['Hi!', 'I\'m Henry Susantin.','This is my website!']} speed={100} eraseDelay={700}/>
                </div>
            
            </div>
        )
    }
}

export default Home