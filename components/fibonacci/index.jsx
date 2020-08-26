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
      setNextTerm(fibonacci((value / step) - 1));
      const requiredRatio = prevTerm / nextTerm;
      setGoldenRatio(requiredRatio);
    }
  }

  return (
    <div className="container mx-auto mb-12 md:mb-10 md:px-8">
      <div className="font-heading leading-snug text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
        Deriving Golden Ratio From
        <span className="text-highlight">
          {' '}
          Fibonacci
          {' '}
        </span>
        Sequence
      </div>
      <div className="px-4 flex flex-col md:flex-row">
        <div className="w-2/3  mr-2 font-bold text-2xl font-numeric">
          { prevTerm }
          <br />
          { nextTerm }
          <hr />
          { goldenRatio }
        </div>
        <div className="w-1/3">
          <Range step={step} value={value} onChange={(value) => calculateFibonacciRatio(value)} />
          <p>
            The current value is:
            {value / step}
          </p>
        </div>
      </div>
    </div>
  );
}
