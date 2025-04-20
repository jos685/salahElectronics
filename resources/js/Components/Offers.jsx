import React from 'react';

const Offers = () => {
    const offerBoxes = [
        { title: 'Free Delivery for Orders within CBD', description: 'Within Nairobi, its free' },
        { title: 'Customer Support 24/7', description: 'Dont worry about your delivery, you can call to enquire at any time' },
        { title: '30% Discount First Order', description: 'For all the commodities' },
        { title: 'Payment on delivery', description: 'Having Trust Issues, Pay after receiving and confirming your goods' },

    ];
   return(
    <div className='bg-gray-30 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {offerBoxes.map((offer, index) => (
            <div
                key={index}
                className="bg-gray-100 rounded-md p-4 flex items-center justify-center text-center text-sm font-semibold text-gray-700 hover:bg-bray-100 cursor-pointer transition duration-200 ease-in-out"
                >
                {offer.title}
            </div>
           ))}
    </div>
   );
}

export default Offers;