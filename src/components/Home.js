import React from 'react'
import './Home.css'

export const Home = ()=>{
    return (
        <div className="container-fluid p-5 bgImg">
            <div className="row pt-5 pb-5">
                <div className="col-lg-12 p-5 text-center">
                   <div className="card p-5">
                        <h1 className="name">I am Dheeraj Sharma</h1> 
                        <p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                        <div className="row">
                            <div className="col-lg-12">
                                <button type="button" className="btn btn-outline-primary mr-3">
                                    <span className="fa fa-eye"></span> View Skills 
                                </button>
                                <button className="btn btn-outline-danger">
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