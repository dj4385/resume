import React from 'react'
import '../assets/css/style.css'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project3 from '../assets/images/project3.png'

export const RecentProject = ()=>{
    return(
        <div className="container-fluid projectBg p-5">
            <h1 className="abtMe">Recent Projects</h1>
            <div className="row">
                <div className="col-lg-12 m-4 p-5 ">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card cardText p-3">
                                <img src={project1} className="img-fluid imgText" alt="" />
                                <div className="text text-center">
                                    <h4>My Health Scroll</h4>
                                    <button className="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card cardText p-3">
                                <img src={project2} className="img-fluid imgText" alt="" />
                                <div className="text text-center">
                                    <h4>Niscaya Solutions</h4>
                                    <button className="btn btn-primary">View</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card cardText p-3">
                                <img src={project3} className="img-fluid imgText" alt="" />
                                <div className="text">
                                    <h4 className="text-center">Gym Management</h4>
                                    <button className="btn btn-primary">View</button>
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