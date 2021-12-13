import React from "react";
import '../App.css'


const NewsItem = ({title, description, url, urlToImg}) => {
    return (
        <div className='news-item'>
            <img className='news-img' src={urlToImg} alt="newsImg"></img>
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
        </div>
    )
}

export default NewsItem;