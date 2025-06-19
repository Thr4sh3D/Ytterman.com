import React, { useState, useEffect } from 'react';

const ClientOnlyTimestamp = () => {
  const [timestamp, setTimestamp] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detta körs bara på klienten, aldrig på servern
    setTimestamp(new Date().toLocaleString());
    setMounted(true);
  }, []);

  // Under hydration, visa ingenting för att undvika mismatch
  if (!mounted) {
    return (
      <div style={{ 
        padding: '10px', 
        backgroundColor: '#f9f9f9',
        borderRadius: '5px',
        marginTop: '10px'
      }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#999' }}>
          Loading timestamp...
        </p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '10px', 
      backgroundColor: '#e8f5e8',
      borderRadius: '5px',
      marginTop: '10px'
    }}>
      <p style={{ margin: 0, fontSize: '14px', color: '#333' }}>
        Client timestamp: {timestamp}
      </p>
    </div>
  );
};

export default ClientOnlyTimestamp;