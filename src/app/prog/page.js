"use client"
import ProgressBar from '@/components/ProgressBar'
import React, { useEffect, useState } from 'react'

export default function page() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = (scrollY / docHeight) * 100;
      setProgress(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div>
      <ProgressBar progress={progress} />
      <div style={{ height: '150vh', padding: '20px' }}>
        <h1>Scroll to see the progress bar in action!</h1>
      </div>
    </div>
    </div>
  )
}
