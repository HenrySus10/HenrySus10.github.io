import React, { Component } from 'react';
import Navitem from './Navitem';
import { slide as Menu } from "react-burger-menu";

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <Menu>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem><br></br>
            <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Education" tolink="/education"  activec={this.activeitem}></Navitem>
            <Navitem item="Skills" tolink="/skills"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
            </Menu>
            )
        }
    }
    
    export default Navbar