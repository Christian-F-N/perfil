//Call to action(llamadas a la acción)

import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Descargar CV</a>
      <a href='#contact' className='btn btn-primary'>¡Hablemos!</a>
    </div>
  )
}

export default CTA