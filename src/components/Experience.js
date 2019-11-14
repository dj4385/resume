import React from 'react'
import '../assets/css/style.css'

export const Experience = ()=>{
    return (
        <div className="container-fluid expBg p-5" id="experience">
            <h1 className="abtMe text-white">Experience</h1>
            <div className="row">
                <div className="col-lg-6 mt-4 pt-5 pl-2 pb-2">
                    <div className="card ExpcardBg p-3">
                        <p><span className="fa fa-calendar"></span>  June, 2019 - Present</p>
                        <p className="h3">Excelsior Softwares Pvt. Ltd.</p>
                        <p className="small">Bref the job</p>
                    </div>
                </div>
                <div className="col-lg-6 mt-4 pt-5 pb-2 pr-2">
                    <div className="card ExpcardBg p-3">
                        <p><span className="fa fa-calendar"></span>  Nov, 2018 - Apr, 2019</p>
                        <p className="h3">Kranti tech Services Pvt. Ltd.</p>
                        <p className="small">Bref the job</p>
                    </div>
                </div>
            </div>
        </div>
    )
}