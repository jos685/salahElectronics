import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '../Components/Header';
import Offers from '../Components/Offers';
import Location from '../Components/Location';
import CategoryShowcase from '@/Components/CategoryShowcase';
import Footer from '../Components/Footer';
import ToggleableContent from '@/Components/ToggleableContent';




const ProductsPage = (props) => {


<div className="fixed top-0 left-0 w-full bg-white z-10">        
           
  </div>
  const { products } = props;

  return (
    <div className='sticky top-0 bg-white z-10'>
      <Location />
       
      <div className='bg-gray-700 flex items-center  lg:grid lg:grid-cols-3 gap-6'>
        <ToggleableContent/>
        <Header /> 
        
        </div>  
       
        <Offers/>  
        <CategoryShowcase/>
        
    <div className="bg-gray-200 rounded-md shadow-md p-2 sm:p-4 flex flex-col">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 h-30">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-md shadow-md overflow-hidden">
              <div className="relative group">
                <img
                  src={`/storage/${product.image_path}`}
                  alt={product.name}
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm sm:text-md font-semibold text-gray-700 mb-0.5 line=clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-600 sm:text-sm mb-1 line-clamp-1">{product.description}</p>
                <p className="text-sm font-bold text-green-500 mb-2">Price: Ksh {product.price}</p>
                <div className='grid grid-cols-2'>
                 
                <Link
                  href={`/products/${product.id}`}
                  className=" bg-gray-800 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded transition duration-200 text-xs sm:text-sm"
                >
                  View Details
                </Link>
                
                <button className=" bg-green-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded transition duration-200 ml-2 text-xs sm:text-sm">
                 Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>

    
  );

};

export default ProductsPage;