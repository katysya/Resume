import React from 'react'
import Button from "../Button/Button";
import '../Intro/Intro.scss';
import Blur from '../Blur/Blur';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import Cat from '../../img/Intro/cat4.png';
import Social from '../Social/Social';
import { motion } from 'framer-motion';

const Intro = () => {

  const transition = { duration: 5, type: 'spring' };

  return (
    <div className='intro'>
      <div className="intro__left">
        <div className='me'>
          <Title text={'Привет! Меня зовут'} />
          <Subtitle text={'Екатерина'} />
          <p> И я Frontend-разработчик</p>
        </div>
        <Button text={"Скачать резюме"} download={true} />
        <div className='link'>
          <Social />
        </div>
      </div>
      <div className="intro__right">
        {/* Импорт и работа с правой частью 33.32-38.14*/}
        <div>

        </div>

        <div className='blur'>
          <Blur />
        </div>
        <motion.img
          initial={{ top: '-6rem', right: '-5rem' }}
          whileInView={{ top: '-6rem', right: '0rem' }}
          whileHover={{ top: '-6rem', right: '-4rem' }}
          transition={transition}
          className="cat" src={Cat} alt=""></motion.img>
      </div>
    </div>
  )
}

export default Intro