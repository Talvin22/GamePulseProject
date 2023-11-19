import React from 'react';
import { Link } from 'react-router-dom';
import FilterBox from './FilterBox';
import '../styles/Home.css';
import ArticlePreview from './ArticlePreview';
import exampleArticles from '../exampleArticles';
import ArticleList from './ArticleList';
import img from "../images/news.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="img-background"></div>
      <div className="content">
        <img src={img} />
        <ArticleList articles={exampleArticles} />
      </div>
    </div>
  );
}

export default Home;
