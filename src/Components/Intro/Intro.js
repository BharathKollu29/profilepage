import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import Vector1 from '../img/Vector1.png';
import Vector2 from '../img/Vector2.png';
import boy from '../img/boy.png';
import crown from '../img/crown.png';
import thumbup from '../img/thumbup.png';
import glassesimoji from '../img/glassesimoji.png';

import {motion} from "framer-motion"

import React from "react"
import './Intro.css'

import FloatingCard from "../FloatingCard/FloatingCard";

const Intro = () => {

    const transition = {duration: 2, type: 'spring' }



    return (
        <div className="into-container">
                <div className="intro-left-section">
                    <span>Hey! I Am</span>
                    <span>Bharath Kumar</span>
                    <span>Fronted Developer With high level of experience in web designing and development, producing the Quality work</span>
                    <button className="into-button">Hire me</button>
                    <div className="into-left-icons">
                       <FaInstagram />
                       <FaTelegram />
                       <FaWhatsapp />
                    </div>
                </div>

                <div className="intro-right-section">
                    <img src={Vector1}  alt="" />
                    <img src={Vector2}  alt="" />
                    <img src={boy}  alt="" />

                    <motion.img  
                    initial={{left: "-36%"}}
                    whileInView={{left: "-18%"}}
                    transition={transition} 
                    src={glassesimoji}  alt="" 
                    />

                    <motion.div
                    initial={{left: "75%"}}
                    whileInView={{left: "57%"}}
                    transition={transition}
                     style={{left: '57%'}}>
                      <FloatingCard image={crown} text1="Web" text2="Development" /> 
                    </motion.div>


                    <div style={{top: "22.9rem", left: "5.8rem"}}>
                        <FloatingCard image={thumbup} text1="Best Design" text2="Award" />
                    </div>
                      
                </div>

        </div>

    )
}

export default Intro