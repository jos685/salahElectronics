import React from 'react';
import { Link } from '@inertiajs/react';
import logo from '../../../public/assets/images/logo.png'; // Adjust the path to your logo image

const Header = () => {
    return (
      <header className="bg-gray-700 shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between">
         <Link  href="/" className="flex items-center">

          <img src={logo} alt="Logo" className="h-12 w-auto" />

         </Link>
          <h1 className="text-xl font-bold text-gray-800">SALAH_ELECTRONICS</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 W-full"
            />

            <nav>
             
            <Link href={route('login')} className="text-gray-700 hover:text-blue-500 ml-4">Login</Link>
            <Link href={route('register')} className="text-gray-700 hover:text-blue-500 ml-4">Register</Link>
            </nav>
          </div>
        </div>
      </header>
    );
};

export default Header;
