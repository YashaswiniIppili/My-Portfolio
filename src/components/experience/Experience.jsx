import React from 'react'
import './experience.css'
import {AiFillCheckCircle} from 'react-icons/ai'

const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I possess</h5>
      <h2>Tech-Related</h2>
      <p>Getting started with AI & ML, as I've always had a lot of interest towards it. Was part of the Explainable AI course (PESU IO) </p>
      <br/>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h2>Frontend Development</h2>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div><h4>Java Script</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h2>Backend Development</h2>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Express JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              </div>
            </article>
            <article className='experience__details'>
              <AiFillCheckCircle className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience