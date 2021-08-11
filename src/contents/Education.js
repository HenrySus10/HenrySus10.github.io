import React, { Component } from 'react';
import '../css/Education.css'
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv education">
                <h1 className="subtopic">Education</h1>
                <Widecard title="Computer Science and Engineering" where="University of California, Irvine" from="September, 2019" to="June, 2022"/>
                <br></br>
                <Widecard title="Student" where="American High School" from="August, 2015" to="June, 2019"/>
            </div>
        )
    }
}

export default Education