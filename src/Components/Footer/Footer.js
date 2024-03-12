import React from 'react'
import './Footer.css'

import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import Wave from '../img/wave.png'

function Footer() {
  return (
    <div className='footer-container'>
        <img className='footer-image' src={Wave} alt='' />
        <div className='footer-content'>
            <div>
                <span className='footer-heading'>bharathkollu23@gmail.com</span>
            </div>
            <div className='footer-icons'>
                <FaInstagram />
                <FaTelegram />
                <FaWhatsapp />
            </div>
        </div>
    </div>
  )
}

export default Footer
