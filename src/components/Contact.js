import React from 'react'
import './contact.css'

export const Contact = ()=>{
    return(

        <div className="container-fluid bg-success p-5">
            <h1 className="abtMe">My Contact Details</h1>
            <div className="row">
                <div className="col-lg-12 mt-4 p-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card p-5">
                                <p><b>Email:</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp; <span className="fa fa-envelope-o"></span> dheeraj2406@outlook.com</p>
                                <p><b>Phone :</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp; <span className="fa fa-phone"></span> +91 8745006149</p>
                                <p><b>Address:</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp; <span className="fa fa-map-marker"></span>  New Delhi, India</p>
                                <div className="mt-5">
                                    <p><b>Socal Links:</b></p>
                                    <ul className="socialLink">
                                        <li><a href="#"><span className="fa fa-2x fa-facebook-official"></span></a></li>
                                        <li><a href="#"><span className="fa fa-2x fa-linkedin-square"></span></a></li>
                                        <li><a href="#" className="text-dark"><span className="fa fa-2x fa-github"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}