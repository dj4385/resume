import React from 'react'
import './Home.css'
import Spider from '../assets/images/spiderman.jpg'

export const Home = ()=>{
    return (
        <div className="container-fluid p-5 bgImg">
            <div className="row">
                <div className="col-lg-12 p-5 text-center">
                   {/* <img src={Spider} className="img-fluid profile"></img> */}
                   <h1 className="text-white">I am Dheeraj Sharma</h1> 
                   <p className="text-white">He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>
                   <input type="button" value="Button 1" className="btn btn-outline-primary mr-3"></input>
                   <input type="button" value="Button 2" className="btn btn-outline-danger"></input>
                </div>
            </div>
        </div>
    )
}