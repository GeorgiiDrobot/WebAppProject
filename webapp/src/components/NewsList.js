import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import NewsItem from './NewsItem';
import '../App.css';

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const getArticles = async () => {
            const res = await Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=79e3de397dbb4204aec41d093348749c");

            setArticles(res.data.articles);
            
        }

        getArticles();

    }, []);
    return (
        <div className='news-list'>
            {articles.map(({ title, description, url, urlToImage, publishedAt }) => (
                <NewsItem title={title} description={description} url={url} urlToImage={urlToImage} publishedAt= {publishedAt} />
            ))}
        </div>
    )
}

export default NewsList;