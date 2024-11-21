import React, { useState } from 'react'
import './main.css'
import { motion, AnimatePresence } from "framer-motion";


const myProjects = [
  { projectTitle: 'daniels', productDisc: 'Made with HTML ,Bootstrap and CSS', projectCategory: 'css', imgPath: './daniels.png', liveDemo: 'https://kosho810.github.io/Daniels/', gitHub: 'https://github.com/kosho810/Daniels' },
  { projectTitle: 'Meal', productDisc: 'Made with HTML ,Bootstrap and CSS', projectCategory: 'css', imgPath: './mealify.png', liveDemo: 'https://kosho810.github.io/Mealify-restaurant-/', gitHub: 'https://github.com/kosho810/Mealify-restaurant-' },
  { projectTitle: 'weather app', productDisc: 'Made using Javascript and API', projectCategory: 'js', imgPath: './weather.jpg', liveDemo: 'https://kosho810.github.io/weatherApp/', gitHub: 'https://github.com/kosho810/weatherApp' },
  { projectTitle: 'Bookmarker', productDisc: 'Made with Javascript by Using concept of CRUD', projectCategory: 'js', imgPath: './bookmarker.png', liveDemo: 'https://kosho810.github.io/Bookmarker/', gitHub: 'https://github.com/kosho810/Bookmarker' },
  { projectTitle: 'Yummy App', productDisc: 'Made using Javascript , API', projectCategory: 'js', imgPath: './yummy.png', liveDemo: 'https://kosho810.github.io/yummy.meals/', gitHub: 'https://github.com/kosho810/yummy.meals' },
  { projectTitle: 'react router', productDisc: 'Made using React framework , React-Router-DOM', projectCategory: 'react', imgPath: './router.png', liveDemo: 'https://kosho810.github.io/react-router/#/portfolio', gitHub: 'https://github.com/kosho810/react-router' },
  { projectTitle: 'E-commerce', productDisc: 'Made using React framework , React-Router-DOM,API,Login authentication', projectCategory: 'react', imgPath: './freshCart.png', liveDemo: 'https://kosho810.github.io/E-commerce/', gitHub: 'https://github.com/kosho810/E-commerce' },
]

const cssProjects = myProjects.filter((item) => {
  return (item.projectCategory === 'css')
}
)

const jsProjects = myProjects.filter((item) => {
  return (item.projectCategory === 'js')
}
)

const reactProjects = myProjects.filter((item) => {
  return (item.projectCategory === 'react')
}
)
export default function Main() {

  const [active, setActive] = useState('all');
  const [array, setArray] = useState(myProjects);

  return (
    <>
      <main id='projects' className='flex'>
        <section className="left-section  flex ">
          <button onClick={() => {
            setActive('all');
            setArray(myProjects);
          }
          } className={active === 'all' ? "active" : null}>All Projects</button>

          <button onClick={() => {
            setActive('css');
            setArray(cssProjects);
          }
          } className={active === 'css' ? "active" : null}>HTML & CSS</button>

          <button onClick={() => {
            setActive('js');
            setArray(jsProjects);
          }
          } className={active === 'js' ? "active" : null}>Javascript</button>

          <button onClick={() => {
            setActive('react');
            setArray(reactProjects);
          }
          } className={active === 'react' ? "active" : null} >React</button>
        </section>
        <section className="right-section   flex">
          <AnimatePresence>
            {array.map((item) => {
              return (
                <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item} className='flex '>


                  <div className="card">
                    <img width={266} height={150} src={item.imgPath} alt="" />
                    <div style={{ width: "266px" }} className="box ">
                      <h1 className='title'>
                        {item.projectTitle}
                      </h1>
                      <p className="subtitle">
                        {item.productDisc}
                      </p>
                      <div className="flex icons">
                        <div style={{ gap: "10px" }} className='flex'>
                          <span onClick={() => { window.open(item.liveDemo) }} className='icon-link'></span>
                          <span onClick={() => { window.open(item.gitHub) }} className='icon-github'></span>
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.article>
              )
            }
            )}
          </AnimatePresence>
        </section>
      </main>



    </>

  )
}
