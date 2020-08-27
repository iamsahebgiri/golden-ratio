import React from 'react';
import Nav from '../components/nav';

function Pill({ text }) {
  return (
    <div className="bg-gray-700  mr-3 rounded-full px-5 py-2 inline-block font-medium text-white">
      {text}
    </div>
  );
}

export default function illustrations() {
  const types = ['Logos', 'Beauty', 'Architecture', 'Cars', 'Space', 'Marketing', 'Design', 'Theology', 'Cosmos'];
  const pills = [];

  for (let i = 0; i < types.length; i += 1) {
    pills.push(<Pill text={types[i]} key={i} />);
  }

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-800">
        <Nav />
      </div>
      <div className="flex py-5  px-2 md:px-8  bg-white  shadow items-center overflow-x-scroll hide-scroll">
        <div className="bg-gray-500  mr-3 rounded-full px-5 py-2 inline-block font-medium text-white">
          Saheb
        </div>
        {pills}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4 px-2 md:px-8 mt-2 md:mt-8">
        <div className="h-56 w-full bg-gray-400 rounded-lg" />
        <div className="h-56 w-full bg-gray-400 rounded-lg" />
        <div className="h-56 w-full bg-gray-400 rounded-lg" />
        <div className="h-56 w-full bg-gray-400 rounded-lg" />
        <div className="h-56 w-full bg-gray-400 rounded-lg" />
        <div className="h-56 w-full bg-gray-400 rounded-lg" />
        <div className="h-56 w-full bg-gray-400 rounded-lg" />
        <div className="h-56 w-full bg-gray-400 rounded-lg" />
      </div>
    </div>
  );
}
