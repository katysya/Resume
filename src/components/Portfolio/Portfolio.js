import React, { useState } from 'react'
import Title from '../Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Portfolio.scss';
import Project1 from '../../img/Portfolio/project1.png';
import Project2 from '../../img/Portfolio/project2.png';
import Project3 from '../../img/Portfolio/project3.png';
import Project6 from '../../img/Portfolio/project6.png';
import Project5 from '../../img/Portfolio/project5.png';
import Arrow from '@iconscout/react-unicons/icons/uil-arrow-circle-right';
import 'swiper/css';

const Portfolio = () => {

  const width = window.screen.availWidth < 1000 ? true : false;

  return (
    <div className='portfolio' id='Portfolio'>
      <Title text={"Мои работы"} />
      <Swiper spaceBetween={20} slidesPerView={width ? 1 : 2} grabCursor={true} className='portfolio__slider'>
      <SwiperSlide>
          <a className="portfolio__link" target="_blank" href="https://katysya.github.io/MyTeam/">
            <img src={Project6} alt="Проект" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="portfolio__link" target="_blank" href="https://pogeton.com/">
            <img src={Project2} alt="Проект" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="portfolio__link" target="_blank" href="https://katysya.github.io/Resume/">
            <img src={Project3} alt="Проект" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="portfolio__link" target="_blank" href="https://katysya.github.io/FitnessTrainer/" >
            <img src={Project1} alt="Проект" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="portfolio__link" target="_blank" href="https://statuesque-kitten-844383.netlify.app/">
            <img src={Project5} alt="Проект" />
          </a>
        </SwiperSlide>
      </Swiper>
      <div className='portfolio__arrow'>
        <p>Листай</p>
        <Arrow />
      </div>
    </div>
  )
}

export default Portfolio
