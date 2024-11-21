import React from 'react'
import './skills.css'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiJquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";





export default function Skills() {
    return (
        <>
            <section id='skills-sec' className='skill-section flex'>
                <h1 className='title'>Skills</h1>
                <div className='skills flex'>
                    <FaHtml5 className='skill' />
                    <IoLogoCss3 className='skill'/>
                    <IoLogoJavascript className='skill' />
                    <SiJquery className='skill' />
                    <FaBootstrap className='skill' />
                    <FaReact className='skill' />
                    <RiTailwindCssFill className='skill' />
                    <FaGit className='skill'/>
                    <FaGithub className='skill'/>

                </div>

            </section>

        </>
    )
}
