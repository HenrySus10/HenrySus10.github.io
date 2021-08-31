import { Component } from 'react';
import Particles from "react-particles-js";


class BGParticles extends Component {


  render() {
    return (
    
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
      
    );
  }
}

export default BGParticles;