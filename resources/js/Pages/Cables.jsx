import React from 'react';
import { useCart } from '@/Context/CartContext';
import Layout from '@/Layouts/Layout';

const cables = [
  {
    id: 1,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 450,
    image: '/assets/images/headers.jpeg',
  },
  {
    id: 1,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 450,
    image: '/assets/images/headers.jpeg',
  },
  {
    id: 1,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 450,
    image: '/assets/images/headers.jpeg',
  },
  {
    id: 1,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 450,
    image: '/assets/images/headers.jpeg',
  },
  {
    id: 1,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 450,
    image: '/assets/images/headers.jpeg',
  },
  {
    id: 2,
    name: 'Micro USB Cable',
    type: 'Micro USB (Type-B)',
    price: 350,
    image: 'https://images.unsplash.com/photo-1575046515557-9b3a4a68f85d?fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Lightning Cable (iPhone)',
    type: 'Lightning',
    price: 750,
    image: 'https://images.unsplash.com/photo-1612109029180-b8db875c9f9e?fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: '3-in-1 USB Cable (Type-C / B / Lightning)',
    type: 'Multi-Cable',
    price: 999,
    image: 'https://images.unsplash.com/photo-1588392382834-a891154bca4d?fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Type-C to Type-C Super Fast',
    type: 'Type-C',
    price: 850,
    image: 'https://images.unsplash.com/photo-1630658982057-4a392e9fa4c3?fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Braided Type-B Cable',
    type: 'Micro USB (Type-B)',
    price: 400,
    image: 'https://images.unsplash.com/photo-1626708033727-858e3d6e1c1f?fit=crop&w=600&q=80',
  },
];

// Group cables by type
const groupCablesByType = (cables) => {
  return cables.reduce((groups, cable) => {
    const { type } = cable;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(cable);
    return groups;
  }, {});
};

const Cables = () => {
  const { addToCart } = useCart();
  const groupedCables = groupCablesByType(cables);

  return (
    <Layout>
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Phone Cables</h1>

      {Object.entries(groupedCables).map(([type, cablesInType]) => (
        <div key={type} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{type} Cables</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cablesInType.map((cable) => (
              <div
                key={cable.id}
                className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <img
                  src={cable.image}
                  alt={cable.name}
                  className="w-full h-30 object-contain mb-4 rounded"
                />
                <h3 className="text-lg font-medium mb-1">{cable.name}</h3>
                <p className="text-gray-600 text-sm mb-1">Type: {cable.type}</p>
                <p className="text-blue-600 font-semibold mb-3">Ksh {cable.price}</p>
                <button
                  onClick={() => addToCart(cable)}
                  className="mt-auto w-full bg-black text-white py-2 rounded hover:bg-blue-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </Layout>
  );
};

export default Cables;
