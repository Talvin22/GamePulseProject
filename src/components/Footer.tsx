// Footer.tsx

import React from 'react';
import '../styles/App.css';

interface FooterProps {
  copyrightText: string;
}

const Footer: React.FC<FooterProps> = ({ copyrightText }) => {
  return (
    <footer className='footer'>
      <p>{copyrightText}</p>
    </footer>
  );
};

export default Footer;
