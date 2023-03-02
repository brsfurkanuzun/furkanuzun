import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

function Header() {
  return (
    <header id='home'>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h2>Furkan Uzun</h2>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA/>
            <div className='me'>
              <img src={ME} alt='me'/>
            </div>
            <HeaderSocials/>
        </div>
    </header>
  )
}

export default Header