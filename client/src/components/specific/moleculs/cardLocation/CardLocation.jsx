import React from 'react'
import './cardLocation.scss'

const CardLocation = ({title, addres}) => {
    return (
        <div className="container">
            <h3>{title}</h3>
            <p>{addres}</p>
        </div>
    )
}

export default CardLocation
