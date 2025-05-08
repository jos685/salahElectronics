import React from 'react';

import CategoryShowcase from '@/Components/CategoryShowcase';

import Layout from '../Layouts/Layout';




const HomePage = () => {
  // Destructure products from props
    return (
    <Layout>       
                
       
        <CategoryShowcase/>       
         
    </Layout>
  );
};

export default HomePage;