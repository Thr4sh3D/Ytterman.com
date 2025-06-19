import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Diagnostics' },
    { path: '/blog', label: 'Blog' },
    { path: '/ka-sundsvall', label: 'KA Sundsvall' },
    { path: '/ka-harnosand', label: 'KA Härnösand' }
  ];

  return (
    <nav style={{
      padding: '10px 0',
      marginBottom: '20px',
      borderBottom: '1px solid #dee2e6'
    }}>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              backgroundColor: location.pathname === item.path ? '#007bff' : '#f8f9fa',
              color: location.pathname === item.path ? 'white' : '#495057',
              border: '1px solid #dee2e6',
              transition: 'all 0.2s'
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;