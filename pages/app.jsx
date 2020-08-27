import React from 'react';
import Link from 'next/link';
import Logo from '../components/logo';

export default function credits() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-between">
      <div className="bg-white shadow flex items-center justify-between px-2 py-4">
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
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="canvas h-64 w-11/12 bg-gray-400 mx-auto rounded" />
        </div>
        <div>
          <div className="sidebar" />

        </div>
      </div>
    </div>
  );
}
