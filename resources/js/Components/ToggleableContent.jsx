import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ToggleableContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative flex items-center w-full">
      {/* Mobile Menu Button (Visible on small screens) */}
      <button
        id="toggleButton"
        className="sm:block md:hidden px-3 py-2 my-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-blue-300 active:bg-blue-800 absolute left-0 top-1/2 -translate-y-1/2"
        onClick={handleToggle}
      >
        <i className="fas fa-bars"></i>
        {isVisible ? '' : ''}
      </button>

      {/* Search Input (Takes full width on larger screens) */}
      <div className="w-full md:w-auto flex-grow md:mx-4">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Mobile Menu Content (Hidden by default, shown on toggle) */}
      <div
        id="contentContainer"
        className={`mt-2 p-4 border-gray-700 rounded absolute top-full left-0 w-full bg-white shadow-md z-10 ${isVisible ? 'block' : 'hidden'} sm:hidden`}
        style={{
          // position: isVisible ? 'absolute' : 'relative',  // Removed redundant positioning
          // top: isVisible ? '100%' : 'auto',            // Removed redundant positioning
          // left: isVisible ? '0' : 'auto',              // Removed redundant positioning
          // zIndex: isVisible ? 10 : 'auto',             // Tailwind handles z-index
          // backgroundColor: isVisible ? 'white' : 'transparent' // Tailwind handles background
        }}
      >
        <div className="bg-blue-500 text-white p-4">
          <h2 className="text-lg font-semibold mb-4">SHOP BY CATEGORIES</h2>
          <ul>
            <li className="py-2">
              <a href="#" className="text-white hover:text-blue-200 ml-0">
                Mobile Accessories
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-white hover:text-blue-200 ml-0">
                Phone & Tablets
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-white hover:text-blue-200 ml-0">
                TV & Audio
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-white hover:text-blue-200 ml-0">
                Cables
              </a>
            </li>
            <li className="py-2">
              <a href="#" className="text-white hover:text-blue-200 ml-0">
                Computing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToggleableContent;