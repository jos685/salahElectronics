import React, {useState} from 'react';
import RotatingSearchInput from './RotatingSearchInput';
import { Link } from '@inertiajs/react';
import { useCart } from '@/Context/CartContext';
import MiniCartModal from '@/Components/MiniCartModal';
import Accounts from '@/Components/Accounts';


const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const categories = ['Phones & Tablets', 'Mobile Accesories', 'Tv & Audio', 'Cables & Chargers'];
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const toggleMiniCart = () => {
    setIsMiniCartOpen(!isMiniCartOpen);
  };

  return (
    <header className="bg-[linear-gradient(to_right,#141516,#2C3135)] fixed top md:top-[50px] w-full h-20 shadow-md z-50 rounded">
      <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between">

      
          {/* Search */}
          <div className="flex items-center md:w-auto">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none z-80 md:hidden">
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
            <RotatingSearchInput />

            <Accounts/>

            🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}

          
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-5 text-white">
          {categories.map((cat, idx) => (
            <Link key={idx} href={`/categories/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-blue-400">
              {cat}
            </Link>
          ))}
        </nav>

        {/* Main Header Content (Search, Cart, Auth Links) */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 flex-grow mt-4 md:mt-0">

          {/* Cart and Auth Links */}
          <div className="flex items-center space-x-6 text-white mt-4 md:mt-0">
            {/* Cart Icon */}
            <div className="relative">
              <button
                onClick = {toggleMiniCart}
                className='relative'
                aria-label="Open mini cart"
              >
               
              </button>
            </div>

            {/* Auth Links */}
           
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="mt-4 bg-gray-800 rounded-md text-white p-4 md:hidden w-full">
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li key={idx} className="hover:text-blue-400 cursor-pointer">
                  {cat}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Render the Mini-Cart Modal */}
      <MiniCartModal
        isOpen={isMiniCartOpen}
        onClose={() => setIsMiniCartOpen(false)}
      />
    </header>
  );
};

export default Head;