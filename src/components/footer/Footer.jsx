import React from 'react'
import './footer.css'

import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>IR AL INCIO</a>
      <ul className='permalinks'>
        <li><a href='#'>Inicio</a></li>
        <li><a href='#about'>Sobre mi</a></li>
        <li><a href='#experience'>Experiencia</a></li>
        <li><a href='#services'>Servicios</a></li>
        <li><a href='#portfolio'>Portafolio</a></li>
        <li><a href='#references'>Referencias</a></li>
        <li><a href='#contact'>Contactos</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.facebook.com/christian.nunez.927758'><FaFacebookF /></a>
        <a href='https://github.com/Christian-F-N'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/christianu%C3%B1ez593/'><FaLinkedinIn /></a>
      </div>

      <div className='footer__copyright'>
        {/* <small>&copy; Christian Núñez. Todos los derechos reservados</small> */}
      </div>
    </footer>
  )
}

export default Footer