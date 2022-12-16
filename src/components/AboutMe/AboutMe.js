import React from 'react'
import Title from '../Title/Title';
import Me from '../../img/AboutMe/1.jpg';
import Button from '../Button/Button';
import './AboutMe.scss';
import {motion} from 'framer-motion'

const AboutMe = () => {

    const transition = {duration : 4, type: 'spring'}

  return (
    <div className='aboutme' id="Aboutme">
        <div className='aboutme__left'>
            <motion.img src={Me} alt="Photo"                 
            initial={{right: '6rem'}}
            whileInView={{right: '0rem'}}
            transition={transition}></motion.img>
        </div>
        <div className='aboutme__right'>
            <Title text={"О себе"}/>
            <p>Я начинающий <span>Frontend-разработчик</span>, стремлюсь стать частью дружной и профессиональной команды, в которой могла бы развивать свои навыки Frontend-разработки для достижения командных результатов. </p>
            <ul><span>Личные качества:</span>
                <li>Обучаемость и стремление к развитию</li>
                <li>Ответственность</li>
                <li>Пунктуальность</li>
                <li>Умение взаимодействовать в команде</li>
                <li>Отсутствие вредных привычек</li>
            </ul>
            <div className='info'>
                <div className='info__column'>
                    <p><span>Имя: </span>Федякина Екатерина</p>
                    <p><span>Место жительства: </span>Ростов-на-Дону</p>
                </div>
                <div className='info__column'>
                    <p><span>Дата рождения: </span>05.04.2000г</p>
                    <p><span>Телефон:</span>89180266304</p>
                </div>
            </div>
            <Button text={"Скачать резюме"}/>
        </div>
    </div>
  )
}

export default AboutMe
