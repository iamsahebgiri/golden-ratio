/* eslint-disable no-param-reassign */
import {
  Stage, Layer, Circle, Rect,
} from 'react-konva';
import React, { useState } from 'react';
import Range from '@atlaskit/range';
import useCanvasSize from '../../utils/useCanvasSize';

export default function index() {
  // get current height and width of the window for reponsive canvas
  const [canvasWidth, canvasHeight] = useCanvasSize();
  const [angle, setAngle] = useState(1);
  const [patternColor, setPatternColor] = useState('#ff8000');
  const [backgroundColor, setBackgroundColor] = useState('#02CC89');
  const c = 8;
  const elem = [];
  for (let i = 0; i < 500; i += 1) {
    const a = i * 137.5 * angle;
    const r = c * Math.sqrt(i);
    const x = r * Math.cos(a * (Math.PI / 180));
    const y = r * Math.sin(a * (Math.PI / 180));
    elem.push(
      <Circle
        key={i}
        x={x + canvasWidth / 2}
        y={y + canvasHeight / 2}
        fill={patternColor}
        radius={5}
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
      <div className="container mx-auto mb-12 md:mb-16 md:px-8">
        <div className="font-heading leading-10 text-3xl tracking-tight md:text-4xl font-semibold capitalize px-4 md:p-0 text-neutral">
          Sunflower
          {' '}
          <span className="text-highlight">Pattern</span>
        </div>
        <div className="flex flex-col-reverse mt-5 md:flex-row">
          <div className="mx-4 md:mx-0 md:mr-0 mt-4 md:mt-0 md:flex flex-col md:w-2/3 bg-gray-100 font-semibold font-heading text-3xl border-gray-300 rounded border-2 text-neutral">
            <Stage width={canvasWidth} height={canvasHeight}>
              <Layer>
                <Rect
                  x={0}
                  y={0}
                  width={canvasWidth}
                  height={canvasHeight}
                  fill={backgroundColor}
                />
              </Layer>
              <Layer draggable>{elem}</Layer>
            </Stage>
          </div>
          <div className="w-full md:w-1/3 px-4 md:p-0 md:pl-4">
            <div className="p-4 border-gray-300 rounded border-2 bg-gray-100">
              <div className="flex justify-between font-medium text-base text-neutral">
                <p>Angle</p>
                <p>{angle}</p>
              </div>
              <Range
                min={0.1}
                max={5}
                step={0.002}
                value={angle}
                onChange={(value) => setAngle(value)}
              />
              <div className="rounded-md shadow-sm mb-3">
                <input
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-brand focus:z-10 sm:text-sm sm:leading-5"
                  type="number"
                  min={1}
                  max={5}
                  step={0.002}
                  value={angle}
                  onChange={onNumberChange}
                />
              </div>
              <div className="flex flex-col font-medium text-base text-neutral">
                <div className="flex justify-between mb-2 items-center font-medium text-base text-neutral">
                  <p>Pattern Color</p>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  <input
                    className="color-picker h-12 w-12"
                    type="color"
                    value={patternColor}
                    onChange={onPatternColorChange}
                  />
                </div>
              </div>
              <div className="flex flex-col font-medium text-base text-neutral">
                <div className="flex justify-between mb-2 items-center font-medium text-base text-neutral">
                  <p>Background Color</p>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  <input
                    className="color-picker h-12 w-12"
                    type="color"
                    value={backgroundColor}
                    onChange={onBackgroundColorChange}
                  />
                </div>
              </div>
              <p className="mt-8">
                * Try Changing the value to golden ratio i.e. 1.618 and see if
                it forms Sunflower like pattern.
              </p>
              <p className="mt-2">* You can also drag the pattern.</p>
              <p className="mt-2">* You can also save the image by right clicking on it.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
