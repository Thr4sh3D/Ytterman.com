import React from 'react';

const NotFound = () => {
  console.log('❌ NotFound page is rendering');
  
  return (
    <div style={{ padding: '20px', backgroundColor: 'lightgray' }}>
      <h1>❌ 404 - Sidan hittades inte</h1>
      <p>NotFound sidan fungerar!</p>
    </div>
  );
};

export default NotFound;