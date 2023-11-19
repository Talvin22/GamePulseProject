// ArticlePreview.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ArticlePreview.css';

interface ArticlePreviewProps {
  image: string;
  title: string;
  short: string;
  text: string;
  id: number;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({ image, title, short, text, id }) => {
  return (
    <Link to={`/articles/${id}`} className="article-preview-link">
        <div className="article-preview">
          <div className="article-image">
            <img src={image} alt="Article" />
            <div className="article-content">
              <h2 className="article-title">{title}</h2>
              <p className="article-text">{short}</p>
            </div>
          </div>
        </div>
     </Link>
  );
};

export default ArticlePreview;
