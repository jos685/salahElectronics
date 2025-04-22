import React from 'react';

const Nav = () => {
    return(
        <div>
            <nav className="bg-gray-400 shadow-md py-1 my-2 flex space-x-40 justify-center" >
              <a href="#" className="text-blue-700 hover:text-blue-500">HOME</a>
              <a href="#" className="text-blue-700 hover:text-blue-500">SHOP</a>
              <a href="#" className="text-blue-700 hover:text-blue-500">CONTACT</a>
              
            </nav>
        </div>

    );
};

export default Nav;