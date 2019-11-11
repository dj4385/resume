import React from 'react'

export const Experience = ()=>{
    return (
        <div className="container-fluid bg-success p-5">
            <h1 className="abtMe">Experience</h1>
            <div className="row">
                <div className="col-lg-6 mt-4 pt-5 pl-5 pb-5">
                    <div className="card p-5">
                        <p><span className="fa fa-calendar"></span>  June, 2019 - Present</p>
                        <p className="h3">Excelsior Softwares Pvt. Ltd.</p>
                        <p className="small">Bref the job</p>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 pt-5 pb-5 pr-5">
                    <div className="card p-5">
                        <p><span className="fa fa-calendar"></span>  Nov, 2018 - Apr, 2019</p>
                        <p className="h3">Kranti tech Services Pvt. Ltd.</p>
                        <p className="small">Bref the job</p>
                    </div>
                </div>
            </div>
        </div>
    )
}