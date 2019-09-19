import React from 'react';
import './styles.scss';
import logo from  './../../logo.png';

export default function Navbar(){
    return <nav className="navbar" data-test="navbarComponent">
        <img src={logo} alt='tours logo' data-test="logoIMG"/>
        <ul className="nav-links" data-test="navLinksComponent">
            <li>
                <a href="/" className="nav-link" data-test="homeNavlinkComponent">Home</a>
            </li>
            <li>
                <a href="/" className="nav-link" data-test="aboutNavlinkComponent">About</a>
            </li>
            <li>
                <a href="/" className="nav-link active" data-test="tourNavlinkComponent">Tours</a>
            </li>
        </ul>
    </nav>
}