import React, { useState } from 'react'
import { BANNER_TEXT } from '../../messages'
import './Banner.css'


const Banner = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <div className={hidden && 'hidden'}>
      <p className='blinking'>{BANNER_TEXT}</p>
      <button className='close-button' onClick={() => setHidden(true)}>X</button>
    </div>
  )
}

export default Banner