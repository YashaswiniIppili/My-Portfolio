import React from 'react'
import './portfolio.css'
import CTA from './CTA'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Work</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <h3>PESU IO'22</h3>
            <small>The course I enrolled myself into was Explainable AI. I've learnt about concepts like LIME & SHAP. Curated the final project where we created a model that would categorize a YT video's comments into spam or not spam.</small>
        </article>
        <article className='portfolio__item'>
            <h3>The Hands of Hope Foundation'22</h3>
           <small>Made it to Top 8 teams out of 30+ teams held by AIKYA. We helped the NGO by making a website that would connect to people suffering from trauma etc.</small>
        </article>
        <article className='portfolio__item'>
            <h3>KodiKon'22</h3>
            <small>Made it to Top 30 out of 210+ teams held by the Embrione Club, Worked on helping the government with promoting Online Education. Created a portal that contained videos, accepting donations, timetables etc.</small>
        </article>
        <article className='portfolio__item'>
            <h3>Blockchain Hackathon</h3>
            <small>Took part in the Blockchain Hackathon held by the ISFCR club. Worked on implementing a blockchain connection.</small>
        </article>
            <article className='portfolio__item'>
            <h3>Dotslash'23 4.0</h3>
            <small>Implemented VAK Categorization. Provides the user with the required type of resources (Aural, Visual or Kinesthetic).</small>
        </article>
        </article>
            <article className='portfolio__item'>
            <h3>Hack Attack'23</h3>
            <small>Held by the ISFCR club of PES. Implemented (both C++ and Python) a working model of Encryption & Decryption of messages. Using AES algorithm.</small>
        </article>
        </article>
            <article className='portfolio__item'>
            <h3>Terrathon'23 Hackathon</h3>
            <small>Held by CMS & Alcoding Club. Dealt with Sustainable Development. Implemented a website that would help local producers sell their local produce.</small>
        </article>
      </div>
      <br/>
      <br/>
      <h2>Clubs & Activities</h2>
      <div className='container portfolio__container'>
      <article className='portfolio__item'>
            <h3>AIKYA</h3>
            Web Development Team
            <br/>
            <small>This is a club that hosts a huge hackathon with a straight-up aim and objective, always in the moto of bringing out the best. </small>
        </article>
      <article className='portfolio__item'>
            <h3>Shunya</h3>
            Cotangent - Math Team
            <br/>
            <small>One of the most active clubs of PES with a lot of events happening now and then. Honored to be a part of this club.
            </small>
        </article>
        <article className='portfolio__item'>
            <h3>ADG (Apple Developer's Group)</h3>
            Internal Relations Team
            <br/>
            <small>Joined this club recently, an awesome developing club. I'm really glad to be actually working in this club overall.</small>
        </article>
        <article className='portfolio__item'>
            <h3>Alcoding</h3>
            Operations & UI/UX Design Team
            <br/>
            <small>Competitive Programming based club. Kind people with great talents. Hold regular coding competitions (online) and talks (offline).</small>
        </article>
        <article className='portfolio__item'>
            <h3>VRE</h3>
            Internship Course
            <br/>
            <small>I am a huge car person and that led me to exploring this club and was part of their outstanding internship where I learnt about Onshape and Solid Works.</small>
        </article>
        <article className='portfolio__item'>
            <h3>CMS - Change Maker's Society</h3>
            UI/UX Design Team
            <br/>
            <small>Amazing Interview-Placement based club where they host reular meetings and interactive sessions.</small>
        </article>
        <article className='portfolio__item'>
            <h3>Aatmatrisha'23</h3>
            DISCO (Disciplinary Committee)
            <br/>
            <small>This is the official annual event of PES. Participated in the dance flashmob and volunteered for the DISCO community.</small>
        </article>
      </div>
      <br />
      <br />
      <br />
      <p>To download my CV, Click here :</p>
      <CTA />
    </section>
  )
}

export default Portfolio
