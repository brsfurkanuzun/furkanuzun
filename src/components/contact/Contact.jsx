import React from 'react'
import './contact.css'
import {MdMailOutline} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mkk1ytj', 'template_oh4vdbk', form.current, '6XU-j7t511VrMTeij')
    e.target.reset()
      
  };
  
  return (
    <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdMailOutline className='contact__option-icon'/>
          <h4>E-mail</h4>
          <h5>brsfurkanuzun@gmail.com</h5>
          <a href='mailto:brsfurkanuzun@gmail.com'>Send a mail</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+90 545 446 26 32</h5>
          <a href='https://api.whatsapp.com/send?phone=905454462632' target='_new'>Send a message</a>
        </article>
        
        
      </div>
      {/*END OF CONTACT OPTIONS*/}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Full Name' required/>
        <input type="email" name='email' placeholder='E-Mail' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Mail</button>

      </form>
    </div>
    
    </section>
  )
}

export default Contact