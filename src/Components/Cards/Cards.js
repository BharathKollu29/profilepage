import React from 'react'

import './Cards.css'

const Cards = ({emoji, heading, details}) => {
  return (
    <div className="card">
        <img src={emoji} alt='' />
        <span>{heading}</span>
        <span>{details}</span>
        <button className='card-button'>Learn more</button>
    </div>
  )
}

export default Cards






