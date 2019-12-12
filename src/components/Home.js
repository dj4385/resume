import React from 'react'
import '../assets/css/style.css'
import {Skills} from './Skills'
import dheeraj from '../assets/images/dheerajImg.jpg'

export const Home = ()=>{
    return (
        <div className="container-fluid p-5 bgImg" id="home">
            <div className="row pt-5 pb-5">
                <div className="col-lg-12 text-center">
                        <img src={dheeraj} alt="" className="img-fluid mb-2 profile"></img>
                        <h1 className="name">I am Dheeraj Sharma</h1> 
                        <p className="subHeading">I am a web developer and programmer living in Delhi, India. I make web applications, usually with Node.js, Express, MongoDB and (Angular 7 and Reactjs)</p>
                        <div className="row">
                            <div className="col-lg-12">
                                <a href="#skill" className="btn btn-primary mr-3 mb-2 text-white">
                                    <span className="fa fa-eye"></span> View Skills 
                                </a>
                                {/* need to change in button */}
                                <a href="mailto:dheeraj2406@outlook.com" className="btn mb-2 btn-danger">
                                    <span className="fa fa-envelope-o"></span> Hire Me
                                </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}