import React from 'react';

const YellowSquareDiv = () => {
    return (
        <div className="flex w-full justify-center h-1/5 self-center mt-12">
        {/* Container div occupying 80% of the screen */}
        <div className="w-4/5 h-full bg-yellow-400 rounded-lg flex flex-col justify-between py-5 px-4">
            {/* Heading */}
            <h1 className="text-2xl font-bold text-left">Main Heading</h1>
            
            {/* Subheading */}
            <p className="text-lg text-left mt-2">Subheading goes here</p>
            
            {/* Button */}
            <div className="mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-[20%]">
                    Click Me
                </button>
            </div>
        </div>
    </div>
    );
};

export default YellowSquareDiv;
