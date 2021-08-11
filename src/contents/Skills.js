import React, { Component } from 'react';
import '../css/Skills.css'

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state={
            'languages':['Python', 'C++', 'C', 'Java', 'HTML', 'CSS', 'PHP', 'JavaScript'],
            'skills':['Data Structures and Algorithms',
            'Version Control (GIT)',
            'JavaScript Frameworks (REACT)',
            'Software Development (AGILE)',
            'Web Security (Burp)']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Skills</h1>
                <ul>
                    {this.state.languages.map((value)=>{
                        return<li>{value}</li>
                    })}
                </ul>
                <br></br>
                <ul>
                    {this.state.skills.map((value)=>{
                        return<li>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills