import React from 'react';

const Scribble = ({ type, className, style }) => {
  const scribbles = {
    star: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" fill="currentColor" />
      </svg>
    ),
    squiggle: (
      <svg width="60" height="20" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 18C10 2 20 2 28 10C36 18 46 18 58 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    underline: (
      <svg width="200" height="20" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15C40 5 160 5 195 15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
    circle: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="3" strokeDasharray="5 5" />
      </svg>
    ),
    cross: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2L22 22M22 2L2 22" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  };

  return (
    <div className={`scribble ${className}`} style={{ color: 'var(--accent-color)', ...style }}>
      {scribbles[type]}
    </div>
  );
};

export default Scribble;
