import React from 'react'
import '../assets/css/style.css'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'

export const RecentProject = ()=>{
    return(
        <div className="container-fluid projectBg p-5" id="project">
            <h1 className="abtMe">Recent Projects</h1>
            <div className="row">
                <div className="col-lg-12 m-4 p-5 ">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card cardText p-3">
                                <img src={project1} className="img-fluid imgText" alt="" />
                                <div className="text text-center">
                                    <h4>My Health Scroll</h4>
                                    <a href="http://myprofile.myhealthscroll.com/login" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card cardText p-3">
                                <img src={project2} className="img-fluid imgText" alt="" />
                                <div className="text text-center">
                                    <h4>Niscaya Solutions</h4>
                                    <a href="https://www.niscayasolutions.in/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card cardText p-3">
                                <img src={project3} className="img-fluid imgText" alt="" />
                                <div className="text">
                                    <h4 className="text-center">Gym Management</h4>
                                    <a href="https://gymuiv1.herokuapp.com/" target="_blank"  rel="noopener noreferrer" className="btn btn-primary">View</a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3">
                            <div className="card p-3">
                                Card 1
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    )
}