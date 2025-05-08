
import React from 'react';
import { useCart } from '@/Context/CartContext';

const CartIcon = () => {
  const { cartCount } = useCart();

  return (
    <div className="relative cursor-pointer">
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
      </svg>
      {cartCount > 0 && (
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
