import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Rating from './components/Rating';
import Article from './components/Article';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/articles/:articleId" element={<Article />} />
        </Routes>
        <Footer copyrightText="© 2023 GamePulse. All rights reserved." />
      </div>
      
    </Router>
  );
}

export default App;
