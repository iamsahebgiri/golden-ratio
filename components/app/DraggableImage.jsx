import React from 'react';

export default function DraggableImage({ onDragStart, src, alt }) {
  return (
    <img
      width="100"
      alt={alt}
      src={src}
      draggable="true"
      role="presentation"
      onKeyPress={onDragStart}
      onClick={onDragStart}
      onDragStart={onDragStart}
    />
  );
}
