import React from 'react'
import '../assets/css/style.css'

export const RecentProject = ()=>{
    return(
        <div className="container-fluid bg-dark p-5">
            <h1 className="abtMe">Recent Projects</h1>
            <div className="row">
                <div className="col-lg-12 mt-4 p-5 eduBg">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="card p-3">
                                Card 1
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="card p-3">
                                Card 1
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="card p-3">
                                Card 1
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="card p-3">
                                Card 1
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}