import React from 'react';

import { Link } from '@inertiajs/react';
import { useCart } from '@/Context/CartContext'; 

const Head = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { cartCount } = useCart(); 

  const categories = ['Mobile Phones', 'Cables', 'Chargers', 'Accessories'];

  return (
    <header className="bg-gray-500 fixed top-[40px] md:top-[50px] w-full shadow-md z-50">
      <div className="container mx-auto px-4 py-4 md:py-6">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <div className="text-yellow text-xl font-bold">SalahElectricals</div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <div className="text-yellow text-xl font-bold">
            <img src="assets/images/logo.png" alt="Logo" />
            </div>

          {/* Search */}
          <div className="flex items-center flex-grow mx-4">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full md:w-64 lg:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-2 bg-black hover:bg-blue-500 text-white py-2 px-4 rounded-md">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Cart and Auth Links */}
          <div className="flex items-center space-x-6 text-white">
            {/* Cart Icon */}
            <div className="relative">
              <a href="/CartContext">
                <i className="fas fa-shopping-cart text-xl"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5">
                    {cartCount}
                  </span>
                )}
              </a>
            </div>

            {/* Auth Links */}
            <nav>
              <Link href={route('login')} className="text-black hover:text-blue-400 mr-2">LOGIN</Link>
              <span>|</span>
              <Link href={route('register')} className="text-black hover:text-blue-400 ml-2">SIGNUP</Link>
            </nav>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="mt-4 bg-gray-800 rounded-md text-white p-4 md:hidden">
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li key={idx} className="hover:text-blue-400 cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-gray-600 pt-4">
              <Link href={route('login')} className="block mb-2 hover:text-blue-400">LOGIN</Link>
              <Link href={route('register')} className="block hover:text-blue-400">SIGNUP</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Head;
