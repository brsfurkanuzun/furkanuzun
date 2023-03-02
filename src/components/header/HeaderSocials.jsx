import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsSpotify} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/furkan-uzun-5ab4ab182/" target="_new"><BsLinkedin/></a>
        <a href="https://www.instagram.com/barisfurkanuzun/" target="_new"><BsInstagram/></a>
        <a href="https://twitter.com/barisfurkanuzun" target="_new"><BsTwitter/></a>
        <a href="https://open.spotify.com/user/brsfurkanuzun" target="_new"><BsSpotify/></a>
    </div>
  )
}

export default HeaderSocials