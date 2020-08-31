/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import Range from '@atlaskit/range';

export default function index() {
  // default value for slider
  const [value, setValue] = useState(0);
  // actual fibonacci terms
  const [prevTerm, setPrevTerm] = useState(0);
  const [term, setTerm] = useState(0);
  const [ratio, setRatio] = useState(0);

  // for calculating previous term without recalculating
  const FibonacciArr = [0, 1];

  // optimized through memeoization as in dp instead of regular recursion
  function FibonacciMemoized(n, arr) {
    if (n === 0 || n === 1) {
      return n;
    }
    if (arr[n] !== undefined) {
      return arr[n];
    }
    // console.log('calculating...', n);
    const fib1 = FibonacciMemoized(n - 1, arr);
    const fib2 = FibonacciMemoized(n - 2, arr);
    const fib = fib1 + fib2;

    FibonacciArr[n] = fib;

    arr[n] = fib;
    return fib;
  }

  function handleSlider(val) {
    setValue(val);
    const arr = new Array(val + 1);

    setTerm(FibonacciMemoized(val, arr));
    setPrevTerm(FibonacciArr[val - 1]);
    setRatio(FibonacciArr[val] / FibonacciArr[val - 1]);
  }

  return (
    <div className="container mx-auto mb-12 md:mb-10 md:px-8">
      <div className="font-heading leading-10 mb-8 text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
        Deriving Golden Ratio From
        <span className="text-highlight"> Fibonacci </span>
        Sequence
      </div>
      <div className="px-4 flex flex-col md:flex-row ">
        <div className="w-full flex flex-col p-4 md:w-2/3 bg-gray-100  mr-2 font-semibold font-heading text-3xl border-gray-300 rounded border-2 text-neutral">
          <div className="flex items-center justify-between">
            <div>
              {/* <svg
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
              </svg> */}
            </div>
            <div>
              <div>{prevTerm}</div>
              <div>{term}</div>
            </div>
          </div>

          <div className="text-right">
            <hr />
            {ratio}
          </div>
        </div>
        <div className="w-full mt-2 md:mt-0 p-4 md:w-1/3 border-gray-300 rounded border-2 bg-gray-100">
          <div className="flex justify-between font-medium text-base text-neutral">
            <p>
              nth Term
            </p>
            <p>{term}</p>
          </div>
          <div className="flex justify-between font-medium text-base text-neutral">
            <p>
              n-1 th Term
            </p>
            <p>{prevTerm}</p>
          </div>
          <div className="flex justify-between font-medium text-base text-neutral">
            <p>n</p>
            <p>{value}</p>
          </div>
          <Range
            step={1}
            value={value}
            onChange={(value) => handleSlider(value)}
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
