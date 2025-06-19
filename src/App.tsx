import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
  console.log('🏠 Index page rendering');
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <h1>✅ SUCCESS: Sidan fungerar nu!</h1>
      <p>Detta är startsidan för Tobias Yttermans KA-tjänster.</p>
    </div>
  );
};

const App = () => {
  console.log('🚀 App starting');
  
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;