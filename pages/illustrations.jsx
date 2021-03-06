import React, { useState } from 'react';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Nav from '../components/nav';

function Pill({ text, onClick, isSelected }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={isSelected ? 'bg-gray-700 outline-none focus:outline-none mr-3 rounded-full px-5 py-2 inline-block font-medium border-2 border-gray-700 text-white' : 'bg-gray-300 border-gray-700 border-2 outline-none focus:outline-none  mr-3 rounded-full px-5 py-2 inline-block font-medium text-gray-700'}
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
    'Art',
    'Fractal',
    'Nature',
    'Others',
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
        {categories.map((category) => (
          <Pill
            key={category}
            onClick={selectCategory}
            text={category}
            isSelected={selectedCategory === category}
          />
        ))}
      </div>
      {/* grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 md:px-8 my-2 md:py-8">
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
              <div key={img.id} className="flex items-center justify-center bg-gray-400 rounded-lg">
                <img
                  loading="lazy"
                  className="rounded-lg animation-fade-in"
                  src={`assets/${img.category}/${img.path}`}
                  alt={img.name}
                  title={img.name}
                />
              </div>
            ))}
      </div>
    </div>
  );
}
