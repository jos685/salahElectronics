import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent, faTruck } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Offers = () => {
    const offerBoxes = [
       
        {
             title: (
                <div className='text-black'>
                <FontAwesomeIcon icon={faPercent} className="mr-2 text-green-500" />
                 30% DISCOUNT on First Order
                 </div>
                 ),
                  description: 'For all the commodities'
                 },
        {
             title: (
                <div className='text-black'>
                <FontAwesomeIcon icon={faTruck} className="mr-2 text-blue-500" />
                Payment On Delivery
                </div>
             ),
                 description: 'Having Trust Issues, Pay after receiving and confirming your goods' 
                },

    ];
   return(
    <div className='bg-gray-30 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {offerBoxes.map((offer, index) => (
            <div
                key={index}
                className="bg-gray-300 rounded-md p-4 flex items-center justify-center text-center text-sm font-semibold text-gray-700 hover:bg-bray-100 cursor-pointer transition duration-200 ease-in-out"
                >
                {offer.title}
            </div>
           ))}
    </div>
   );
}

export default Offers;