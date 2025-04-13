// components/RoughCanvas.tsx
'use client'

import { useEffect, useRef } from 'react';
import rough from 'roughjs';

export function RoughCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rc = rough.canvas(canvas);
    
    // Draw sample elements
    rc.rectangle(10, 10, 200, 150, { roughness: 1.2 });
    rc.circle(300, 100, 80, { roughness: 1.5, fill: 'rgba(255, 200, 200, 0.5)' });
    rc.line(50, 170, 250, 170, { roughness: 0.8 });
    
    // Arrow
    rc.line(250, 85, 350, 85, { roughness: 0.8 });
    rc.line(350, 85, 340, 75, { roughness: 0.8 });
    rc.line(350, 85, 340, 95, { roughness: 0.8 });
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      width={800} 
      height={600}
      className="border border-gray-300 rounded-lg shadow-md bg-white"
    />
  );
}