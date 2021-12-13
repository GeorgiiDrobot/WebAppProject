import React from "react";
import '../App.css'


const NewsItem = ({title, description, url, urlToImage, publishedAt}) => {
    
    
    return (
        <div className='news-item'>
            <img className='news-img' src={urlToImage} alt="newsImg"></img>
            <h3><a href={url}>{title}</a></h3>
            <p>{description}</p>
            <p className='date'>{publishedAt.substring(0, publishedAt.length - 10)}</p>
        </div>
    )
}

export default NewsItem;