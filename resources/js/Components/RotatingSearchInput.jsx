import React, { useState, useEffect, useRef } from 'react';

function RotatingSearchInput() {
  // Define the array of placeholder texts
  const placeholders = [
    "Search for products...",
    "Find electronics gadgets...",
    "Looking for Phone Cables?",
    "Discover Quality  brands...",
    "Find phone accesories...",
    "Quality Discounts...",
  ];

  // State to keep track of the current placeholder index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Ref to store the interval ID for cleanup
  const intervalRef = useRef(null);

  // useEffect hook to manage the interval timer
  useEffect(() => {
    // Set up the interval
    intervalRef.current = setInterval(() => {
      // Calculate the next index, looping back to 0 if we reach the end
      setCurrentIndex(prevIndex => (prevIndex + 1) % placeholders.length);
    }, 3000); // Change the interval time (in milliseconds) here - e.g., 3000ms = 3 seconds

    // Cleanup function: This runs when the component unmounts
    // or when the effect dependencies change (though dependencies are constant here)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

  }, [placeholders.length]); // Dependency array: Re-run effect if the number of placeholders changes (unlikely)

  // The current placeholder text based on the current index
  const currentPlaceholder = placeholders[currentIndex];

  return (
    <div>
      <input
        type="search" 
        size="80"
        placeholder={currentPlaceholder} // Use the state variable as the placeholder
        className="w-full md:w-64 lg:w-96 px-2 py-1 md:px-4 md:py-2 rounded-md text-gray-800 text-sm md:text-base" // Example classes, adjust as needed
        // Add other input props like value, onChange, etc.
      />
    </div>
  );
}

export default RotatingSearchInput;