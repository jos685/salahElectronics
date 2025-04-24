import React from 'react';
import Layout from '@/Layouts/Layout';
import { useCart } from '@/Context/CartContext';
import { Link } from '@inertiajs/react';

const MobileAccessories = () => {

  const { addToCart, cartItems, cartCount } = useCart();

  const categories = [
    { name: 'Phone Cases', icon: '📱' },
    { name: 'Chargers', icon: '⚡' },
    { name: 'Cables', icon: '🔌' },
    { name: 'Power Banks', icon: '🔋' },
    { name: 'Screen Protectors', icon: '🛡️' },
    { name: 'Headphones', icon: '🎧' },
    { name: 'Mounts', icon: '🧲' },
    { name: 'Stands', icon: '📏' },
  ];

  const featured = [
    {
      id: 1,
      name: 'Infinix Zero 30',
      price: 15000.99,
      image: '/assets/images/Infinix.jpg',
    },
    {
      id: 1,
      name: 'Oppo Reno 8',
      price: 2900.99,
      image: '/assets/images/Oppo.jpg',
    },
    {
      id: 1,
      name: 'Samsung Galaxy S23',
      price: 29000.99,
      image: '/assets/images/Sam.jpg',
    },
    {
      id: 1,
      name: 'O King',
      price: 1029.99,
      image: '/assets/images/Katululu.jpg',
    },
    {
      id: 1,
      name: 'Itel P38',
      price: 1500.99,
      image: '/assets/images/Itel.jpg',
    },
    {
      id: 1,
      name: 'Vivo V25',
      price: 18000.99,
      image: '/assets/images/Vivo.jpg',
    },
    {
      id: 2,
      name: 'Redmi 9A',
      price: 15000.99,
      image: '/assets/images/Redmi.jpg',
    },
    {
      id: 3,
      name: 'Inifinix Hot 30',
      price: 19000.99,
      image: '/assets/images/Infinix.jpg'
    },
    {
      id: 4,
      name: 'Poco M5',
      price: 10039.99,
      image: '/assets/images/Poco.jpg',
    },
    {
      id: 1,
      name: 'Tecno Spark 10', 
      price: 90029.99,
      image: '/assets/images/Baddii.jpg',
    },
    
  ];

  return (
    
    <div className="bg-gray-50 min-h-screen">
     <Layout>
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/images/mobile-accessories-banner.jpg')] bg-cover bg-center h-64 flex items-center justify-center text-white">
        <div className="bg-black p-6 rounded-md text-center">
          <h1 className="text-blue-500 text-3xl md:text-5xl font-bold">Phone & Tablets</h1>
          <p className="mt-4 text-lg">Explore our latest collection of mobile accessories</p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <p className="font-medium">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Top Phone Brands</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {featured.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">Ksh: {product.price.toFixed(2)}</p>
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
