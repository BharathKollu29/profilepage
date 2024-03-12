
import React from 'react'
import './FloatingCard.css'

const FloatingCard = ({image, text1, text2}) => {
  return (
    <div className='floatingcard-container'>
        <img src={image} alt='' />
        <span>
            {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default FloatingCard
