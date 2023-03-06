import Link from 'next/link';
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-400 py-7">
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">My Blog</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="text-white hover:text-blue-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:text-blue-500 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white hover:text-blue-500 transition-colors duration-300">
                    Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Social</h2>
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                    Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                    Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-blue-500 transition-colors duration-300">
                    Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-10 border-gray-500" />
        <p className="text-center text-sm">
          &copy; ThinkerPen {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
