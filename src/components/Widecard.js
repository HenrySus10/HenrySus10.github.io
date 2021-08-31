import React, { Component } from 'react';
import '../css/Education.css'
import Fade from 'react-reveal/Fade';

class Widecard extends Component {
    render() {
        return(
            <div class="widecard">
                <Fade bottom>
                <div class="compdet">
                    <h3>
                        {this.props.title}
                    </h3>
                    <h4 class="secondtext">{this.props.where}</h4>
                    <h4 class="secondtext">{this.props.from} - {this.props.to}</h4>
                </div>
                </Fade>
            </div>
        )
    }
}

export default Widecard