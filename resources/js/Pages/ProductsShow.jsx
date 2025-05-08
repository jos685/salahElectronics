import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

import CategoryShowcase from '@/Components/CategoryShowcase';
import { useCart } from '@/Context/CartContext';
import Welcome from '../Components/Welcome';
import ProductDetailsModal from '@/Components/ProductDetailsModal';


const ProductsPage = (props) => {
  const { addToCart } = useCart();

  // state for managing modal
  const[isModalOpen, setIsModalOpen ] = useState(false);
   // state to hold the data of product currently viewd
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  //New handler for clicking view details button
  const handleViewDetailsClick = (product) =>{
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  //New handler for closing Modal
  const handleCloseModal= ()=> {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const { products } = props;

  return (
    <div className='sticky  bg-gray-300 '>
      <Layout>  
        <Welcome />
        <CategoryShowcase/>
        
    <div className="bg-gray-500 rounded-md shadow-md p-2 sm:p-4 flex flex-col">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-blue-800 mb-6">Our Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 min-h">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-md shadow-md overflow-hidden">
              <div className="relative group">
                <img
                  src={`/storage/${product.image_path}`}
                  alt={product.name}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-1 flex flex-col h-full">
                <h3 className="text-xs sm:text-md font-semibold text-gray-700 mb-0.5 line-clamp-2">{product.name}</h3>
               { /*<p className="text-xs text-gray-600 sm:text-sm mb-1 line-clamp-1">{product.description}</p> */}
                <p className="text-xs font-bold text-green-500 mb-2">Price: Ksh {product.price}</p>
                
                <div className='grid grid-cols-1'>
                 
                <button
                onClick={() => handleViewDetailsClick(product)}
                 // href={`/products/${product.id}`}
                  className=" bg-gray-900 hover:bg-green-600 text-white font-bold py-2 px-2 rounded transition duration-200 text-xs sm:text-sm mb-1"
                >
                  View Details
                </button>
                
                <button
                onClick={() => handleAddToCart(product)}
                className=" bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-2 rounded transition duration-200 text-xs sm:text-sm ">
                 Add to Cart
                 </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>

      {/* Include the Modal component here */}
      {/* Pass state to control visibility and the selected product data */}
      <ProductDetailsModal
        isOpen={isModalOpen}
        product={selectedProduct} // Pass the product object to the modal
        onClose={handleCloseModal} // Pass the close handler
      />
    </div>

    
  );

};

export default ProductsPage;