import React, { useEffect, useState } from 'react'
import './footer.css'

export default function Footer() {
  
  const [showScrollBtn, setShowScrollBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScrollBtn(true);
      } else { setShowScrollBtn(false) }

    }
    )
  }

    , [])
  return (
    <>
      <footer className='flex'>
        <div>Made by Karim Alaa © 2024 . All rights reserved.</div>

        {showScrollBtn && <a href="#top"><button className='scroll-top icon-keyboard_arrow_up'></button></a>}

      </footer>

    </>
  )
}
