import React from 'react';


const Footer = () =>{
    return(
        <footer className='bg-gray-500 text-white py-8'>
    <div className='container mx-auto px-4'>
        {/* Newsletter Section */}
        <div className='mb-8 text-center md:text-left'>
            <h2 className='text-xl font-semibold mb-4'>Subscribe to our Newsletter to get updates on our latest offers</h2>
            <div className='flex flex-col sm:flex-row gap-2 justify-center md:justify-start'>
                <input
                    type="email"
                    placeholder='Enter E-Mail Address'
                    className='bg-gray-600 text-white rounded py-2 px-4 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    Subscribe
                </button>
            </div>
            <p className='text-sm mt-2 text-gray-400'>
                I agree to SalahElectronics <a href="/privacy" className='underline'>Privacy and Cookie Policy</a>. You can unsubscribe at any time.
            </p>
        </div>

        {/* Main Footer Content Grid */}
        <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 text-sm'>
            <div>
                <h3 className='font-semibold mb-2'>Quick Links</h3>
                <ul className='list-none p-0'>
                    <li><a href="/about" className='hover:underline'>About Us</a></li>
                    <li><a href="/contact" className='hover:underline'>Contact Us</a></li>
                    <li><a href="/faq" className='hover:underline'>FAQ</a></li>
                    <li><a href="/blog" className='hover:underline'>Blog</a></li>
                    <li><a href="/sitemap" className='hover:underline'>Sitemap</a></li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold mb-2'>Customer Service</h3>
                <ul className='list-none p-0'>
                    <li><a href="/support" className='hover:underline'>Support</a></li>
                    <li><a href="/returns" className='hover:underline'>Returns & Exchanges</a></li>
                    <li><a href="/shipping" className='hover:underline'>Shipping Information</a></li>
                    <li><a href="/track-order" className='hover:underline'>Track Your Order</a></li>
                </ul>
            </div>
            <div>
                <h3 className='font-semibold mb-2'>Contact Us</h3>
                <p className='mb-1'>RNG Plaza Luthuli Avenue, Nairobi, Kenya</p>
                <p className='mb-1'>Phone: +254 768 131 905</p>
                <p className='mb-1'>Email: info@salahelectronics.com</p>
            </div>
            <div>
                <h3 className='font-semibold mb-2'>Follow Us</h3>
                <div className='flex gap-4'>
                    <a href="#" className='hover:opacity-75'><svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.67-1.65 1.13-2.66 1.33-.72-.8-1.6-1.3-2.6-1.6 1.8.2 3.1 1.2 3.9 2.1-.75-.23-1.6-.4-2.5-.6C17.3 4.7 15.7 3.9 14 4c-2.3 0-4.1 1.7-4.1 3.8 0 .6.1.9.3 1.2-3.4-.2-6.4-1.8-8.4-4a2.8 2.8 0 0 0-.4 1.4c.2 1.3 1 2.5 2.1 3.2-.6-.2-1.2-.4-1.8-.6v.1c0 1.8 1.3 3.3 3.1 3.6-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.5 1.9 2.6 3.6 2.7-1.3 1-3 1.6-4.8 1.6-.3 0-.6 0-.9-.1 1.7 1 3.7 1.6 5.8 1.6-1.4 1.1-3.2 1.7-5.2 1.7-.3 0-.6 0-.8-.1C6.3 21.1 8.2 22 10.4 22c4.1 0 6.4-3.4 6.4-6.4 0-.1 0-.3 0-.4.4-.3.8-.7 1.2-1.1z"/></svg></a> {/* Example Twitter Icon */}
                    <a href="#" className='hover:opacity-75'><svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h4V8c0-1.65 1.35-3 3-3h2v3h-2v2h2v3h-2.38C20.06 13.97 22 12 22 12z"/></svg></a> {/*  Facebook Icon */}
                    {/* Add more social media icons here */}
                </div>
            </div>
        </div>

        {/* Bottom Footer Section */}
        <div className='mt-8 py-4 border-t border-gray-600 text-center text-sm'>
            <p>&copy; 2025 SalahElectronics. All Rights Reserved.</p>
            <p className='mt-2'>
                <a href="/privacy" className='hover:underline mr-4'>Privacy Policy</a>
                <span className='text-gray-600'>|</span>
                <a href="/terms" className='hover:underline ml-4'>Terms of Service</a>
            </p>
            <p className='mt-2 text-gray-400'>
                Located in Nairobi County, Kenya.
            </p>
            <p className='mt-2 text-black'>
                All rights reserved, Designed by Joseph Oduor
            </p>
        </div>
    </div>
</footer>
    )
}

export default Footer