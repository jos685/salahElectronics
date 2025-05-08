import React, { useState, useEffect } from 'react';

const WelcomeSection = () => {
  const images = [
    
    { src: '/assets/images/covers.jpg', alt: 'Welcome', link: '/products' },
    { src: '/assets/images/back.jpg', alt: 'Welcome', link: '/products' },
    { src: '/assets/images/pics.jpg', alt: 'Welcome', link: '/products' },
   
    // Add more image objects with src, alt, and link
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden pt-20">
      <div className="relative h-80 md:h-96 lg:h-[600px]"> {/* Responsive height */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 flex items-center justify-center ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-170 object-cover"
            />
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-24 left-1/2 transform -translate-x-1/2">
              <a
                href={image.link}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md shadow-md text-sm sm:text-base lg:text-lg"
              >
                Shop Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;