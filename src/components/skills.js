import React from 'react'
import './Skill.css'
import angular from '../assets/images/angular.png'
import express from '../assets/images/express.png'
import node from '../assets/images/node.png'
import mongo from '../assets/images/mongo.png'
import js from '../assets/images/js.png'
import bs4 from '../assets/images/bootstrap.jpg'
import html from '../assets/images/html1.jpg'
import css from '../assets/images/css.jpg'


export const Skills = ()=>{
    return (
        <div className="container-fluid bg-dark p-5">
            <h1 className="text-white abtMe">Skills</h1>
            <div className="row">
                <div className="col-lg-12 mt-4 pt-4 pl-5 pr-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={angular} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>Angular 6 and 7</b></p>
                                        <span className="progress-bar bg-danger progress-bar-striped ngprogressbar">Angular 6</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={angular} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>Reactjs </b> </p>
                                        <span className="progress-bar bg-primary progress-bar-striped reactprogressbar">Reactjs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 pt-4 pl-5 pr-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={node} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>Nodejs</b></p>
                                        <span className="progress-bar bg-dark progress-bar-striped nodeprogressbar">Nodejs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={express} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>Expressjs </b> </p>
                                        <span className="progress-bar bg-secondary mt-2 progress-bar-striped expressprogressbar">Express</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 pt-4 pl-5 pr-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={mongo} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>MongoDB </b> </p>
                                        <span className="progress-bar bg-success progress-bar-striped mongoprogressbar">MongoDB</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={js} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>JavaScript </b> </p>
                                        <span className="progress-bar bg-warning progress-bar-striped jsprogressbar">JavaScript</span>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 pt-4 pl-5 pr-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={angular} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>jQuery</b></p>
                                        <span className="progress-bar bg-danger progress-bar-striped jQueryprogressbar">jQuery</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={bs4} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>Bootstrap 3 and 4 </b> </p>
                                        <span className="progress-bar bg-success progress-bar-striped bootstrapprogressbar">Bootstrap</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 pt-4 pl-5 pr-5 pb-5 mb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={html} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>HTML</b> </p>
                                        <span className="progress-bar bg-dark progress-bar-striped htmlprogressbar">HTML</span>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-lg-2">
                                        <img src={css} alt="" className="img-fluid skillIcon" />
                                    </div>
                                    <div className="col-lg-10">
                                        <p className="pt-3"><b>CSS 3 </b> </p>
                                        <span className="progress-bar bg-warning progress-bar-striped cssprogressbar">CSS 3</span>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}