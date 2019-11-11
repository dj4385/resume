import React from 'react'
import './Skill.css'
import express from '../assets/images/express.png'
import css from '../assets/images/css.jpg'

export const Skills = ()=>{
    return (
        <div className="container-fluid bg-dark p-5">
            <h1 className="abtMe">Skills</h1>
            <div className="row">
                <div className="col-lg-12 mt-4 pt-4 pl-5 pr-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="progress-bar bg-danger progress-bar-striped ngprogressbar">Angular 6</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                            <div className="progress-bar bg-primary progress-bar-striped reactprogressbar">Reactjs</div>
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
                                <div className="progress-bar bg-dark progress-bar-striped nodeprogressbar">Nodejs</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <img src={express} className="img-fluid skillIcon" alt =""/>
                                <div className="progress-bar bg-secondary mt-2 progress-bar-striped expressprogressbar">Express</div>
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
                            <   div className="progress-bar bg-success progress-bar-striped mongoprogressbar">MongoDB</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="progress-bar bg-warning progress-bar-striped jsprogressbar">JavaScript</div>
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
                                <img src={css} className="img-fluid skillIcon" alt =""/>    
                                <div className="progress-bar bg-danger progress-bar-striped jQueryprogressbar">jQuery</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                                <div className="progress-bar bg-success progress-bar-striped bootstrapprogressbar">Bootstrap</div>
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
                            <div className="progress-bar bg-dark progress-bar-striped htmlprogressbar">HTML</div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card p-3">
                            <div className="progress-bar bg-warning progress-bar-striped cssprogressbar">CSS 3</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}