import React from 'react';
import './News.css';

function News(props) {
  return (
    <div className='news'>
        <h1>{props.title}</h1>
        <img src={props.url} alt="not found" />
        <p>{props.news}</p>
    </div>
  )
}

export default News;