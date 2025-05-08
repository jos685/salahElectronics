// resources/js/Layouts/Layout.jsx
import React from 'react';
import Footer from '@/Components/Footer'; 

import Head from '@/Components/Head';


import CartIcon from '@/Components/CartIcon';

const Layout = ({ children }) => {
  return (
    
      <div>
       
         <Head/>
        <CartIcon />
       

        <main className='pt-[130px]'>{children}</main>
        <Footer />

        </div>
    
  );
};

export default Layout;
