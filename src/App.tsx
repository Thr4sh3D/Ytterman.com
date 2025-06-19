import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Blog from './pages/Blog';
import KASundsvall from './pages/KASundsvall';
import KAHarnosand from './pages/KAHarnosand';
import NotFound from './pages/NotFound';

const App = () => {
  console.log('🚀 App starting - diagnostic version');
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ka-sundsvall" element={<KASundsvall />} />
        <Route path="/ka-harnosand" element={<KAHarnosand />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;