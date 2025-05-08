// resources/js/Components/MiniCartModal.jsx

import React from 'react';
import { useCart } from '@/Context/CartContext'; // Use your CartContext
import { Link } from '@inertiajs/react'; // For the navigation links

const MiniCartModal = ({ isOpen, onClose }) => {
  // Get cart state and functions from your context
  const { cartItems, cartCount, removeFromCart } = useCart(); // Assuming you want a remove button

  // Don't render if the modal is not open
  if (!isOpen) {
    return null;
  }

  // Calculate total price for display in the modal (optional)
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    // Modal Overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50" // z-50 for high stacking order
      onClick={onClose} // Close when clicking outside
    >
      {/* Modal Content (Sidebar appearance) */}
      <div
        className="bg-white w-80 h-full shadow-xl overflow-y-auto flex flex-col" // Adjust width as needed
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
      >
        {/* Header */}
        <div className="px-4 py-3 bg-gray-100 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold text-gray-800">Shopping Cart ({cartCount})</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-grow p-4">
          {cartCount === 0 ? (
            <p className="text-gray-600 text-center mt-8">Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b py-3 last:border-b-0">
                {/* Item Image (optional, but good) */}
                <img
                  src={`/storage/${item.image_path}`} // Assuming image_path exists on item
                  alt={item.name}
                  className="w-12 h-12 object-contain rounded mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-gray-600">{item.quantity} x Ksh {item.price.toFixed(2)}</p>
                </div>
                {/* Remove button (optional in mini-cart, but useful) */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm ml-2"
                  aria-label={`Remove ${item.name}`}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer - Totals and Buttons */}
        {cartCount > 0 && (
          <div className="px-4 py-4 bg-gray-100 border-t">
             {/* Optional: Display total */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-md font-semibold text-gray-800">Total:</span>
                <span className="text-md font-bold text-green-600">Ksh {total.toFixed(2)}</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {/* View Cart Button (Link to dedicated page) */}
              <Link
                href="/cart" // **** Replace with your actual dedicated cart page route ****
                className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                onClick={onClose} // Close modal when clicked
              >
                View Cart
              </Link>

              {/* Proceed to Checkout Button (Link to checkout page) */}
              <Link
                href="/checkout" // **** Replace with your actual checkout page route ****
                className="w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                 onClick={onClose} // Close modal when clicked
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default MiniCartModal;