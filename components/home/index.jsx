import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Nav from '../nav';

export default function index() {
  return (
    <div className="bg-gradient-home py-48 mb-12 md:h-screen md:p-0 flex flex-col justify-between">
      <Nav />
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl md:text-7xl font-heading text-center text-white">
            Golden Ratio
          </h1>
          <div className="inline-block bg-green-500 font-bold tracking-widest text-sm px-6 py-1 font-heading uppercase leading-relaxed text-white">
            De Divina Proportione
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <FiChevronDown color="#FFF" size="48" />
      </div>
    </div>
  );
}
