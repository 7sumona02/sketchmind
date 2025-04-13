// components/Toolbar.tsx
'use client'

import { useState } from 'react';

type Tool = 'select' | 'rectangle' | 'circle' | 'arrow' | 'freehand' | 'text';

export function Toolbar({ activeTool, setActiveTool }: {
  activeTool: Tool;
  setActiveTool: (tool: Tool) => void;
}) {
  const tools: Tool[] = ['select', 'rectangle', 'circle', 'arrow', 'freehand', 'text'];

  return (
    <div className="flex gap-2 p-2 bg-gray-100 rounded-lg">
      {tools.map((tool) => (
        <button
          key={tool}
          onClick={() => setActiveTool(tool)}
          className={`p-2 rounded-md ${activeTool === tool ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-200'}`}
          title={tool.charAt(0).toUpperCase() + tool.slice(1)}
        >
          <span className="text-lg">
            {tool === 'select' && '✏️'}
            {tool === 'rectangle' && '⬛'}
            {tool === 'circle' && '⭕'}
            {tool === 'arrow' && '➡️'}
            {tool === 'freehand' && '✍️'}
            {tool === 'text' && '🔤'}
          </span>
        </button>
      ))}
    </div>
  );
}