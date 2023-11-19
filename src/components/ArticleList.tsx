// ArticleList.tsx

import React from 'react';
import ArticlePreview from './ArticlePreview';
import { Article } from '../types';

interface ArticleListProps {
  articles: Article[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="article-preview-container">
      {articles.map((article) => (
        <ArticlePreview key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
