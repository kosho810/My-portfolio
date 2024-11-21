import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developer from '../../animation/developer.json';
import { motion } from "framer-motion"
import { useTypewriter, cursor } from "react-simple-typewriter";

export default function Hero() {
const[typeEffect]=useTypewriter({
  words:['Frontend Web Developer |','UI developer |'],
  loop:{},
  typeSpeed:100,
  deleteSpeed:40
})

  return (
    <>
      <section className="hero flex">
        <div className="left-section ">
          <div className="profile-img flex">
            <motion.img
             initial={{scale:0}}
             animate={{scale:1}}
             transition={{bounceDamping:1,type:'spring'}}
            className="avatar" src="./profile-img2.jpg" alt="" />
            <span className="icon-verified"></span>
          </div>
          <motion.h1
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.2}}
          className="title">This's Karim Alaa <br /><span>'{typeEffect}'</span></motion.h1>
          <p className="about-me">
            I'm Excited about web development, I
            am poised to leverage my diverse skill set for exciting career
            opportunities. Open to collaborations, learning experiences, and
            contributing to projects that push the boundaries of innovation.
            <br />
            Let's connect and explore how much can i bring value to your team or project
          </p>

          <div className="icons flex">
           
            <div onClick={() => {
              window.open('https://github.com/kosho810')
            }
            } className="icon icon-github"></div>
            <div onClick={() => {
              window.open('https://www.linkedin.com/in/karim-alaa-4a975229a/')
            }
            } className="icon icon-linkedin-square"></div>
          </div>
          <button className="cv-button flex" onClick={() => {
            window.open('https://drive.google.com/file/d/1jqWi1-vmNWtlGiK5emsoBy-naPZUXdX5/view?usp=drive_link')
          }
          }><h3 >Download CV</h3></button>
        </div>
        <div className="right-section animation "><Lottie   animationData={developer} /></div>
      </section>
    </>
  );
}
