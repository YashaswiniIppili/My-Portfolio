import React from 'react'
import './navbar.css'
import {AiFillHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillBookFill} from 'react-icons/bs'
import {useState} from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBookFill/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillTelephoneFill/></a>
    </nav>
  )
}

export default Navbar
