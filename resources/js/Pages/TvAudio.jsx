import React from 'react';
import { useCart } from '@/Context/CartContext';

const tvs = [
  { id: 1, name: 'Samsung Smart TV 55"', price: 55000, image: 'https://images.unsplash.com/photo-1606813903094-b944ad1a9487?fit=crop&w=600&q=80' },
  { id: 2, name: 'LG UHD TV 50"', price: 48000, image: 'https://images.unsplash.com/photo-1606813902710-958e84370f38?fit=crop&w=600&q=80' },
  { id: 3, name: 'TCL Android TV 43"', price: 38000, image: 'https://images.unsplash.com/photo-1607968565045-bf687a276f94?fit=crop&w=600&q=80' },
  { id: 4, name: 'Hisense 4K Smart TV 65"', price: 63000, image: 'https://images.unsplash.com/photo-1598776814546-bf6d7734c398?fit=crop&w=600&q=80' },
  { id: 5, name: 'Sony Bravia 49"', price: 51000, image: 'https://images.unsplash.com/photo-1597875168709-d456f9827be1?fit=crop&w=600&q=80' },
  { id: 6, name: 'Skyworth Smart TV 40"', price: 31000, image: 'https://images.unsplash.com/photo-1584020135214-19f9d2f3520b?fit=crop&w=600&q=80' },
  { id: 7, name: 'Vision Plus LED TV 32"', price: 21000, image: 'https://images.unsplash.com/photo-1598280428949-bf00d7747cf7?fit=crop&w=600&q=80' },
  { id: 8, name: 'Vitron Digital TV 24"', price: 16000, image: 'https://images.unsplash.com/photo-1598669646046-f6e04bc75c50?fit=crop&w=600&q=80' },
  { id: 9, name: 'Syinix Android TV 43"', price: 34000, image: 'https://images.unsplash.com/photo-1598300052625-cf77ad02c3d0?fit=crop&w=600&q=80' },
  { id: 10, name: 'Nobel 39" LED TV', price: 27000, image: 'https://images.unsplash.com/photo-1605980776155-c44117b34e41?fit=crop&w=600&q=80' },
];

const audio = [
  { id: 11, name: 'Sony Bluetooth Soundbar', price: 15000, image: 'https://images.unsplash.com/photo-1598550880868-c292c8c77ecf?fit=crop&w=600&q=80' },
  { id: 12, name: 'JBL Portable Speaker', price: 8500, image: 'https://images.unsplash.com/photo-1606220838312-b69f6f02a248?fit=crop&w=600&q=80' },
  { id: 13, name: 'Logitech Home Theater', price: 12000, image: 'https://images.unsplash.com/photo-1612011058144-5a4f1e61f32e?fit=crop&w=600&q=80' },
  { id: 14, name: 'LG Soundbar 2.1CH', price: 18000, image: 'https://images.unsplash.com/photo-1606131733408-489997fbd7ea?fit=crop&w=600&q=80' },
  { id: 15, name: 'BoomBass 200W', price: 9500, image: 'https://images.unsplash.com/photo-1598694020112-3b657ac06fd3?fit=crop&w=600&q=80' },
  { id: 16, name: 'Jabra Wireless Speaker', price: 10500, image: 'https://images.unsplash.com/photo-1585314064785-62b46e58d47a?fit=crop&w=600&q=80' },
  { id: 17, name: 'Anker Soundcore 2', price: 7200, image: 'https://images.unsplash.com/photo-1559170513-40b2296f6c3f?fit=crop&w=600&q=80' },
  { id: 18, name: 'Bose Mini Speaker', price: 17500, image: 'https://images.unsplash.com/photo-1548438294-6cd61c2d966b?fit=crop&w=600&q=80' },
  { id: 19, name: 'Marshall Acton II', price: 22000, image: 'https://images.unsplash.com/photo-1602253057723-bd6126a7783b?fit=crop&w=600&q=80' },
  { id: 20, name: 'F&D Multimedia System', price: 9900, image: 'https://images.unsplash.com/photo-1614323083797-ec44b9a6e0c5?fit=crop&w=600&q=80' },
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
            <p className="text-blue-600 font-semibold mb-2">Ksh {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-black text-white py-2 px-4 w-full rounded hover:bg-blue-600 transition"
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
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">TV & Audio</h1>
      <ScrollSection title="Televisions" products={tvs} />
      <ScrollSection title="Audio Devices" products={audio} />
    </div>
  );
};

export default TVAudio;
