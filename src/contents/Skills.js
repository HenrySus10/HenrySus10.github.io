import React, { Component } from 'react';
import '../css/Skills.css'
import Flexbox from 'flexbox-react';
import Fade from 'react-reveal/Fade';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state={
            'languages':['Python', 'C++', 'C', 'Java', 'HTML', 'CSS', 'PHP', 'JavaScript'],
            'skills':['Data Structures and Algorithms',
            'Version Control (GIT)',
            'JavaScript Frameworks (REACT)',
            'Software Development (AGILE)',
            'Web Security (Burp)'],
            'interests':['Code-Based CTF Challenges',
            'Artificial Intelligence and Machine Learning',
            'Computer Vision',
            'Tomography',
            'Robotics',
            'Full-Stack Web Application']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                
                <Flexbox flexDirection="column" minHeight="100vh">
                    <Fade bottom>
                    <Flexbox flexDirection="column" className="skills">
                        <h1 className="subtopic">Skills</h1>
                    </Flexbox>
                    </Fade>
                    <Fade bottom>
                    <Flexbox flexDirection="row">
                        <Flexbox flexGrow={1} flexDirection="column" className="content">
                            <h2>Languages</h2>
                            <br></br>
                                {this.state.languages.map((value)=>{
                                    return<p>{value}</p>
                                })}
                        </Flexbox>
                        <Flexbox flexGrow={1} flexDirection="column" className="content">
                            <h2>Skills</h2>
                            <br></br>
                                {this.state.skills.map((value)=>{
                                    return<p>{value}</p>
                                })}
                        </Flexbox>
                        <Flexbox flexGrow={1} flexDirection="column" className="content">
                            <h2>Interests</h2>
                            <br></br>
                                {this.state.interests.map((value)=>{
                                    return<p>{value}</p>
                                })}
                        </Flexbox>
                    </Flexbox>
                    </Fade>
                </Flexbox>
                
            </div>
        )
    }
}

export default Skills