import React from 'react';

function SetBox({ name, img }) {
  return (
    <div className="mr-5">
      <img className="h-32 w-32 bg-gray-300 rounded-lg" src={`./sets/${img}`} alt={name} />
      <p className="h-5 w-32 mt-3 text-center">{name}</p>
    </div>
  );
}

export default function index() {
  return (
    <div className="container mx-auto mb-12 md:mb-16 md:p-8">
      <div className="font-heading leading-10 text-3xl md:text-4xl font-semibold capitalize px-4 text-neutral">
        Frequently used
        <span className="text-highlight"> Ratio </span>
        Sets
      </div>
      <div className="flex px-4 mt-8 overflow-x-scroll hide-scroll">
        <SetBox name="Square" img="square.png" />
        <SetBox name="5:4" img="5_4.png" />
        <SetBox name="4:3" img="4_3.png" />
        <SetBox name="Silver Ratio" img="silver_ratio.png" />
        <SetBox name="Golden Ratio" img="golden_ratio.png" />
        <SetBox name="Platinum Ratio" img="platinum_ratio.png" />
        <SetBox name="16:9" img="16_9.png" />
        <SetBox name="Bronze Ratio" img="bronze_ratio.png" />
      </div>
    </div>
  );
}
