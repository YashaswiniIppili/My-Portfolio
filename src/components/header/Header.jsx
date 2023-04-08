import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm </h5>
        <h1>Yashaswini Ippili</h1>
        <br />
        <HeaderSocials />
        <div>
        I'm a student from 4th sem, CSE, PES University, who's passionate about coding! Had a thing for it since back then but only YOU could convert your dreams into a reality. Working on getting better at it. AI&ML kind of person.
        <br/>
        I'd say I'm good at multi-tasking, time-management, communicating, working with a team and as an individual.
        </div>
        <br/>
        <div className="me">
          <img src={ME} alt="Myself" />
        </div>
      </div>
    </header>
  )
}

export default Header
