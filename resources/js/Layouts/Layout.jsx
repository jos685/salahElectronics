// resources/js/Layouts/Layout.jsx
import React from 'react';
 
import Footer from '@/Components/Footer'; 
import { CartProvider } from '@/Context/CartContext'; 
import Location from '@/Components/Location'; 
import Head from '@/Components/Head';
import Welcome from '@/Components/Welcome';

const Layout = ({ children }) => {
  return (
    <CartProvider>
      
        <Location />
         <Head/>
         <Welcome/>           
        <main className='pt-[130px]'>{children}</main>
        <Footer />
      
    </CartProvider>
  );
};

export default Layout;
