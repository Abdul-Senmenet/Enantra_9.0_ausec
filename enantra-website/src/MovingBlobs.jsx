// src/MovingBlobs.jsx
import React from 'react';
import './MovingBlobs.css'; // Import the CSS file for the styles

const MovingBlobs = () => {
  return (
    <div className="blob-container">
      {/* Dynamic blobs */}
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      
      {/* Grain effect */}
      <div className="grain"></div>
    </div>
  );
}

export default MovingBlobs;
