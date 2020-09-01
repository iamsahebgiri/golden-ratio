/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu, FiBox, FiCommand, FiHome, FiAward,
} from 'react-icons/fi';
import Logo from '../logo';

export default function index() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const togglePanel = () => {
    setShowModal(!showModal);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto p-3 md:px-8 flex items-center justify-between">
        <Logo />
        <button
          onClick={togglePanel}
          type="button"
          className="h-10 w-10 focus:outline-none flex items-center justify-center hover:bg-white hover:bg-opacity-25 hover:text-opacity-100 rounded-lg md:hidden"
        >
          <FiMenu size="24" className="text-white text-opacity-75" />
        </button>
        <ul className="hidden md:flex">
          <li>
            <Link href="/illustrations">
              <a href="/illustrations" className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none ${router.pathname === '/illustrations' ? 'bg-white bg-opacity-25 text-white' : null}`}>Illustrations</a>
            </Link>
          </li>
          <li>
            <Link href="/app">
              <a href="/app" className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none ${router.pathname === '/app' ? 'bg-white bg-opacity-25 text-white' : null}`}>My App</a>
            </Link>
          </li>
          <li>
            <Link href="/credits">
              <a href="/credits" className={`ml-4 px-3 py-2 rounded-md text-sm font-medium  leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none ${router.pathname === '/credits' ? 'bg-white bg-opacity-25 text-white' : null}`}>Credits</a>
            </Link>
          </li>
        </ul>
      </div>

      <AnimatePresence>
        {showModal && (
          <div
            className="md:hidden h-screen fixed inset-0 z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { type: 'easeInOut', duration: 0.5 } }}
              className="absolute inset-0 bg-gray-500 bg-opacity-75 focus:outline-none cursor-default"
              onClick={togglePanel}
              onKeyDown={togglePanel}
              tabIndex="0"
              role="button"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ x: { duration: 0.5, type: 'easeInOut' } }}
              className="mob-nav-bar w-4/6 bg-white h-full shadow-sm absolute max-w-full"
            >
              <div className="p-2">
                <Logo />
              </div>
              <ul>
                <li className="m-2">
                  <Link href="/">
                    <a href="/" className={`flex items-center px-2 py-2 w-full rounded ${router.pathname === '/' ? 'bg-gray-300' : null}`}>
                      <FiHome className="ml-2 mr-4" />
                      Home
                    </a>
                  </Link>
                </li>
                <li className="m-2">
                  <Link href="/illustrations">
                    <a href="/illustrations" className={`flex items-center px-2 py-2 w-full rounded ${router.pathname === '/illustrations' ? 'bg-gray-300' : null} `}>
                      <FiBox className="ml-2 mr-4" />
                      Illustrations
                    </a>
                  </Link>
                </li>
                <li className="m-2">
                  <Link href="/app">
                    <a href="/app" className={`flex items-center px-2 py-2 w-full rounded ${router.pathname === '/app' ? 'bg-gray-300' : null} `}>
                      <FiCommand className="ml-2 mr-4" />
                      My App
                    </a>
                  </Link>
                </li>
                <li className="m-2">
                  <Link href="/credits">
                    <a href="/credits" className={`flex items-center px-2 py-2 w-full rounded ${router.pathname === '/credits' ? 'bg-gray-300' : null} `}>
                      <FiAward className="ml-2 mr-4" />
                      Credits
                    </a>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        ) }
      </AnimatePresence>
    </nav>
  );
}
