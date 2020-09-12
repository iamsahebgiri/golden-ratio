import React from 'react';
import Nav from '../components/nav';

export default function credits() {
  return (
    <div>
      <div className="bg-gray-800 mb-4">
        <Nav />
      </div>

      <div className="p-2 md:px-8">
        <div className="font-heading leading-10 mb-2  text-3xl md:text-4xl tracking-tight font-semibold capitalize px-4 md:p-0 text-neutral">
          <span className="text-highlight">
            Credits
          </span>
        </div>
        <ul>
          <li>
            Next.js
          </li>
          <li>
            React.js
          </li>
          <li>
            Tailwind CSS
          </li>
          <li>
            Framer Motion
          </li>
          <li>
            Konva js
          </li>
          <li>
            styled-components
          </li>
          <li>
            Atlaskit
          </li>
          <li>
            nprogress
          </li>
        </ul>
      </div>

      <div className="p-2 md:px-8 mb-8">
        <div className="font-heading leading-10 text-3xl md:text-4xl mb-2 tracking-tight font-semibold capitalize px-4 md:p-0 text-neutral">
          <span className="text-highlight">
            Bibliography
          </span>
        </div>
        <ul>
          <li>
            https://www.goldennumber.net/
          </li>
          <li>
            https://dribbble.com/
          </li>
          <li>
            https://instagram.com/
          </li>
          <li>
            https://en.wikipedia.org/wiki/Golden_ratio
          </li>
          <li>
            https://www.britannica.com/science/golden-ratio
          </li>
          <li>
            https://www.canva.com/learn/what-is-the-golden-ratio/
          </li>
          <li>
            https://mathworld.wolfram.com/GoldenRatio.html
          </li>
          <li>
            https://www.omnicalculator.com/math/golden-ratio
          </li>
          <li>
            https://www.youtube.com/watch?v=ztTskI4YW6g
          </li>
          <li>
            https://www.creativebloq.com/design/designers-guide-golden-ratio-12121546
          </li>
          <li>
            https://www.khanacademy.org/math/geometry-home/geometry-lines/the-golden-ratio/v/the-golden-ratio
          </li>

          <li>
            https://blog.prototypr.io/golden-ratio-what-it-is-and-why-should-you-use-it-in-design-7c3f43bcf98
          </li>
        </ul>
      </div>
    </div>
  );
}
