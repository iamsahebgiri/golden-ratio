/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Range from '@atlaskit/range';
import {
  Stage, Layer, Rect, Arc,
} from 'react-konva';
import FillColorButton from '../fillColorButton';
import useCanvasSize from '../../utils/useCanvasSize';

export default function index() {
  // value for slider
  const [value, setValue] = useState(0);
  // get current height and width of the window for reponsive canvas
  const [canvasWidth, canvasHeight] = useCanvasSize();
  const [fillColorClass, setFillColorClass] = useState('bg-blue-brand');
  const [selectedFillColor, setSelectedFillColor] = useState('#0077FF');
  const [strokeColorClass, setStrokeColorClass] = useState('bg-neutral-brand');
  const [selectedStrokeColor, setSelectedStrokeColor] = useState('#FFF');

  const fillColors = [
    {
      color: '#0077FF',
      class: 'bg-blue-brand',
    },
    {
      color: '#06CCFF',
      class: 'bg-aqua-brand',
    },
    {
      color: '#02CC89',
      class: 'bg-green-brand',
    },
    {
      color: '#FFBB03',
      class: 'bg-yellow-brand',
    },
    {
      color: '#844CFE',
      class: 'bg-purple-brand',
    },
    {
      color: '#FF3467',
      class: 'bg-red-brand',
    },
    {
      color: '#2B2B2B',
      class: 'bg-black-brand',
    },
    {
      color: '#F9FAFF',
      class: 'bg-gray-300',
    },
  ];

  const fillColorClickHandler = (e) => {
    // change background color of canvas
    setSelectedFillColor(e.target.getAttribute('data-color'));
    // current selected color
    setFillColorClass(e.target.classList[2]);
  };

  const strokeColorClickHandler = (e) => {
    setSelectedStrokeColor(e.target.getAttribute('data-color'));
    setStrokeColorClass(e.target.classList[4]);
  };

  const renderCanvas = () => {
    const strokeWidth = 3;
    const goldenRatio = 1.618;
    let side = canvasHeight - (2 * strokeWidth);
    let unalteredSide = side;
    let x = side + strokeWidth;
    let y = strokeWidth;
    let xArc = x;
    let yArc = y;
    let dir = 1;
    let rotation = 270;
    const canvasElement = [
      <React.Fragment key={0}>
        <Rect
          x={strokeWidth}
          y={strokeWidth}
          height={side}
          width={side}
          stroke={selectedStrokeColor}
          fill={selectedFillColor}
          strokeWidth={strokeWidth}
        />
        <Arc
          x={side + strokeWidth}
          y={side + strokeWidth}
          innerRadius={side}
          outerRadius={side}
          angle={90}
          rotation={180}
          fill="#0077FF"
          stroke={selectedStrokeColor}
          strokeWidth={strokeWidth}
        />
      </React.Fragment>,
    ];

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
      canvasElement.push(
        <React.Fragment key={i + 1}>
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

      unalteredSide /= goldenRatio;
    }
    return canvasElement;
  };

  return (
    <div className="container mx-auto mb-12 md:mb-10 md:px-8">
      <div className="font-heading leading-10 text-3xl tracking-tight md:text-4xl font-semibold capitalize px-4 text-neutral">
        Golden
        {' '}
        <span className="text-highlight">Spiral</span>
      </div>
      <div className="flex flex-col-reverse mt-5 md:flex-row">
        <div className="mx-4 md:mr-0 mt-4 md:mt-0 md:flex flex-col md:w-2/3 bg-gray-100 font-semibold font-heading text-3xl border-gray-300 rounded border-2 text-neutral">
          <Stage width={canvasWidth} height={canvasHeight}>
            <Layer>{renderCanvas()}</Layer>
          </Stage>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <div className="p-4 border-gray-300 rounded border-2 bg-gray-100">
            <div className="flex justify-between font-medium text-base text-neutral">
              <p>Slider</p>
              <p>{value}</p>
            </div>
            <Range
              step={10}
              value={value}
              onChange={(value) => setValue(value)}
            />
            <div className="flex flex-col font-medium text-base text-neutral">
              <div className="flex justify-between mb-2 items-center font-medium text-base text-neutral">
                <p>Fill Color</p>
                <div className={`h-3 w-3 ${fillColorClass}`} />
              </div>
              <div className="grid grid-cols-6 gap-2">
                {fillColors.map((fillColor) => (
                  <FillColorButton
                    key={fillColor.color}
                    fillColorClickHandler={fillColorClickHandler}
                    color={fillColor.color}
                    colorClass={fillColor.class}
                  />
                ))}
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
