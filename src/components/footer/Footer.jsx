import React from 'react'
import './footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Portfolio</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Education</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://t.me/yashaswiniippili/" target = "_blank"><FaTelegramPlane/></a>
        <a href="https://www.instagram.com/yashaswini.ippili/" target="_blank"><AiFillInstagram/></a>
        <a href="https://twitter.com/yashaswinippili" target="_blank"><BsTwitter/></a>
        <a href="https://www.linkedin.com/in/yashaswini-ippili-0b9147241/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/YashaswiniIppili" target="_blank"><BsGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer