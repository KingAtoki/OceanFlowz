import React from 'react'
import './Card.css'

export const Card = ({ title, description }) => {
    return (
        <div className='card'>
            <h3 className='card_title'>{title}</h3>
            <p className='card_description'>{description}</p>
        </div>
    )
}
