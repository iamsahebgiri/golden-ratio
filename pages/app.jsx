import React from 'react';
import Link from 'next/link';
import Logo from '../components/logo';

export default function credits() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
      <div className="bg-gray-800 border-b-2 flex items-center justify-between px-2 py-3">
        <Link href="/">
          <a href="/">
            <div className="bg-gray-200 md:ml-5 rounded-full px-5 py-1 inline-block font-medium">
              Home
            </div>
          </a>
        </Link>
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="bg-blue-brand text-white md:mr-5 rounded-full px-5 py-1 inline-block font-medium">
          Save
        </div>
      </div>
      <div className="grid grid-rows-6 grid-cols-10 grid-flow-col gap-4 h-full">

        <div className="row-span-5 col-span-8 md:h-full bg-gray-300" />
        <div className="row-span-1 col-span-8 md:h-full bg-gray-400" />
        <div className="row-span-6 col-span-2 md:h-full bg-white" />
      </div>
    </div>
  );
}
