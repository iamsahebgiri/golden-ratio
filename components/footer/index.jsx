import React from 'react';
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from 'react-icons/ai';

export default function index() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 md:py-14 px-4 sm:px-6 lg:px-16 text-sm leading-5">
      <div className="max-w-container mx-auto flex flex-col md:flex-row items-center justify-between  text-center space-y-6 md:space-y-0 md:text-left md:flex">
        <div className="space-y-6 md:space-y-0 md:space-x-10 flex flex-col items-center md:flex-row">
          <div className="flex items-center space-x-2">
            <p>
              Designed and Developed by
              <a href="https://iamsahebgiri.now.sh" target="_blank" rel="noreferrer" className="font-medium text-gray-900 hover:text-gray-500 transition-colors duration-150"> @iamsahebgiri</a>
            </p>
          </div>
        </div>
        <div>
          <a href="https://twitter.com/iamsahebgiri" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-6 text-twitter-blue ml-auto font-medium">
            <AiOutlineTwitter size="24" className="text-gray-500  hover:text-blue-600" />
          </a>
          <a href="https://facebook.com/iamsahebgiri" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-6 text-twitter-blue ml-auto font-medium">
            <AiFillFacebook size="24" className="text-gray-500 hover:text-blue-brand" />
          </a>
          <a href="https://instagram.com/iamsahebgiri" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-6 text-twitter-blue ml-auto font-medium">
            <AiFillInstagram size="24" className="text-gray-500 hover:text-red-brand" />
          </a>
          <a href="https://github.com/iamsahebgiri" target="_blank" rel="noreferrer" className="inline-flex items-center space-x-6 text-twitter-blue ml-auto font-medium">
            <AiFillGithub size="24" className="text-gray-500 hover:text-purple-brand" />
          </a>
        </div>
      </div>
    </footer>
  );
}
