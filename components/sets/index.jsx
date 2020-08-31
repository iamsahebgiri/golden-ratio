import React from 'react';

export default function index() {
  return (
    <div className="container mx-auto mb-12 md:mb-16 md:p-8">
      <div className="font-heading leading-10 text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
        Frequently used
        <span className="text-highlight"> Ratio </span>
        Sets
      </div>
      <div className="flex px-4 mt-8 overflow-x-scroll hide-scroll">
        {/* <div className="h-32 w-32 bg-gray-300 rounded-lg" /> */}
        {/* <div className="h-5 w-32 bg-gray-300 rounded-full mt-3" /> */}
        <div className="mr-5">
          <img className="h-32 w-32 bg-gray-300 rounded-lg" src="./sets/square.png" alt="Square" />
          <p className="h-5 w-32 mt-3 text-center">Suqare</p>
        </div>
        <div className="mr-5">
          <img className="h-32 w-32 bg-gray-300 rounded-lg" src="./sets/5_4.png" alt="5:4" />
          <p className="h-5 w-32 mt-3 text-center">5:4</p>
        </div>
        <div className="mr-5">
          <img className="h-32 w-32 bg-gray-300 rounded-lg" src="./sets/4_3.png" alt="4:3" />
          <p className="h-5 w-32 mt-3 text-center">4:3</p>
        </div>
        <div className="mr-5">
          <img className="h-32 w-32 bg-gray-300 rounded-lg" src="./sets/silver_ratio.png" alt="Silver Ratio" />
          <p className="h-5 w-32 mt-3 text-center">Silver Ratio</p>
        </div>
        <div className="mr-5">
          <img className="h-32 w-32 bg-gray-300 rounded-lg" src="./sets/golden_ratio.png" alt="Golden Ratio" />
          <p className="h-5 w-32 mt-3 text-center">Golden Ratio</p>
        </div>
        <div className="mr-5">
          <img className="h-32 w-32 bg-gray-300 rounded-lg" src="./sets/platinum_ratio.png" alt="Platinum Ratio" />
          <p className="h-5 w-32 mt-3 text-center">Platinum Ratio</p>
        </div>
        <div className="mr-5">
          <img className="h-32 w-32 bg-gray-300 rounded-lg" src="./sets/16_9.png" alt="16:9" />
          <p className="h-5 w-32 mt-3 text-center">16:9</p>
        </div>
        <div className="mr-5">
          <img className="h-32 w-32 bg-gray-300 rounded-lg" src="./sets/bronze_ratio.png" alt="Bronze Ratio" />
          <p className="h-5 w-32 mt-3 text-center">Bronze Ratio</p>
        </div>
      </div>
    </div>
  );
}
