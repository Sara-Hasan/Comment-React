import React, { Component } from 'react'
import '../style.css';

class Nav extends Component {
    render() {
        return (
            <nav>
                <input type="checkbox" id="check" />
                <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
                </label>
                <label class="logo"><a href="index.html"> <i class="fas fa-code"></i> SARAH HASAN </a> </label>
                <ul>
                    <li> <a href="#About"> About me  </a> </li>
                    <li> <a href="#Skill">  Skills </a></li>
                    <li> <a href="#Service">  Services </a></li>
                    <li> <a href="#Portfolio">  Portofolio </a></li>
                    <li> <a class="contact" href="#Contact">  Contact me </a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav
