import React from 'react';
import { useCart } from '@/Context/CartContext';
import Layout from '@/Layouts/Layout';

const tvs = [
  { id: 1, name: 'Samsung Smart TV 55"', price: 55000, image: '/assets/images/Samsung.jpeg' },
  { id: 2, name: 'LG UHD TV 50"', price: 48000, image: '/assets/images/SOLED.jpeg' },
  { id: 3, name: 'TCL Android TV 43"', price: 38000, image: '/assets/images/Smart.jpeg' },
  { id: 4, name: 'Hisense 4K Smart TV 65"', price: 63000, image: '/assets/images/LG.jpeg' },
  { id: 5, name: 'Sony Bravia 49"', price: 51000, image: '/assets/images/SCurved.jpeg' },
  { id: 6, name: 'Skyworth Smart TV 40"', price: 31000, image: '/assets/images/SCurved.jpeg' },
  { id: 7, name: 'Vision Plus LED TV 32"', price: 21000, image: '/assets/images/Net.jpeg' },
  { id: 8, name: 'Vitron Digital TV 24"', price: 16000, image: '/assets/images/hg.jpeg' },
  { id: 9, name: 'Syinix Android TV 43"', price: 34000, image: '/assets/images/game.jpeg' },
  
];

const audio = [
  { id: 11, name: 'Aliyon Speakers', price: 1050, image: '/assets/images/aliyon.jpg' },
  { id: 12, name: 'Amtec Speakers', price: 8500, image: '/assets/images/Amtec.jpg' },
  { id: 13, name: 'Lyon Speakers', price: 7500, image: '/assets/images/Aliyonn.jpg' },
  { id: 14, name: 'Nunix Speakers', price: 6500, image: '/assets/images/Nunix.jpg' },
  { id: 15, name: 'Lyon Speakers', price: 8500, image: '/assets/images/lyon.jpg' },
  { id: 16, name: 'BT Speakers', price: 900, image: '/assets/images/gg.jpg' },
  { id: 17, name: 'Sony Earpods', price: 2500, image: '/assets/images/earpod.jpg' },
  { id: 18, name: 'Vitron Speakers', price: 8500, image: '/assets/images/vitron.jpg' },
  { id: 19, name: ' Bt Speakers', price: 500, image: '/assets/images/smb.jpg' },
 
];

const ScrollSection = ({ title, products }) => {
  const { addToCart } = useCart();

  return (
    
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] max-w-[250px] bg-white rounded-lg shadow p-4 flex-shrink-0 hover:shadow-lg transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-blue-600 font-semibold mb-2">Ksh: {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white py-2 px-4 w-full rounded hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    
    </div>
  );
};

const TVAudio = () => {
  return (
    <Layout>
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-30 text-center">TV & Audio</h1>
      <ScrollSection title="Televisions" products={tvs} />
      <ScrollSection title="Audio Devices" products={audio} />
    </div>
    </Layout>
  );
};

export default TVAudio;
