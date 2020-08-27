import React, { Component } from 'react';
import Link from 'next/link';
import {
  FiMenu, FiBox, FiCommand, FiFile,
} from 'react-icons/fi';
import Logo from '../logo';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.panel = React.createRef();
    this.togglePanel = this.togglePanel.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  togglePanel() {
    const { isOpen } = this.state;
    if (isOpen === true) {
      this.panel.current.classList.add('hidden');
      this.setState({ isOpen: false });
    } else {
      this.panel.current.classList.remove('hidden');
      this.setState({ isOpen: true });
    }
  }

  render() {
    return (
      <nav>
        <div className="max-w-7xl mx-auto p-3 md:px-8 flex items-center justify-between">
          <Logo />
          <div
            onClick={this.togglePanel}
            onKeyPress={this.togglePanel}
            role="button"
            tabIndex="0"
            className="h-10 w-10 flex items-center justify-center bg-white rounded-lg md:hidden"
          >
            <FiMenu size="24" />
          </div>
          <ul className="hidden md:flex">
            <li>
              <Link href="/illustrations">
                <a href="/illustrations" className="ml-4 px-3 py-2 rounded-md text-sm font-medium  leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none  transition duration-150 ease-in-out">Illustrations</a>
              </Link>
            </li>
            <li>
              <Link href="/app">
                <a href="/app" className="ml-4 px-3 py-2 rounded-md text-sm font-medium  leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none  transition duration-150 ease-in-out">My App</a>
              </Link>
            </li>
            <li>
              <Link href="/credits">
                <a href="/credits" className="ml-4 px-3 py-2 rounded-md text-sm font-medium  leading-5 text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-25 focus:outline-none  transition duration-150 ease-in-out">Credits</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="fixed inset-0 overflow-hidden hidden" ref={this.panel}>
          <div className="absolute inset-0 overflow-hidden">

            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500" />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">

              <div className="relative w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700">

                <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4 ease-in-out duration-500">
                  <button type="button" aria-label="Close panel" onClick={this.togglePanel} className="text-gray-300 hover:text-white transition ease-in-out duration-150">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="h-full flex flex-col space-y-6 py-6 bg-white shadow-xl overflow-y-scroll">
                  <header className="px-4 sm:px-6">
                    <h2 className="text-lg leading-7 font-medium text-gray-900">
                      Golden Ratio
                    </h2>
                  </header>
                  <div className="relative flex-1 px-4 sm:px-6">

                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full">
                        <ul className="flex flex-col">
                          <li className="flex-1">
                            <Link href="/illustrations">
                              <a className="flex items-center border border-blue-brand rounded py-2 px-4 bg-blue-brand hover:bg-blue-700 text-white" href="/illustrations">
                                <FiBox size="21" className="mr-2" />
                                Illustrations
                              </a>
                            </Link>
                          </li>
                          <li className="flex-1">
                            <Link href="/app">
                              <a className="flex items-center border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/app">
                                <FiCommand size="21" className="mr-2" />
                                My App
                              </a>
                            </Link>
                          </li>
                          <li className="flex-1">
                            <Link href="/credits">
                              <a className="flex items-center border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="/credits">
                                <FiFile size="21" className="mr-2" />
                                Credits
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      </nav>
    );
  }
}
