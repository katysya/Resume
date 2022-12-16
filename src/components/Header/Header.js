import React from 'react'
import './Header.scss';
import Button from '../Button/Button';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">
        <p className="name">Екатерина</p>
        <Toggle />
      </div>
      <div className="header__right">
        <ul className='list'>
          <li>
            <Link sry={'true'} to='Header' smooth={true} activeClass="activeClass">
              Главная
            </Link>
          </li>
          <li>
            <Link sry={'true'} to='Aboutme' smooth={true}>
              О себе
            </Link>
          </li>
          <li>
            <Link sry={'true'} to='Skills' smooth={true}>
              Образование
            </Link>
          </li>
          <li>
            <Link sry={'true'} to='Header' smooth={true}>
              Портфолио
            </Link>
          </li>
          <li>
            <Link sry={'true'} to='Header' smooth={true}>
              Контакты
            </Link>
          </li>
        </ul>
        <Button text={'Резюме'} />
      </div>
    </div>
  )
}

export default Header
