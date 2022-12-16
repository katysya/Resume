import React from 'react'
import './Social.scss';
import Telegram from '@iconscout/react-unicons/icons/uil-telegram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import VK from '@iconscout/react-unicons/icons/uil-vk';
import {themeContext} from '../../Context';
import { useContext } from 'react';

const Social = ({color_icon}) => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const color_i = color_icon? 'white' : darkMode? '#6875cd' : '#420D9E';

  return (
<ul className="social-icons">
  <li><a className="social-icon-github" href="https://github.com/katysya" target="_blank">
  <Github className='icon' color={color_i}/>
    </a></li>
  <li><a className="social-icon-telegram" href="https://t.me/katyusyafed" target="_blank">
  <Telegram className='icon' color={color_i}/>
    </a></li>
  <li><a className="social-icon-vk" href="https://vk.com/katerina_fedyakina" target="_blank">
  <VK className='icon' color={color_i}/></a></li>
</ul>
  )
}

export default Social
