import React, { useState } from 'react'
import './Header.scss';
import Button from '../Button/Button';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <div className="header__left">
        <p className="name">Екатерина</p>
        <Toggle />
      </div>
      <div className="header__right">
        <ul className={open ? "list active" : "list"}>
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
            <Link sry={'true'} to='Portfolio' smooth={true}>
              Портфолио
            </Link>
          </li>
          <li>
            <Link sry={'true'} to='Contact' smooth={true}>
              Контакты
            </Link>
          </li>
        </ul>
        <Button text={'Резюме'} />
        <div onClick={() => setOpen(!open)} className='mobile__button'>
          {open ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
        </div>
      </div>
    </div>
  )
}

export default Header
