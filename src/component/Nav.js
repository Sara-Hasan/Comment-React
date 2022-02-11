import React, { Component } from "react";
import "../style.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <label className="logo">
          <a href="index.html">
            {" "}
            <i className="fas fa-code"></i> SARAH HASAN{" "}
          </a>{" "}
        </label>
        <ul>
          <li>
            {" "}
            <Link to="/register"> Register </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/login"> Login </Link>{" "}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
