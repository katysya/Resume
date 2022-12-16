import React from 'react'
import './Button.scss';
import Resume from '../../file/resume.pdf';

const Button = ({text}) => {
  return (
    <a className='button' href={Resume} download>{text}</a>
  )
}

export default Button
