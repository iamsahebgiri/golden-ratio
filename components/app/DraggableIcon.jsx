import React from 'react';

export default function DraggableIcon({ src, alt, onDragStart }) {
  return (
    <div
      className="h-12 w-12 p-2 shadow-sm rounded flex items-center justify-center mb-3 hover:p-4 hover:scale-125 transform hover:w-16 bg-white"
    >
      <img
        src={`./icons/${src}`}
        alt={alt}
        title={alt}
        onClick={onDragStart}
        role="presentation"
        onKeyPress={onDragStart}
        onDragStart={onDragStart}
      />
    </div>
  );
}
