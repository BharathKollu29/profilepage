
import {Swiper, SwiperSlide} from 'swiper/react';

import React from 'react'

import Sidebar from '../img/sidebar.png';
import Ecommerce from '../img/ecommerce.png';
import Hoc from '../img/hoc.png';
import MusicApp from '../img/musicapp.png';
import 'swiper/css'


import './Projects.css'

function Projects() {
  return (
        <div className='projects-container'>
            <div className='projects-inner-container'>
                <span className='projects-heading'>Recent Projects</span>
                <div>
                    <Swiper slidesPerView={3} grabCursor={true} className='swiper-container'>
                        <SwiperSlide>
                            <img className='swiper-image' src={Sidebar} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img className='swiper-image' src={Ecommerce} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img className='swiper-image' src={Hoc} alt='' />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img className='swiper-image' src={MusicApp} alt='' />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
  )
}

export default Projects
