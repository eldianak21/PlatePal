import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-6"> 
      <div className="container mx-auto">
        <p className="text-center">
          &copy; {new Date().getFullYear()} PlatePal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;