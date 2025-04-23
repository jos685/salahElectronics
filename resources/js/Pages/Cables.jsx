import React from 'react';
import Header from '../Components/Header';
import Location from '../Components/Location';
import ToggleableContent from '@/Components/ToggleableContent';
import Nav from '../Components/Nav';

const Cables = () => {
    return (
        <div className="flex flex-col bg-gray-100">
            <Location />
            <div className='bg-gray-700 flex items-center lg:grid lg:grid-cols-3 gap-6'>
                <ToggleableContent/>
                <Header /> 
                
            </div>
            <Nav/>        
        </div>
    );
};

export default Cables;