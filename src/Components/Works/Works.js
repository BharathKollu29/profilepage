import React from 'react'

import Upwork from '../img/Upwork.png';
import Fiverr from '../img/fiverr.png';
import Amazon from '../img/amazon.png';
import Shopify from '../img/Shopify.png';
import Facebook from '../img/Facebook.png';

import './Works.css'

import {motion} from "framer-motion"


function Works() {

  return (
    <div className='works-container'>
        <div className="works-left-section">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>If you hire me, 
                <br /> 
                I can make the best of my potential and
                <br/>
                contribute to the organizations growth
                </span>
            <button className="works-button">Hire me</button>
        </div>

        <div className='works-right-section'>
            <motion.div
            initial={{rotate: 65}}
            whileInView={{rotate: 0}}
            transition={{duration: 3.5, type: "spring"}}
             className='outer-circle'>
                <div className='inner-circle'>
                    <img src={Upwork} alt='' />
                </div>
                <div className='inner-circle'>
                    <img src={Fiverr} alt='' />
                </div>
                <div className='inner-circle'>
                    <img src={Amazon} alt='' />
                </div>
                <div className='inner-circle'>
                    <img src={Shopify} alt='' />
                </div>
                <div className='inner-circle'>
                    <img src={Facebook} alt='' />
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Works
