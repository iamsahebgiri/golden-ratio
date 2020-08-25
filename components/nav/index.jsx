import React from 'react';

export default function index() {
  return (
    <nav>
      <div className="max-w-7xl w-full mx-auto py-6 px-6 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="h-10 px-6 bg-white font-bold text-xl rounded-lg flex items-center justify-center">
          <span className="text-highlight">
            Golden
          </span>
          Ratio
          <span className="text-green-500">.</span>
        </div>
        <ul className="flex">
          <li>
            <a href="/" className="ml-4 px-3 py-2 rounded-md text-sm font-normal leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none focus:text-white focus:bg-gray-200 transition duration-150 ease-in-out">Illustrations</a>
          </li>
          <li>
            <a href="/" className="ml-4 px-3 py-2 rounded-md text-sm font-normal leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none focus:text-white focus:bg-gray-200 transition duration-150 ease-in-out">My App</a>
          </li>
          <li>
            <a href="/" className="ml-4 px-3 py-2 rounded-md text-sm font-normal leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none focus:text-white focus:bg-gray-200 transition duration-150 ease-in-out">Bibliography</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
