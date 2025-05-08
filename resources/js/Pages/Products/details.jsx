// resources/js/Pages/Products/Show.jsx

import React from 'react';
// Assuming your Layout component is in the parent directory of Pages, as per your ProductsPage example
import Layout from '../../Layouts/Layout';
// You might also want to reuse other components like Offers or Welcome on this page,
// but for a dedicated product details page, focusing on the product itself is key.
// import Offers from '../Components/Offers';
// import Welcome from '../Components/Welcome';
// import { useCart } from '@/Context/CartContext'; // If you need add-to-cart on this page too


// This component receives a single 'product' object as a prop from the Laravel controller
const details = ({ product }) => {

  // You could potentially add add-to-cart logic here too if needed on the details page
  // const { addToCart } = useCart();
  // const handleAddToCart = (productToAdd) => {
  // addToCart(productToAdd);
  // };

  // Basic check just in case, though Laravel's 404 should handle truly missing products
  if (!product) {
    // You might want a more user-friendly "Product not found" message here
    return (
      <Layout>
        <div className="container mx-auto mt-8 text-center text-red-600">
          Product details could not be loaded.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* You can include other common sections if they are part of your layout */}
      {/* <Offers /> */}
      {/* <Welcome /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8"> {/* Added margin-top */}
        <div className="bg-white rounded-md shadow-md p-4 sm:p-6 flex flex-col md:flex-row"> {/* Use flex for layout */}

          {/* Product Image Area */}
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6"> {/* md:pr-6 for spacing on medium+ screens */}
            <img
              src={`/storage/${product.image_path}`}
              alt={product.name}
              className="w-full h-auto object-contain rounded-md shadow" // Added shadow
            />
          </div>

          {/* Product Details Area */}
          <div className="md:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-6">{product.description}</p> {/* Full description */}

            <p className="text-xl sm:text-2xl font-bold text-green-600 mb-6">Price: Ksh {product.price}</p>

            {/* Add other details you might have on the product object */}
            {/* <p className="text-md text-gray-600 mb-2">Category: {product.category}</p> */}
            {/* <p className="text-md text-gray-600 mb-6">Stock: {product.stock_quantity}</p> */}

            {/* Add to Cart Button (Optional on details page) */}
            {/* {product.stock_quantity > 0 ? (
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-200"
              >
                Add to Cart
              </button>
            ) : (
              <p className="text-red-600 font-semibold">Out of Stock</p>
            )} */}

            {/* You could add reviews, specifications, etc. here */}

          </div>
        </div>
      </div>

    </Layout>
  );
};

export default details;