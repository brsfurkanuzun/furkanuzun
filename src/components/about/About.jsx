import React from 'react'
import './about.css'
import {TbStairs} from 'react-icons/tb'
import {TbTrophy} from 'react-icons/tb'
import {BsCode} from 'react-icons/bs'
import ME from '../../assets/me-about.png'

const aboutText="Hello, I'm Furkan Uzun. I graduated from the computer engineering department of Istanbul Bilgi University in 2021. I was born in 1996 and ever since I was a child, computers have always interested me and it has been the biggest part of my dream job. Even though I realized my skills in music, drawing and various sports over time, being able to do something on the computer and computer has always been my number 1. As my graduation project, I modeled the university I studied at and made an application in which I could tour virtually. For this, I got support from some of my architect friends and learned game development with Unity. Currently, I am actively working in Etiya, one of Turkey's largest global software companies, with the title of Software Development Speacilist. In addition, I worked as a freelancer on both the game development side and the modeling side in a metaverse project that started in March 2022 and ended in July 2022 as a result of financial insufficiencies."

const About = () => {
  const year=new Date().getFullYear();
  const exYear=year-2022;
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'/>
          </div>
        </div>
        
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <TbStairs className='about__icon'/>
              <h5>Experience</h5>
              <small>+{exYear} Years Working</small>
            </article>

            <article className='about__card'>
              <BsCode className='about__icon'/>
              <h5>Languages</h5>
              <small>+5 Languages</small>
            </article>

            <article className='about__card'>
              <TbTrophy className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>

          <p>{aboutText}</p>
          

        </div>
      </div>
    </section>
  )
}

export default About