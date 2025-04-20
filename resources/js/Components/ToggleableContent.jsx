import React, {useState} from 'react';

const ToggleableContent = () => {
   const [isVisible, setIsVisible] = useState(false);

   const handleToggle = () => {
      setIsVisible(!isVisible);
   };

   return(
      <div style={{position: 'relative'}}>
        <button
        id='toggleButton'
        className="px-4 py-2 my-10 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-blue-300 active:bg-blue-800" 
        onClick={handleToggle}
        >
        {isVisible ? 'CLOSE' : 'CATEGORIES'}
        </button>
        <div
         id='contentContainer'
         className={`mt-2 p-4 border-gray-300 rounded ${isVisible ? '' : 'hidden'}`}
         style={{
            position: isVisible ? 'absolute' : 'relative',  // Absolute when visible
            top: isVisible ? '100%' : 'auto',        // Position it
            left: isVisible ? '0' : 'auto',
            zIndex: isVisible ? 10 : 'auto',         // Ensure it's on top
            backgroundColor: isVisible? 'white' : 'transparent'
        }}

        >
            <div className="bg-red-500 text-white p-4 style = {{width: '50px'}}>">
                <h2 className="text-lg font-semibold mb-4">SHOP BY CATEGORIES</h2>
                <ul>
                <li className="py-2"><a href="#" className="text-gray-700 hover:text-blue-500 ml-4">Mobile Accessories</a></li>
                <li className="py-2"><a href="#" className="text-gray-700 hover:text-blue-500 ml-4">Phone & Tablets</a></li>
                <li className="py-2"><a href="#" className="text-gray-700 hover:text-blue-500 ml-4">TV & Audio</a></li>
                <li className="py-2"><a href="#" className="text-gray-700 hover:text-blue-500 ml-4">Cables</a></li>
                <li className="py-2"><a href="#" className="text-gray-700 hover:text-blue-500 ml-4">Computing</a></li>
                </ul>
            </div>
  

        </div>

      </div>
   );
};

export default ToggleableContent;