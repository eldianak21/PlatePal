import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} PayPlate. All rights reserved.
        </p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-200">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;