import React from 'react'
import {Header} from '../components/Header'
import {Home} from '../components/Home'
import {About} from '../components/About'
import {Education} from '../components/Education'
import {Skills} from '../components/Skills'
import {Experience} from '../components/Experience'
import {RecentProject} from '../components/RecentProject'
import {Contact} from '../components/Contact'

export const Resume = ()=>{
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Experience></Experience>
            <RecentProject></RecentProject>
            <Contact></Contact>
        </div>
    )
}