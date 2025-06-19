import React from 'react';

export const WhatsAppButton = () => {
  console.log('💬 WhatsAppButton component rendering');
  
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '20px', 
      right: '20px', 
      backgroundColor: 'green', 
      color: 'white', 
      padding: '10px', 
      borderRadius: '50px',
      cursor: 'pointer'
    }}>
      💬 WhatsApp
    </div>
  );
};