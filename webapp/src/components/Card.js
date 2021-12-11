import React from "react";
import '../App.css'
import '../App'


function Card({ title, imageUrl, text }) {
    return (
        <div className='card-container'>
            <div className='image-container'>

                <img src={imageUrl} alt='' ></img>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-text-container'>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;