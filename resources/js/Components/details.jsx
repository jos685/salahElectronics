// resources/js/Pages/Products/Show.jsx

import React from 'react';

// The component receives the 'product' data passed from the Laravel controller as a prop
function details({ product }) {
  // Optional: Basic check if product data exists (though Laravel's 404 handles missing IDs)
  if (!product) {
    return <div>Product not found.</div>; // This would ideally be handled by Laravel's 404
  }

  return (
    // You would wrap this content with your main application layout component if you have one
    // For now, just showing the core content structure
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          {/* Display product image(s) */}
          <img src={product.image_url || '/placeholder.jpg'} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          {/* Display product details */}
          <p className="text-lg text-gray-700 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">${product.price.toFixed(2)}</p>
          {/* Add more product details as needed */}
          {/* <p>Category: {product.category}</p> */}
        </div>
      </div>
      {/* Add sections for reviews, related products, etc. if needed */}
    </div>
  );
}

export default details;