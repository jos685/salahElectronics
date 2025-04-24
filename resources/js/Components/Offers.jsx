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
                <span className='text-sm sm:text-base'> 30% DISCOUNT</span>
                <span className='hidden sm:inline'>on First Order</span>
                 
                 </div>
                 ),
                  description: 'For all the commodities'
                 },
        {
             title: (
                <div className='text-black'>
                <FontAwesomeIcon icon={faTruck} className="mr-2 text-blue-500" />
                <span className='text-sm sm:text-base'>Payment on Delivery</span>
                
                </div>
             ),
                 description: 'Having Trust Issues, Pay after receiving and confirming your goods' 
                },

    ];
   return(
    <div className='bg-gray-100 py-6 sm:py-8 lg:py-10'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {offerBoxes.map((offer, index) => (
            <div
                key={index}
                className="bg-gray-300 rounded-md p-4 flex items-center justify-center text-center text-sm font-semibold text-gray-700 hover:bg-bray-100 cursor-pointer transition duration-200 ease-in-out"
                >
                <div className='mb-2'>
                {offer.title}
                </div>
                { /* <p className="text-xs text-gray-500">{offer.description}</p>*/}
            </div>
          
          ))}
          </div>
        </div>
    </div>
   );
}

export default Offers;