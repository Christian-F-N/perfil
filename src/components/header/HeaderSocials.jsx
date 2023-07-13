import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/christianu%C3%B1ez593/' target="__blank"><BsLinkedin /></a>
      <a href='https://github.com/Christian-F-N' target="__blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials