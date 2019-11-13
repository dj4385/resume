import React from 'react'
import '../assets/css/style.css'
import {Skills} from './Skills'
import dheeraj from '../assets/images/dheerajImg.jpg'

export const Home = ()=>{
    return (
        <div className="container-fluid p-5 bgImg">
            <div className="row pt-5 pb-5">
                <div className="col-lg-12 p-5 text-center">
                   <div className=" p-5">
                        <img src={dheeraj} alt="" className="img-fluid profile"></img>
                        <h1 className="name mb-3">I am Dheeraj Sharma</h1> 
                        <p className="subHeading">He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                        <div className="row">
                            <div className="col-lg-12">
                                <a href={Skills} className="btn btn-primary mr-3 text-white">
                                    <span className="fa fa-eye"></span> View Skills 
                                </a>
                                {/* need to change in button */}
                                <a href="mailto:dheeraj2406@outlook.com" className="btn btn-danger">
                                    <span className="fa fa-envelope-o"></span> Hire Me
                                </a>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}