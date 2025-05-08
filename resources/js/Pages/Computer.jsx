import React from 'react';
import Layout from '@/Layouts/Layout';
import ScrollSection from '@/components/ScrollSection'; // assuming you made it reusable

// Import product arrays here (like keyboards, mice, etc.)

const ComputerAccessories = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-10 text-center">Computer Accessories</h1>
        <ScrollSection title="Keyboards" products={keyboards} maxPerPage={4} />
        <ScrollSection title="Mice" products={mice} maxPerPage={4} />
        <ScrollSection title="Headsets" products={headsets} maxPerPage={4} />
        <ScrollSection title="Webcams" products={webcams} maxPerPage={4} />
        <ScrollSection title="USB Hubs" products={hubs} maxPerPage={4} />
      </div>
    </Layout>
  );
};

export default ComputerAccessories;
