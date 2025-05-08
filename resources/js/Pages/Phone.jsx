import React from 'react';
import Layout from '@/Layouts/Layout';
import { useCart } from '@/Context/CartContext';
import { Link } from '@inertiajs/react';

const MobileAccessories = () => {

  const { addToCart, cartItems, cartCount } = useCart();

 

  const accessories = [
    { id: 1, name: 'Amaya Charger', price: 150.99, image: '/assets/images/Amaya.jpg' },
    { id: 2, name: 'Type C Header', price: 499.99, image: '/assets/images/H.jpg' },
    { id: 3, name: 'Oraimo C Cable', price: 199.99, image: '/assets/images/Oraimoo.jpg' },
    { id: 4, name: 'OTG', price: 499.99, image: '/assets/images/OTG.jpg' },
    { id: 5, name: '3 in 1 Cable', price: 300.99, image: '/assets/images/multi.jpg' },
    { id: 6, name: 'Sony EarPods', price: 499.99, image: '/assets/images/Earpods.jpg' },
    { id: 7, name: 'Header', price: 1299.99, image: '/assets/images/Header.jpg' },
    { id: 8, name: 'Car Phone Mount', price: 899.99, image: '/assets/images/Car.jpg' },
    { id: 9, name: 'Adapter', price: 1499.99, image: '/assets/images/adapter.jpg' },
    { id: 10, name: 'iPhone 13 pro Case', price: 399.99, image: '/assets/images/iPhone.jpeg' },
    
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-[url('/assets/images/covers.jpg')] bg-cover bg-center h-80 flex items-center justify-center text-white">
          <div className="p-10 rounded-md text-center">
            <h1 className="text-blue-500 text-3xl md:text-5xl font-bold">Mobile Accessories</h1>
            <p className="text-blue-500 mt-4 text-lg">Explore our latest collection of phone accessories</p>
          </div>
        </section>


        {/* Featured Accessories Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6">Top Accessories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {accessories.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="mt-4">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-gray-800 text-sm mt-1">Ksh: {product.price.toFixed(2)}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <Link
                    href={`/accessories/${product.id}`}
                    className="text-blue-600 border border-blue-600 hover:bg-blue-50 px-4 py-2 rounded w-full inline-block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </Layout>
    </div>
  );
};

export default MobileAccessories;
