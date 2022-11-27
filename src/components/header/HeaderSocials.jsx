import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/yashaswini-ippili-0b9147241/" target="_blank"><BsLinkedin/>  Linkedin</a>
        <a href="https://github.com/YashaswiniIppili" target="_blank"><BsGithub/> Github</a>
    </div>
  )
}

export default HeaderSocials