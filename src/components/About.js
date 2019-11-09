import React from 'react'
import './About.css'
import SpiderMan from '../assets/images/spiderman.jpg'

export const About = ()=>{
    return (
        <div className="container-fluid p-5 bg-primary">
            <div className="row">
                <div className="col-lg-12 text-left">
                    <h1 className="abtMe">About Me</h1>
                </div>
            </div>
            <div className="row mr-5 ml-5 mt-5">
                <div className="col-lg-3">
                    <img src={SpiderMan} alt="" className="img-fluid profile"></img>
                </div>
                <div className="col-lg-9 p-5 border border-dark">
                    <h3>Hello,</h3>
                    <p>I am Bako Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress.</p>
                    <div className="row">
                        <div className="col-lg-6">Name</div>
                        <div className="col-lg-6">DOB</div>
                        <div className="col-lg-6">Location</div>
                        <div className="col-lg-6">Email</div>
                        <div className="mt-4 ml-3">
                            <input type="button" value="Download CV" className="btn btn-outline-dark mr-3"></input>
                            <input type="button" value="Hire Me" className="btn btn-outline-danger"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}