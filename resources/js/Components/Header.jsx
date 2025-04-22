import React from 'react';
import { Link } from '@inertiajs/react';


const Header = () => {
  const[cartCount, setCartCount] = React.useState(3);
    return (
      <header className="bg-gray-700 shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between">
                  
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 W-1/3 length-full"
            />
            <button className="bg-blue-600 hover:bg-gray-500 text-white py-2 px-4 focus:outline-none rounded-md ">
          <i className="fas fa-search"></i>
        </button>           
              <div className="flex items-center space-x-4">
              <div className="relative">
          <a href="/cart" className="focus:outline-none">
            <i className="fas fa-shopping-cart text-xl"></i>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </a>
        </div>


        <div>
            <nav>
             
            <Link href={route('login')} className="text-white -700 hover:text-blue-500 ml-4">LOGIN | </Link>
            <Link href={route('register')} className="text-white -700 hover:text-blue-500 ml-0">SIGNUP</Link>
            </nav>

          </div>
            </div>
          
          </div>
        </div>
      </header>
    );
};

export default Header;
