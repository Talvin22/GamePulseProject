import React from 'react';
import { useParams } from 'react-router-dom';
import exampleArticles from '../exampleArticles';
import '../styles/Article.css';

const Article: React.FC = () => {
  const { articleId } = useParams<{ articleId?: string }>();

  if (!articleId) {
    return <h1>Invalid article ID</h1>;
  }

  const numericArticleId = parseInt(articleId, 10);

  if (isNaN(numericArticleId)) {
    return <h1>Invalid article ID</h1>;
  }

  const article = exampleArticles.find((article) => article.id === numericArticleId);

  if (!article) {
    return <h1>Article not found</h1>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <h2>{article.short}</h2>
      <img src={article.image} alt={article.title} />
      <p>{article.text}</p>
    </div>
  );
};

export default Article;
