/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Range from '@atlaskit/range';

export default function index() {
  const [value, setValue] = useState(3);
  const [prevTerm, setPrevTerm] = useState(1);
  const [nextTerm, setNextTerm] = useState(1);
  const [goldenRatio, setGoldenRatio] = useState(1);

  const step = 3;

  function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 0;
    if (num === 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  function calculateFibonacciRatio(value) {
    setValue(value);
    if (value !== 0) {
      setPrevTerm(fibonacci(value / step));
      setNextTerm(fibonacci(value / step - 1));
      const requiredRatio = prevTerm / nextTerm;
      setGoldenRatio(requiredRatio);
    }
  }

  return (
    <div className="container mx-auto mb-12 md:mb-10 md:px-8">
      <div className="font-heading leading-10 mb-8 text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
        Deriving Golden Ratio From
        <span className="text-highlight"> Fibonacci </span>
        Sequence
      </div>
      <div className="px-4 flex flex-col md:flex-row ">
        <div className="w-full flex flex-col p-2 md:w-2/3 bg-gray-100  mr-2 font-semibold font-heading text-3xl border-gray-300 rounded border-2 text-neutral">
          <div className="flex items-center justify-between">
            <div>
              <svg
                className="h-6 w-6"
                width="36"
                height="38"
                viewBox="0 0 36 38"
                fill="none"
              >
                <path
                  d="M0 19H36"
                  stroke="#0077FF"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <circle cx="18" cy="5" r="5" fill="#0077FF" />
                <circle cx="18" cy="33" r="5" fill="#0077FF" />
              </svg>
            </div>
            <div>
              <div>{prevTerm}</div>
              <div>{nextTerm}</div>
            </div>
          </div>

          <div className="text-right">
            <hr />
            {goldenRatio}
          </div>
        </div>
        <div className="w-full mt-2 md:mt-0 p-2 md:w-1/3 border-gray-300 rounded border-2 bg-gray-100">
          <p className="font-medium text-base text-neutral">Slider</p>
          <Range
            step={step}
            value={value}
            onChange={(value) => calculateFibonacciRatio(value)}
          />
          {/* <p>
            n
            <sup>th</sup>
            {' '}
            term :
            {' '}
            {value / step}
          </p> */}
        </div>
      </div>
      <div className="mt-5 px-4">
        <span className="text-highlight font-semibold"> Inference </span>
        <p className="text-neutral">
          The Fibonacci sequence, also a plot element in “The Da Vinci Code,”
          provides yet another way to derive Phi mathematically. The series is
          quite simple. Start with 0 and add 1 to get 1. Then repeat the process
          of adding each two numbers in the series to determine the next one: 0,
          1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, and so on. This
          pattern is also found in the diagonals of Pascal’s Triangle. The
          relationship to the Golden Ratio or Phi is found by dividing each
          number by the one before it. The further you go in the series, the
          closer the result gets to Phi. If you go further into the series and
          you’ll find that 233/144 = 1.61805, a very close approximation of Phi,
          which to ten decimal places is 1.6180339887.
        </p>
      </div>
    </div>
  );
}
