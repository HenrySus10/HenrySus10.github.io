import React from "react";
//import Navitem from "./Navitem";
import {
  Link
} from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
/*
<a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/education">
        Education
      </a>
      <a className="menu-item" href="/skills">
        Skills
      </a>
*/
export default (props) => {
  return (
    <Menu {...props}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/education">Education</Link>
      <Link to="/skills">Skills</Link>
    </Menu>
  );
};