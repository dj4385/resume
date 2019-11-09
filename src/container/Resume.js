import React from 'react'
import {Header} from '../components/Header'
import {Home} from '../components/Home'
import {About} from '../components/About'
import {Education} from '../components/Education'

export const Resume = ()=>{
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <About></About>
            <Education></Education>
        </div>
    )
}