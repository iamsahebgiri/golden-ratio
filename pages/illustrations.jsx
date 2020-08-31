import React, { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Nav from '../components/nav';

function Pill({ text, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-gray-700 outline-none mr-3 rounded-full px-5 py-2 inline-block font-medium text-white"
    >
      {text}
    </button>
  );
}

export default function illustrations() {
  const categories = [
    'Logos',
    'Beauty',
    'Architecture',
    'Cars',
    'Space',
    'Marketing',
    'Design',
    'Theology',
    'Cosmos',
  ];
  const [selectedCategory, setSelectedCategory] = useState('Logos');

  const selectCategory = (e) => {
    setSelectedCategory(e.target.textContent);
  };

  const { data, error } = useSWR('/data.json', fetcher);
  if (error) return <div>Failed to load</div>;

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-800">
        <Nav />
      </div>
      <div className="flex py-5  px-2 md:px-8  bg-white  shadow items-center overflow-x-scroll hide-scroll">
        <div className="bg-gray-500  mr-3 rounded-full px-5 py-2 inline-block font-medium text-white">
          {selectedCategory}
        </div>
        {categories.filter((category) => category !== selectedCategory)
          .map((category) => (
            <Pill
              onClick={selectCategory}
              text={category}
              key={category}
            />
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4 px-2 md:px-8 mt-2 mb-2 md:mb-8 md:mt-8">
        {!data && (
        <>
          <div className="h-56 animate-pulse w-full bg-gray-400 rounded-lg" />
          <div className="h-56 animate-pulse w-full bg-gray-400 rounded-lg" />
          <div className="h-56 animate-pulse w-full bg-gray-400 rounded-lg" />
          <div className="h-56 animate-pulse w-full bg-gray-400 rounded-lg" />
          <div className="h-56 animate-pulse w-full bg-gray-400 rounded-lg" />
          <div className="h-56 animate-pulse w-full bg-gray-400 rounded-lg" />
          <div className="h-56 animate-pulse w-full bg-gray-400 rounded-lg" />
          <div className="h-56 animate-pulse w-full bg-gray-400 rounded-lg" />
        </>
        )}
        {data
          && data
            .filter((img) => img.category === selectedCategory)
            .map((img) => (
              <img
                className="h-56 w-full bg-gray-400 rounded-lg"
                src={`assets/${img.category}/${img.path}`}
                alt={img.name}
                key={img.id}
              />
            ))}
      </div>
    </div>
  );
}
