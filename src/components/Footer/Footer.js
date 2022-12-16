import React from 'react'
import './Footer.scss';
import Wave from '../../img/Footer/footer.png';
import Cat from "../../img/Footer/cat2.png";
import {motion} from 'framer-motion';
import Social from '../Social/Social';

const Footer = () => {

  const transition = {duration : 5, type: 'spring'}

  return (
    <div className='footer'>
      <img src={Wave} alt=''/>
      <div className="footer__content">
        <span>Буду рада сотрудничеству!</span>
        <div className='icons'>
          <Social color_icon={'true'}/>
        </div>
      </div>
      <motion.img className="cat" 
      initial={{bottom: '-10rem', right: '10rem'}}
      whileInView={{bottom: '-4rem', right: '10rem'}}
      whileHover={{ bottom: '-9rem', right: '10rem' }}
      transition={transition}
      src={Cat} alt=''/>
    </div>
  )
}

export default Footer
