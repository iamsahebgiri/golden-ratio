import {
  Stage, Layer, Circle, Rect,
} from 'react-konva';
import React, { useState } from 'react';
import Range from '@atlaskit/range';

export default function index() {
  const [angle, setAngle] = useState(1);
  const [patternColor, setPatternColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#EEEEEE');
  const c = 10;
  const elem = [];
  for (let i = 0; i < 500; i += 1) {
    const a = i * 137.5 * angle;
    const r = c * Math.sqrt(i);
    const x = r * Math.cos(a * (Math.PI / 180));
    const y = r * Math.sin(a * (Math.PI / 180));
    elem.push(
      <Circle
        key={i}
        x={x + 809 / 2}
        y={y + 500 / 2}
        fill={patternColor}
        radius={4}
      />,
    );
  }
  const onPatternColorChange = (e) => {
    setPatternColor(e.target.value);
  };
  const onBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };
  const onNumberChange = (e) => {
    setAngle(e.target.value);
  };
  return (
    <>
      <Stage width={809} height={500}>
        <Layer>
          <Rect x={0} y={0} width={809} height={500} fill={backgroundColor} />
        </Layer>
        <Layer draggable>{elem}</Layer>
      </Stage>
      <Range
        min={0.1}
        max={5}
        step={0.002}
        value={angle}
        onChange={(value) => setAngle(value)}
      />
      <br />
      <div className="rounded-md shadow-sm">
        <input
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-brand focus:z-10 sm:text-sm sm:leading-5"
          type="number"
          max={5}
          step={0.002}
          value={angle}
          onChange={onNumberChange}
        />
      </div>
      <p>
        patternColor
        <input className="color-picker h-12 w-12" type="color" value={patternColor} onChange={onPatternColorChange} />
      </p>
      <p>
        backgroundColor
        <input className="color-picker h-12 w-12" type="color" value={backgroundColor} onChange={onBackgroundColorChange} />
      </p>
    </>
  );
}
