// components/ProgressBar.tsx
import React from 'react';



const ProgressBar = ({ progress }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '8px', zIndex: 1000, background: '#FF0000' ,borderRadius:"50px" }}>
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#ffffff',
          transition: 'width 0.3s ease-in-out',
          borderRadius:"50px"
        }}
      />
    </div>
  );
};

export default ProgressBar;
