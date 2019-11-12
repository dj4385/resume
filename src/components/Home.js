import React from 'react'
import '../assets/css/style.css'
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
                                <button type="button" className="btn btn-primary mr-3">
                                    <span className="fa fa-eye"></span> View Skills 
                                </button>
                                <button className="btn btn-danger">
                                    <span className="fa fa-envelope-o"></span> Hire Me
                                </button>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}