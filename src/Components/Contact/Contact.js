import React, { useState } from 'react'

import emailjs from '@emailjs/browser'; 
import { useRef } from 'react';

import './Contact.css'

function Contact() {

    /* import prefild "recat emailjs code" from google */
    
    const form = useRef();

    const [done, setdone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_cg5vme9', 'template_tqn04mj', form.current, {
        publicKey: 'hbY3MW1xMdFXV0azk',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setdone(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-container'>
        <div className='contact-container-left-section'>
            <span>Have a question, suggestion, or just want to say hello?</span>
            <span>We'd love to hear from you! <br /> Feel free to reach out to us via <br /> email, or through our website's contact form. </span>
            <span>Contact me</span>
        </div>
        <div className='contact-container-left-section'>
            <form ref={form} onSubmit={sendEmail} className='form-container'>
                <input type='text' name='from_name' className='user' placeholder='Name' />
                <input type='email' name='from_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='Message' />
                <input type='submit' value="Send" className='button' />
                <span>{done && "Thanks for contact me"}</span>
            </form>
        </div>
    </div>
  )
}

export default Contact
