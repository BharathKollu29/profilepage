import React from "react";

import HeartEmoji from '../img/heartemoji.png';
import Glasses from '../img/glasses.png';
import Humble from '../img/humble.png';

import './Services.css'
import Cards from "../Cards/Cards";


import Resume from "./Resume.pdf"

import {motion} from "framer-motion"



const Services = () => {

    const transition = {duration: 2, type: 'spring' }


    return(
        <div className="services-container">
            <div className="services-left-section">
                <span>My Awesome</span>
                <span>Services</span>
                <span>If you want to see my resume 
                    <br />
                    Please click on Download CV button
                </span>
                <a href={Resume} download>
                    <button className="services-button">Download CV</button>
                </a>
            </div>

            <div className="services-right-section">

                <motion.div
                initial={{left: "15rem"}}
                whileInView={{left: "8rem"}}
                transition={transition} 

                 style={{left: '8rem'}}>
                    <Cards emoji={HeartEmoji} heading={"Backend"} details={"MySQL, Python, Node JS, Mongo DB"} />
                </motion.div>


                <motion.div 
                initial={{top: "4rem"}}
                whileInView={{top: "10rem"}}
                transition={transition} 

                style={{top: '10rem', left: "-12rem"}}>
                    <Cards emoji={Glasses} heading={"Frontend"} details={"HTML, CSS, JavaScript, React.js"} />
                </motion.div>

                <motion.div 
                initial={{left: "12rem"}}
                whileInView={{left: "6rem"}}
                transition={transition} 

                style={{top: '20rem', left: "-12rem"}}>
                    <Cards emoji={Humble} heading={"UI/UX"} details={"Adobe XD, Figma, ProtoPie, Sketch App"} />
                </motion.div>

                
            </div>

        </div>
    )
}

export default Services