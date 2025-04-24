import React from 'react';


const Flash =() =>{
    return(
        <div className="bg-red-700 flex flex-col items-center justify-center ">
            <div className="bg-red-700 shadow-md rounded-lg p-6 max-w-sm w-full">
                <h2 className="text-xl font-bold ">Flash Sale!</h2>
                <p className="text-gray-700 mb-4">Get 50% off on selected items!</p>
               
            </div>
        </div>
    );
}

export default Flash;