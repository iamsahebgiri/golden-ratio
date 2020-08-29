/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Range from '@atlaskit/range';
import {
  Stage, Layer, Rect, Arc,
} from 'react-konva';

export default function index() {
  const [value, setValue] = useState(0);
  const [fillColorClass, setFillColorClass] = useState('bg-blue-brand');
  const [selectedFillColor, setSelectedFillColor] = useState('#0077FF');
  const [strokeColorClass, setStrokeColorClass] = useState('bg-neutral-brand');
  const [selectedStrokeColor, setSelectedStrokeColor] = useState('#FFF');

  const fillColorClickHandler = (e) => {
    setSelectedFillColor(e.target.getAttribute('data-color')); // for changing color in canvas
    setFillColorClass(e.target.classList[2]); // for helper button which one is selected
  };

  const strokeColorClickHandler = (e) => {
    setSelectedStrokeColor(e.target.getAttribute('data-color'));
    setStrokeColorClass(e.target.classList[4]);
  };

  const loop = () => {
    const strokeWidth = 3;
    const goldenRatio = 1.618;
    let side = 494;
    let unalteredSide = 494;
    let x = 497;
    let y = 3;
    let xArc = x;
    let yArc = y;
    let dir = 1;
    let rotation = 270;
    const canvasElement = [];

    for (let i = 0; i < Math.round(value / 10); i += 1) {
      side /= goldenRatio;
      if (dir === 1) {
        xArc = x;
        yArc = y + side;
        rotation = 270;
      } else if (dir === 2) {
        xArc = x;
        yArc = y;
        rotation = 360;
      } else if (dir === 3) {
        xArc = x + side;
        yArc = y;
        rotation = 90;
      } else if (dir === 4) {
        xArc = x + side;
        yArc = y + side;
        rotation = 180;
      }
      // Can be merged into but left to keep the code readable
      canvasElement.push(
        <React.Fragment key={i}>
          <Rect
            x={x}
            y={y}
            height={side}
            width={side}
            stroke={selectedStrokeColor}
            fill={selectedFillColor}
            strokeWidth={strokeWidth}
          />
          <Arc
            x={xArc}
            y={yArc}
            innerRadius={side}
            outerRadius={side}
            angle={90}
            rotation={rotation}
            fill={selectedFillColor}
            stroke={selectedStrokeColor}
            strokeWidth={3}
          />
        </React.Fragment>,
      );
      dir += 1;
      const nextSide = unalteredSide / goldenRatio;
      const nextNextSide = unalteredSide / goldenRatio / goldenRatio;
      if (dir > 4) dir = 1;
      if (dir === 1) {
        x += nextSide;
      } else if (dir === 2) {
        x += nextSide - nextNextSide;
        y += nextSide;
        xArc = x;
        yArc = y - side;
      } else if (dir === 3) {
        x -= nextNextSide;
        y += nextSide - nextNextSide;
      } else if (dir === 4) {
        y -= nextNextSide;
      }
      // console.table({ dir, x, y });

      unalteredSide /= goldenRatio;
    }
    return canvasElement;
  };

  const rangeHandler = (value) => setValue(value);
  return (
    <div className="container mx-auto mb-12 md:mb-10 md:px-8">
      <div className="font-heading leading-10 text-3xl tracking-tight md:text-4xl font-semibold capitalize px-4 text-neutral">
        Golden
        {' '}
        <span className="text-highlight">
          Spiral
        </span>
      </div>
      <div className="flex flex-col-reverse mt-5 md:flex-row">
        <div className="w-full hidden md:flex flex-col md:w-2/3 bg-gray-100  mr-2 font-semibold font-heading text-3xl border-gray-300 rounded border-2 text-neutral">
          <Stage width={809} height={500}>
            <Layer>
              <Rect
                x={3}
                y={3}
                height={494}
                width={494}
                stroke={selectedStrokeColor}
                fill={selectedFillColor}
                strokeWidth={3}
              />
              <Arc
                x={497}
                y={497}
                innerRadius={494}
                outerRadius={494}
                angle={90}
                rotation={180}
                fill="#0077FF"
                stroke={selectedStrokeColor}
                strokeWidth={3}
              />
              {loop()}
            </Layer>
          </Stage>
        </div>
        <div className="w-full px-4 md:w-2/6">
          <div className="p-4 border-gray-300 rounded border-2 bg-gray-100">
            <div className="flex justify-between font-medium text-base text-neutral">
              <p>Slider</p>
              <p>{value}</p>
            </div>
            <Range
              step={10}
              value={value}
              onChange={(value) => rangeHandler(value)}
            />
            <div className="flex flex-col font-medium text-base text-neutral">
              <div className="flex justify-between mb-2 items-center font-medium text-base text-neutral">
                <p>Fill Color</p>
                <div className={`h-3 w-3 ${fillColorClass}`} />
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div
                  onKeyPress={fillColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={fillColorClickHandler}
                  data-color="#0077FF"
                  className="h-12 w-12 bg-blue-brand rounded"
                />
                <div
                  onKeyPress={fillColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={fillColorClickHandler}
                  data-color="#06CCFF"
                  className="h-12 w-12 bg-aqua-brand rounded"
                />
                <div
                  onKeyPress={fillColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={fillColorClickHandler}
                  data-color="#02CC89"
                  className="h-12 w-12 bg-green-brand rounded"
                />
                <div
                  onKeyPress={fillColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={fillColorClickHandler}
                  data-color="#FFBB03"
                  className="h-12 w-12 bg-yellow-brand rounded"
                />
                <div
                  onKeyPress={fillColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={fillColorClickHandler}
                  data-color="#844CFE"
                  className="h-12 w-12 bg-purple-brand rounded"
                />
                <div
                  onKeyPress={fillColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={fillColorClickHandler}
                  data-color="#FF3467"
                  className="h-12 w-12 bg-red-brand rounded"
                />
                <div
                  onKeyPress={fillColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={fillColorClickHandler}
                  data-color="#F9FAFF"
                  className="h-12 w-12 bg-gray-300 rounded"
                />
                <div
                  onKeyPress={fillColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={fillColorClickHandler}
                  data-color="#2B2B2B"
                  className="h-12 w-12 bg-black-brand rounded"
                />
              </div>
            </div>
            <div className="flex flex-col font-medium text-base text-neutral mt-3">
              <div className="flex justify-between mb-2 items-center font-medium text-base text-neutral">
                <p>Stroke Color</p>
                <div className={`h-3 w-3 ${strokeColorClass}`} />
              </div>
              <div className="grid grid-cols-6 gap-2">
                <div
                  onKeyPress={strokeColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={strokeColorClickHandler}
                  data-color="#F9FAFF"
                  className="h-12 w-12 border-2 border-gray-300 bg-gray-300 bg-opacity-25 rounded"
                />
                <div
                  onKeyPress={strokeColorClickHandler}
                  role="button"
                  tabIndex="0"
                  onClick={strokeColorClickHandler}
                  data-color="#2B2B2B"
                  className="h-12 w-12 border-2 border-black-brand bg-black-brand bg-opacity-25 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
