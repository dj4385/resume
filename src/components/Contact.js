import React from 'react'
import '../assets/css/style.css'

export const Contact = ()=>{
    return(

        <div className="container-fluid p-5 contactBg" id="contact">
            <h1 className="abtMe text-white">My Contact Details</h1>
            <div className="row">
                <div className="col-lg-12 mt-3 pl-2 pr-2 pb-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card cardBg pl-3 pt-5 pr-3">
                                <p><b>Email:</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:dheeraj2406@outlook.com" className="text-white"><span className="fa fa-envelope-o"></span> dheeraj2406@outlook.com</a></p>
                                <p><b>Phone :</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp; <a href="tel:8745006149" className="text-white"> <span className="fa fa-phone"></span> 8745006149</a></p>
                                <p><b>Address:</b> <br /> &nbsp;&nbsp;&nbsp;&nbsp; <span className="fa fa-map-marker"></span>  New Delhi, India</p>
                                <div className="mt-5">
                                    <p><b>Socal Links:</b></p>
                                    <ul className="socialLink">
                                        <li><a href="https://www.facebook.com/dj4385" target="_blank" rel="noopener noreferrer"><span className="fa fa-2x fa-facebook-official"></span></a></li>
                                        <li><a href="https://www.linkedin.com/in/dheeraj-sharma-3b5262141/" rel="noopener noreferrer" target="_blank"><span className="fa fa-2x fa-linkedin-square"></span></a></li>
                                        <li><a href="https://github.com/dj4385" rel="noopener noreferrer" target="_blank" className="text-dark"><span className="fa fa-2x fa-github"></span></a></li>
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