import React from 'react'
import '../assets/css/style.css'
import dheeraj from '../assets/images/dheeraj.png'

export const About = ()=>{
    var name = "Dheeraj Sharma",
        dob = "24-June-1994",
        location = "Delhi, India",
        email = "dheeraj2406@outlook.com"

    return (
        <div className="container-fluid p-5 bg-primary">
            <div className="row">
                <div className="col-lg-12 text-left">
                    <h1 className="abtMe">About Me</h1>
                </div>
            </div>
            <div className="row mr-5 ml-5 mt-5">
                <div className="col-lg-3">
                    <img src={dheeraj} alt="" className="img-fluid profile"></img>
                </div>
                <div className="col-lg-9 p-5">
                    <h3>Hello,</h3>
                    <p>I am {name}, web developer from {location}. I have rich experience in web development design and building and customization, also I am good at Angular, Reactjs, Nodejs, Express and MonogDB.</p>
                    <div className="row">
                        <div className="col-lg-6"><p> <span className="fa fa-user-circle-o"></span>  Name: {name}</p></div>
                        <div className="col-lg-6"><p> <span className="fa fa-calendar"></span> DOB: {dob}</p> </div>
                        <div className="col-lg-6"><p> <span className="fa fa-map-marker"></span> Location: {location} </p></div>
                        <div className="col-lg-6"><p> <span className="fa fa-envelope"></span> Email: {email} </p> </div>
                        <div className="mt-4 ml-3">
                            <button type="button" className="btn btn-outline-dark mr-3">
                                <span className="fa fa-download"></span> Download CV
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <span className="fa fa-envelope-o"></span> Hire Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}