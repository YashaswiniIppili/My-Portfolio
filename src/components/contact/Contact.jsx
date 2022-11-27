import React from 'react'
import './contact.css'
import {IoIosMail} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_myaeo64', 'template_zyhp0yh', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h2>Let's get in touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <IoIosMail className='contact__option-icon'/>
            <h4>email</h4>
            <h5>yashaswini.ippili@gmail.com</h5>
            <a href="mailto:yashaswini.ippili@gmail.com" target="_blank">Send a mail!</a>
          </article>
          <article className='contact__option'>
            <AiFillInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>yashaswini.ippili</h5>
            <a href="https://www.instagram.com/yashaswini.ippili/" target="_blank">Ping Me!</a>
          </article>
          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>9353325788</h5>
            <a href="https://api.whatsapp.com/send?phone=+919353325788" target="_blank">Ping Me!</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter your full name' required />
          <input type="email" name="email" placeholder='Enter your email' required/>
          <textarea name="message" cols="30" rows="10" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact