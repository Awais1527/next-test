'use client';
// import { IMAGES } from '@/public/images';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const animate = () => {
      const glow = glowRef.current;
      if (glow) {
        pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
        pos.current.y += (mouse.current.y - pos.current.y) * 0.1;
        glow.style.left = `${pos.current.x}px`;
        glow.style.top = `${pos.current.y}px`;
      }
      requestAnimationFrame(animate);
    };

    const timeout = setTimeout(() => {
    
      window.addEventListener('mousemove', handleMouseMove);
      animate();
    }, 1000); // delay before follow + fade in

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
<div>
    {/* // will follow image */}
    <Image
    src={"IMAGES.tiktok_icon"}
    width={50}
    height={50}
    alt='ssd'
    
      ref={glowRef as React.RefObject<HTMLImageElement>}
      className={`pointer-events-none fixed  z-50 w-10 h-10 rounded-full 
        -translate-x-1/2 -translate-y-1/2 
        transition-opacity duration-700 ease-out
       
      `}
    />



    {/* will be folloing a div with radal gradient  */}
    <div
   
      ref={glowRef }
      className={`pointer-events-none fixed  z-50 w-10 h-10 rounded-full 
        -translate-x-1/2 -translate-y-1/2 
        transition-opacity duration-700 ease-out
       
      `}
    />
 </div>
  );
}
