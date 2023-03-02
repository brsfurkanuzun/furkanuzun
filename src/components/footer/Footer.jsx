import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import {BsWhatsapp,BsSpotify,BsSkype} from 'react-icons/bs'
import {useState} from 'react'

const Footer = () => {const [activeNav, setActiveNav]=useState('home')
function scroll(element){    
    const el=document.getElementById(element)
    setActiveNav(element)
    return el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})}
  return (
    <footer>
      <a href='home' className='footer__logo'>FURKAN UZUN</a>
      <ul className='permalinks'>
      
        <li><a onClick={()=>scroll('home')}>Home</a></li>
        <li><a onClick={()=>scroll('about')}>About</a></li>
        <li><a onClick={()=>scroll('testimonial')}>Testimonials</a></li>
        <li><a onClick={()=>scroll('contact')}>Contact</a></li>
        {/* <li><a href='#experience'>Experience</a></li> */}
        
      </ul>
      
      <div className='footer__socials'>
        <a href='https://www.instagram.com/barisfurkanuzun/' target='_new'><BsInstagram/></a>
        <a href='https://twitter.com/barisfurkanuzun' target='_new'><BsTwitter/></a>
        <a href='https://www.linkedin.com/in/furkan-uzun-5ab4ab182/' target='_new'><BsLinkedin/></a>
        <a href='https://api.whatsapp.com/send?phone=905454462632' target='_new'><BsWhatsapp/></a>
        <a href="https://open.spotify.com/user/brsfurkanuzun" target="_new"><BsSpotify/></a>
        <a href="https://join.skype.com/invite/KWf9x1MOf4jD" target="_new"><BsSkype/></a>

      </div>


     <div className='footer__copyright'>
        <small>&copy; Furkan Uzun. All rights reserved</small>
     </div>
    </footer>
  )
}

export default Footer
