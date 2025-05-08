import React, { useState, useRef, useEffect} from 'react';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Accounts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    //close when clicking outside
    useEffect(() =>{
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='relative' ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faUserCircle} style={{ fontSize: '1.5em', marginRight: '8px', color: '#555' }} /> 
            </button>   

            {isOpen && (
                <div className='absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg z-50'
                style={{ position: 'absolute'}}
                >
                <Link href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</Link>
                <Link href="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign Up</Link>
                
            </div>                
            )}

        </div>
    );
}

export default Accounts;