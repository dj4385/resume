import React from 'react'

export const Header = ()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-md fixed-top bg-dark navbar-dark">
                <a className="navbar-brand" href="#home">Web Developer</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse d-flex justify-content-end navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">Work Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Recent Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>  
            </nav>
        </div>
    )
}