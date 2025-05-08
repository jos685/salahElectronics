import React from 'react';
import { useCart } from '@/Context/CartContext';
import Layout from '@/Layouts/Layout';

const cables = [
  {
    id: 1,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 100,
    image: '/assets/images/Cables/Cc.jpg',
  },
  {
    id: 2,
    name: 'Multi Charger',
    type: 'Type-C',
    price: 200,
    image: '/assets/images/Cables/multi.jpg',
  },
  {
    id: 3,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 450,
    image: '/assets/images/Cables/Oraimo.jpg',
  },
  {
    id: 4,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 150,
    image: '/assets/images/Cables/Oraimoo.jpg',
  },
  {
    id: 5,
    name: 'Type-C Fast Charging Cable',
    type: 'Type-C',
    price: 450,
    image: '/assets/images/headers.jpeg',
  },
  {
    id: 6,
    name: 'Micro USB Cable',
    type: 'Micro USB (Type-B)',
    price: 250,
    image: 'assets/images/Cables/apple cable.jpg',
  },
  {
    id: 7,
    name: 'Lightning Cable (iPhone)',
    type: 'Lightning',
    price: 750,
    image: 'assets/images/Cables/Cc.jpg',
  },
  {
    id: 6,
    name: 'Braided Type-B Cable',
    type: 'Lightning',
    price: 400,
    image: 'assets/images/Cables/hdmi.jpg',
  },
  {
    id: 6,
    name: 'Braided Type-B Cable',
    type: 'Lightning',
    price: 400,
    image: 'assets/images/Cables/otg.jpg',
  },
  {
    id: 6,
    name: 'Braided Type-B Cable',
    type: 'Micro USB (Type-B)',
    price: 200,
    image: 'assets/images/Cables/oraimo c to ear phone.jpg',
  },
  {
    id: 6,
    name: 'Braided Type-B Cable',
    type: 'Micro USB (Type-B)',
    price: 300,
    image: 'assets/images/Cables/usb cable.jpg',
  },
  {
    id: 8,
    name: '3-in-1 USB Cable (Type-C / B / Lightning)',
    type: 'Multi-Cable',
    price: 999,
    image: 'assets/images/Cables/multi.jpg',
  },
  {
    id: 8,
    name: '3-in-1 USB Cable (Type-C / B / Lightning)',
    type: 'Multi-Cable',
    price: 999,
    image: 'assets/images/Cables/multi.jpg',
  },
  {
    id: 8,
    name: '3-in-1 USB Cable (Type-C / B / Lightning)',
    type: 'Multi-Cable',
    price: 999,
    image: 'assets/images/Cables/multi.jpg',
  },
  {
    id: 5,
    name: 'Type-C to Type-C Super Fast',
    type: 'Type-C',
    price: 850,
    image: '/assets/images/Cables/Car.jpg',
  },
  {
    id: 6,
    name: 'Braided Type-B Cable',
    type: 'Micro USB (Type-B)',
    price: 400,
    image: 'assets/images/Cables/usb cable.jpg',
  },
  {
    id: 6,
    name: 'Braided Type-B Cable',
    type: 'Micro USB (Type-B)',
    price: 400,
    image: 'assets/images/Cables/apple cable.jpg',
  },
  {
    id: 6,
    name: 'Braided Type-B Cable',
    type: 'Micro USB (Type-B)',
    price: 400,
    image: 'assets/images/Cables/c to c.jpg',
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
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Phone Cables</h1>

      {Object.entries(groupedCables).map(([type, cablesInType]) => (
        <div key={type} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">{type} Cables</h2>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cablesInType.map((cable) => (
              <div
                key={cable.id}
                className="bg-gray-300 rounded-lg shadow p-4 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <img
                  src={cable.image}
                  alt={cable.name}
                  className="w-full h-30 object-contain mb-4 rounded"
                />
                <h3 className="text-lg font-medium mb-1">{cable.name}</h3>
                <p className="text-blue-600 text-sm mb-1">Type: {cable.type}</p>
                <p className="text-blue-600 font-semibold mb-3">Ksh: {cable.price}</p>
                <button
                  onClick={() => addToCart(cable)}
                  className="mt-auto w-full bg-blue-700 text-white py-2 rounded hover:bg-green-600 transition"
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
