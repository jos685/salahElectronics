import React from 'react';

const Nav = () => {
    return(
        <div>
            <nav className="bg-gray-500 shadow-md py-1 my-2 flex space-x-40 justify-center" >
              <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">Shop</a>
              <a href="#" className="text-gray-700 hover:text-blue-500">Contact</a>
              
            </nav>
        </div>

    );
};

export default Nav;