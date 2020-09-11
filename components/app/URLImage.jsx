import React from 'react';
import { Image, Transformer } from 'react-konva';
import useImage from 'use-image';

export default function URLImage({
  image, isSelected, onSelect, onChange,
}) {
  const [img] = useImage(image.src);
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);

      trRef.current.anchorCornerRadius(5);
      trRef.current.anchorFill('white');
      trRef.current.anchorStroke('grey');
      trRef.current.borderStroke('grey');

      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        id={image.id}
        draggable
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        rotation={image.rotation}
        image={img}
        x={image.x}
        y={image.y}
        opacity={image.opacity}
        scaleX={image.scaleX}
        scaleY={image.scaleY}
        onDragEnd={(e) => {
          onChange({
            ...image,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
          // set origin to the center of the image
        offsetX={img ? img.width / 2 : 0}
        offsetY={img ? img.height / 2 : 0}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
}
