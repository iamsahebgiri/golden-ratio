import React from 'react';
import Link from 'next/link';

export default function index() {
  return (
    <Link href="/">
      <a aria-label="Navigate Home" href="/">
        <div className="h-10 px-6 bg-white font-bold text-xl rounded-lg flex items-center justify-center">
          <span className="text-highlight">
            Golden
          </span>
          Ratio
          <span className="text-green-500">.</span>
        </div>
      </a>
    </Link>
  );
}
