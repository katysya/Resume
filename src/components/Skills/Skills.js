import React from 'react'
import './Skills.scss';
import Title from '../Title/Title';
import Subtitle from '../Subtitle/Subtitle';
import ReactI from "../../img/React.png";
import JS from "../../img/Js.png";
import HTML from "../../img/Html.png";
import SASS from "../../img/Sass.png";
import GIT from "../../img/Git.png";
import TS from '../../img/TS.png';
import {motion} from 'framer-motion';

const Skills = () => {
  return (
    <div className='skills' id='Skills'>
      <div className='skills__left'>
        <div className="block">
        <div className="item">
          <Title text={"Образование: "}/>
          <div className="item__right">
          <p className='name'>Донской Государственный Технический Университет</p>
          <p>Бакалавр Программная инженерия (09.03.04)</p>
          <p><span>2018/2022</span></p>
          </div>
        </div>
        <div className="item">
          <Title text={"Курсы: "}/>
          <div className="item__right">
          <p className='name'>Udemy (JavaScript + React), (React + Redux)</p>
          </div>
        </div>
        <div className="item">
        <Subtitle text={"Навыки: "}/>
          <div className="item__right">
          <p className='name'>React, TypeScript, JavaScript, Html, Sass, Git</p>
          </div>
        </div>
        </div>
      </div>
      <div className="skills__right">
        <motion.div 
        initial={{ rotate: 45 }}
        whileInView={{rotate: 0}}
        viewport={{margin: '-40px'}}
        transition={{duration: 3.5, type: 'spring'}}
        className='main__circle'>
          <div className='second__circle'>
            <img src={JS} alt="skills"/>
          </div>
          <div className='second__circle'>
            <img src={SASS} alt="skills"/>
          </div>
          <div className='second__circle'>
            <img src={ReactI} alt="skills"/>
          </div>
          <div className='second__circle'>
            <img src={HTML} alt="skills"/>
          </div>
          <div className='second__circle'>
            <img src={GIT} alt="skills"/>
          </div>
          <div className='second__circle'>
            <img src={TS} alt="skills"/>
          </div>
        </motion.div>
        <div className='back__circle yellow'></div>
        <div className='back__circle green'></div>
      </div>
    </div>
  )
}

export default Skills
