
import React from 'react'
import './Testmonials.css'

import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'

import profilePic1 from '../img/profile1.jpg';
import profilePic2 from '../img/profile2.jpg';
import profilePic3 from '../img/profile3.jpg';
import profilePic4 from '../img/profile4.jpg'

import {Pagination} from 'swiper'
import 'swiper/css/pagination'


function Testmonials() {
  const Clients = [ 
    {
      img: profilePic1,
      review: "I am perfect for this.",
    },
    {
      img: profilePic2,
      review: "I am perfect for this.",
    },
    {
      img: profilePic3,
      review: "I am perfect for this.",
    },
    {
      img: profilePic4,
      review: "I am perfect for this.",
    }
  ];

  return (
    <div className='testmonials-container'>
      <div className='testmonial-heading'>
      <span>Clients Always get</span>
      <span>Exceptional Work</span>
      <span>from me....</span>
      </div>
      <Swiper
      
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{clickable: true}}
      
      >
        {Clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={client.img} alt='' />
              <span>{client.review}</span>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Testmonials
