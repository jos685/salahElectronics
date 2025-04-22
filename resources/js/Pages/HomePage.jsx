import React from 'react';
import Header from '../Components/Header';

import Nav from '../Components/Nav';
import ToggleableContent from '@/Components/ToggleableContent';
import Offers from '../Components/Offers';
import Location from '../Components/Location';
import CategoryShowcase from '@/Components/CategoryShowcase';


const HomePage = () => {
  // Destructure products from props
    return (
      <div className="flex flex-col bg-gray-100">
        <Location />

        <div className='bg-gray-700 flex items-center  lg:grid lg:grid-cols-3 gap-6'>
        <ToggleableContent/>
        <Header /> 
        
        </div>        
        <Nav />
        <Offers/>  
        <CategoryShowcase/>
     
                 
    </div>
  );
};

export default HomePage;