import React from 'react';

export default function index() {
  return (
    <div className="container mx-auto mb-12 md:mb-16 md:p-8">
      <div className="font-heading leading-tight text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
        Frequently used
        <span className="text-highlight"> Ratio </span>
        Sets
      </div>
      <div className="flex px-4 mt-5 overflow-x-scroll hide-scroll">
        <div className="mr-5">
          <div className="h-32 w-32 bg-gray-300 rounded-lg" />
          <div className="h-5 w-32 bg-gray-300 rounded-full mt-3" />
        </div>
        <div className="mr-5">
          <div className="h-32 w-32 bg-gray-300 rounded-lg" />
          <div className="h-5 w-32 bg-gray-300 rounded-full mt-3" />
        </div>
        <div>
          <div className="h-32 w-32 bg-gray-300 rounded-lg" />
          <div className="h-5 w-32 bg-gray-300 rounded-full mt-3" />
        </div>
      </div>
    </div>
  );
}
