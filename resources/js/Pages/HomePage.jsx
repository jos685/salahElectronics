import React from 'react';
import Offers from '../Components/Offers';
import CategoryShowcase from '@/Components/CategoryShowcase';

import Layout from '../Layouts/Layout';



const HomePage = () => {
  // Destructure products from props
    return (
    <Layout>       
               
       
        <Offers/>  
        <CategoryShowcase/>       
    
    </Layout>
  );
};

export default HomePage;