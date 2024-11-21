import React, { useState, useEffect } from 'react'
import './header.css'
export default function Header() {

    const [showModal, setShowModal] = useState(false);



    const [theme, setTheme] = useState( localStorage.getItem("currentMode") ?? "dark");


    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
        }else{document.body.classList.remove('light');
            document.body.classList.add('dark');}

    }, [theme]);

    return (
        <>
            <header id='top' className='flex'>
                <button className='menu icon-menu' onClick={() => { setShowModal(true) }}>

                </button>
                <div />
                <nav >
                    <ul className='flex'>
                        <li><a href="">Abour</a></li>
                        <li><a href="#skills-sec">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>

                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>


                <button onClick={() => {
                    // send value to local storage 
                    localStorage.setItem('currentMode',theme=== 'light'?'dark':'light')

                    // get value from local storage
                    setTheme(localStorage.getItem('currentMode'))

                }
                } className='mode'>
                   {theme=='dark'?<span className='icon-moon-o '></span>:<span className='icon-sun-stroke'></span>} 

                </button> 
                

                {showModal && (
                    <div className=" layer">

                        <ul className="modal ">
                            <li><button className='icon-close' href="" onClick={() => { setShowModal(false) }}></button></li>
                            <li><a onClick={() => { setShowModal(false) }} href="">About</a></li>
                            <li><a onClick={() => { setShowModal(false) }} href="">Skills</a></li>
                            <li><a onClick={() => { setShowModal(false) }} href="#projects">Projects</a></li>
                            <li><a onClick={() => { setShowModal(false) }} href="#contact">Contact</a></li>
                        </ul>

                    </div>
                )}

            </header >
        </>

    )
}
