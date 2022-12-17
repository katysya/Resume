import React, { useState } from 'react'
import './Contact.scss';
import Title from '../Title/Title';
import Blur from '../Blur/Blur';
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { motion } from 'framer-motion';
import Button from '../Button/Button';
import Message from '@iconscout/react-unicons/icons/uil-fast-mail';

const Contact = () => {

  const form = useRef();

  const [done, setDone] = useState(false);

  const empty = "";

  let [name, setName] = useState(empty);
  let [email, setEmail] = useState(empty);
  let [message, setMessage] = useState(empty);

  const submitFormHandler = () => {
    setName(name = empty);
    setEmail(email = empty);
    setMessage(message = empty);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d2d0ohw', 'template_zdhl9qc', form.current, 'nxkokkwQthH9U3cb_')
      .then((result) => {
        console.log(result.text);
        submitFormHandler();
        setDone(true);
      }, (error) => {
        console.log(error.text);
      });
  };


  const transition = { duration: 3, type: 'spring' }

  return (
    <div className='contact' id='Contact'>
      <motion.div className="contact__content"
        initial={{ right: '8rem' }}
        whileInView={{ right: '0rem' }}
        transition={transition}>
        <div className='contact__left'>
          <Button text={"Резюме"} />
        </div>
        <div className='contact__right'>
          <div>
            <Title text='Для связи' />
            <Message size={34} />
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' value={name} onChange={event => setName(event.target.value)} name='user_name' className='user' placeholder='Введите имя' required />
            <input type='email' value={email} onChange={event => setEmail(event.target.value)} name='user_email' className='user' placeholder='Введите email' required />
            <textarea name='message' value={message} onChange={event => setMessage(event.target.value)} className='user' placeholder='Введите текст' required />
            <input type='submit' value="Отправить" className='button' required />
            <span>{done && "Сообщение отправлено!"}</span>
          </form>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
