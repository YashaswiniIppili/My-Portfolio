import React from 'react'
import './portfolio.css'
import CTA from './CTA'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Recent Work</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
            <h3>PESU IO</h3>
            <small>The course I enrolled myself into was Explainable AI. I've learnt about concepts like LIME & SHAP. Curated the final project where we created a model that would categorize a YT video's comments into spam or not spam.</small>
        </article>
        <article className='portfolio__item'>
            <h3>The Hands of Hope Foundation</h3>
           <small>Was part of the AIKYA hackathon, where we helped the NGO by making a website that would connect to people suffering from trauma etc.</small>
        </article>
        <article className='portfolio__item'>
            <h3>KodiKon</h3>
            <small>Held by the Embrione Club, Worked on helping the government with promoting Online Education. Created a portal that contained videos, accepting donations, timetables etc.</small>
        </article>
        <article className='portfolio__item'>
            <h3>Blockchain Hackathon</h3>
            <small>Took part in the Blockchain Hackathon held by the ISFCR club. Worked on implementing a blockchain connection.</small>
        </article>
      </div>
      <br/>
      <br/>
      <h2>Clubs & Activities</h2>
      <div className='container portfolio__container'>
      <article className='portfolio__item'>
            <h3>AIKYA</h3>
            Web Development 
            <br/>
            <small>This is a club that hosts a huge hackathon with a straight-up aim and objective, always in the moto of bringing out the best. </small>
        </article>
      <article className='portfolio__item'>
            <h3>Shunya</h3>
            Cotangent - Math domain.
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
            Operations Team 
            <br/>
            <small>Got into this next-level club pretty recently. I like the way they work in this club. It's all strategized and focused.</small>
        </article>
        <article className='portfolio__item'>
            <h3>VRE</h3>
            Internship Course
            <br/>
            <small>I am a huge car person and that led me to exploring this club and was part of their outstanding internship where I learnt about Onshape and Solid Works.</small>
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