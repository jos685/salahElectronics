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

  const accessories = [
    { id: 1, name: 'EarPodds', price: 2999.99, image: '/assets/images/earpod.jpg' },
    { id: 2, name: 'Sony EarPods', price: 499.99, image: '/assets/images/Earpods.jpg' },
    { id: 3, name: 'EarPodds', price: 2999.99, image: '/assets/images/earpod.jpg' },
    { id: 4, name: 'Sony EarPods', price: 499.99, image: '/assets/images/Earpods.jpg' },
    { id: 5, name: 'EarPodds', price: 2999.99, image: '/assets/images/earpod.jpg' },
    { id: 6, name: 'Sony EarPods', price: 499.99, image: '/assets/images/Earpods.jpg' },
    { id: 7, name: 'Bluetooth Headset', price: 1299.99, image: '/assets/images/bluetooth-headset.jpg' },
    { id: 8, name: 'Car Phone Mount', price: 899.99, image: '/assets/images/car-phone-mount.jpg' },
    { id: 9, name: 'Portable Power Bank', price: 1499.99, image: '/assets/images/power-bank.jpg' },
    { id: 10, name: 'Phone Screen Protector', price: 399.99, image: '/assets/images/screen-protector.jpg' },
    
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-[url('/assets/images/mobile-accessories-banner.jpg')] bg-cover bg-center h-64 flex items-center justify-center text-white">
          <div className="bg-black p-6 rounded-md text-center">
            <h1 className="text-blue-500 text-3xl md:text-5xl font-bold">Mobile Accessories</h1>
            <p className="mt-4 text-lg">Explore our latest collection of phone accessories</p>
          </div>
        </section>

        {/* Categories Section */}
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
                  <p className="text-gray-600 text-sm mt-1">${product.price.toFixed(2)}</p>
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
