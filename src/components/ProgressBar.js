// components/ProgressBar.tsx
/**
 * The ProgressBar component in React displays a progress bar with customizable styling and transition
 * effects.
 * @returns The ProgressBar component is being returned. It is a functional component that displays a
 * progress bar with a red background and a white progress indicator that fills up based on the
 * `progress` prop passed to it.
 */
import React from 'react';



const ProgressBar = ({ progress }) => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '50px', zIndex: 1000, background: '#FF0000' ,borderRadius:"50px"}}>
      <div
        style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#ffffff',
          transition: 'width 0.5s ease-in-out',
          borderRadius:"50px"
        }}
      />
    </div>
  );
};

export default ProgressBar;
