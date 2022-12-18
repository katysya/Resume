import React from 'react'
import Button from "../Button/Button";
import '../Intro/Intro.scss';
import Blur from '../Blur/Blur';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Cat from '../../img/Intro/cat4.png';
import Social from '../Social/Social';
import Me from '../../img/Intro/me.png';
import { motion } from 'framer-motion';

const Intro = () => {

  const transition = { duration: 5, type: 'spring' };

  return (
    <div className='intro'>
      <div className="intro__left">
        <div className='me'>
          <Title text={'Привет! Меня зовут'} />
          <Subtitle text={'Катя и я'} />
          <p>Frontend-разработчик</p>
        </div>
        <Button text={"Скачать резюме"} download={true} />
        <div className='link'>
          <Social />
        </div>
      </div>
      <div className="intro__right">
        <img className='photo' src={Me} alt="" />
        <div className='blur'>
          <Blur />
        </div>
        <motion.img
          initial={{ right: '-5rem' }}
          whileInView={{ right: '0rem' }}
          whileHover={{ right: '-4rem' }}
          transition={transition}
          className="cat" src={Cat} alt=""></motion.img>
      </div>
    </div>
  )
}

export default Intro
