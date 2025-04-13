// app/page.tsx
'use client'

import { useState } from 'react';
import { Toolbar } from '@/components/Toolbar';
import { RoughCanvas } from '@/components/RoughCanvas';

type Tool = 'select' | 'rectangle' | 'circle' | 'arrow' | 'freehand' | 'text';

export default function Home() {
  const [activeTool, setActiveTool] = useState<Tool>('select');

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Sketch Diagram</h1>
        <p className="mb-6 text-gray-600">
          Collaborative diagramming with hand-drawn aesthetic
        </p>
        
        <Toolbar activeTool={activeTool} setActiveTool={setActiveTool} />
        
        <div className="mt-4">
          <RoughCanvas />
        </div>
      </div>
    </main>
  );
}