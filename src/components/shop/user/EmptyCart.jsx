// EmptyCart.js
import React from 'react';

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="mb-4">
                image
                {/* <img src="path/to/your/image.svg" alt="Empty Cart" className="w-32 h-32" /> */}
            </div>
            <h2 className="text-xl font-bold">Missing Cart items?</h2>
            <p className="text-gray-600">Login to see the items you added previously</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Login</button>
        </div>
    );
};

export default EmptyCart;