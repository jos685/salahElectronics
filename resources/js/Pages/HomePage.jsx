import React from 'react';
import Header from '../Components/Header';
import WelcomeSection from '../Components/WelcomeSection';
import Nav from '../Components/Nav';
import ToggleableContent from '@/Components/ToggleableContent';
import Offers from '../Components/Offers';



const HomePage = () => {
  // Destructure products from props
    return (
      <div className="flex flex-col bg-gray-100">
        <Header /> 

        <div className='bg-white shadow-md py-1 px-1 flex items-center justify-between'>
        <ToggleableContent/>
        
        <Nav />
        </div>
       
        
        <Offers/>  
            <div className='w-[100%]'>
               <WelcomeSection/>
            </div>
            
            
          
        
    </div>
  );
};

export default HomePage;