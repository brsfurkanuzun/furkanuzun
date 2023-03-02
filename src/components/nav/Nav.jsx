import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {AiOutlineComment} from 'react-icons/ai'
import {useState} from 'react'


const Nav = () => {    
  const [activeNav, setActiveNav]=useState('home')
  function scroll(element){    
      const el=document.getElementById(element)
      setActiveNav(element)
      return el.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

  }
  return (
    
    <nav>
        <button  onClick={()=>scroll('home')} className={activeNav==='home' ? 'active':''}><AiOutlineHome/></button>
        <button  onClick={()=>scroll('about')} className={activeNav==='about'?'active':''}><AiOutlineUser/></button>
        <button  onClick={()=>scroll('testimonial')} className={activeNav==='testimonial'?'active':''}><AiOutlineComment/></button>
        <button  onClick={()=>scroll('contact')} className={activeNav==='contact'?'active':''}><AiOutlineMessage/></button>
    </nav>
  )
}

export default Nav