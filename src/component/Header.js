import React, { Component } from 'react'
import '../style.css';

class Header extends Component {
    render() {
        return (
            <header>
        <div class="header">
            <div class="head">
                <h3> HELLO I'M </h3>
                <h1> Sarah hasan </h1>
                <div class="line"></div>
                <h3> Full Stack Developer </h3>
                <div class="buttons">
                    <div class="button"> <a href="Cv-saraLast.pdf" target="_blank"> DOWNLOAD CV </a> </div>
                    <div class="button"> <a href="#Portfolio" > PORTOFOLIO </a> </div>
                </div>
            </div>
        </div>  
    </header>
        )
    }
}

export default Header
