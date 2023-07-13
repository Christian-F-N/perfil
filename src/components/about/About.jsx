import React from 'react'
import './about.css'
import ME from '../../assets/fot.jpg'
import { MdWork } from 'react-icons/md'
import { FiFileText } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5 className="inicioAb">Acerca de mí</h5>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About image'></img>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdWork className='about__icon' />
              <h5>Experiencia</h5>
              <small>GAD Municipalidad de Ambato</small>
            </article>
            <article className='about__card'>
              <FiFileText className='about__icon' />
              <h5>Certificaciones</h5>
              <small>Concurso interuniversitario multiacadémico (CIME)</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>+10 Proyectos Completados (GitHub)</small>
            </article>
          </div>
          <a href='#contact' className='btn btn-primary1'>¡Conversar!</a>
        </div>
      </div>
    </section>
  )
}

export default About