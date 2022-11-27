import React from 'react'
import './about.css'
import ME from '../../assets/2.jpg'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="myself" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>Education</h5>
              <small>I to VIII : New Baldwin International School <br/>
              IX to XII : Narayana <br/>Currently pursuing my BTech in CSE from PES University. </small>
            </article>

            <article className='about__card'>
              <h5>Achievements</h5>
              <small>Sports : Athletics, 5ks, Relays & Sprints and Inline Skating. <br/>
                Olympiads : UCO, PRMO, RMO, NSTSE, UIEO, AMTI.  <br/>
                Worked on a NASA Space Colonization Project.
              </small>
            </article>

            <article className='about__card'>
              <h5>Hobbies</h5>
              <small>Running, Inline Skating, Baking, Listening to Music, Reading Novels, Teaching my brother Math, Playing badminton, Coding.</small>
            </article>
          </div>
          <p>
            In regard to my duration in PES University, I've been a part of many amazing things. Taken part in a couple of hackathons, volunteered for a number of things and AT has been the best.
          </p>
          
        </div>
      </div>
    </section>
  )
}

export default about