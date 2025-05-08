// resources/js/Components/ProductDetailsModal.jsx

import React from 'react';
import { useCart } from '@/Context/CartContext'; // Use the same CartContext

// This component receives the product data to show, whether it's open, and a function to close
const ProductDetailsModal = ({ isOpen, product, onClose }) => {
  // We'll need the addToCart function here too
  const { addToCart } = useCart();

  // Don't render the modal if it's not open or no product is selected
  if (!isOpen || !product) {
    return null;
  }

  const handleAddToCart = (productToAdd) => {
    addToCart(productToAdd);
    // Optional: Close the modal after adding to cart
    // onClose();
  };

  return (
    // Modal Overlay (covers the background)
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" // z-50 ensures it's on top
      onClick={onClose} // Allows closing by clicking outside
    >
      {/* Modal Content (the actual pop-up) */}
      <div
        className="bg-white rounded-lg shadow-xl p-4 sm:p-6 max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto" // Adjust max-width/height as needed
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Modal Header (Optional) */}
        {/* <h2 className="text-xl font-bold mb-4">{product.name}</h2> */}

        {/* Product Details Layout inside Modal */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Image Side */}
          <div className="sm:w-1/2 flex justify-center items-center"> {/* Center image */}
            <img
              src={`/storage/${product.image_path}`}
              alt={product.name}
              className="w-full h-auto object-contain rounded-md max-h-48 sm:max-h-full" // Added max-height
            />
          </div>

          {/* Details Side */}
          <div className="sm:w-1/2 flex flex-col justify-between"> {/* Vertically space content */}
            <div> {/* Group name and description */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              {/* Display the full description if you have it on the product object */}
              {/* <p className="text-sm text-gray-600 mb-4">{product.description}</p> */}
            </div>
            <div> {/* Group price and add to cart */}
              <p className="text-lg sm:text-xl font-bold text-green-600 mb-4">Price: Ksh {product.price}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsModal;