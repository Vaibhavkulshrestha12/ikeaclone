import React from 'react';

const VertCard = () => {
    return (
        <div className="w-[30%] h-screen bg-white rounded-lg  mx-4 shadow-md p-4 flex flex-col justify-between">
            {/* Image at the top, taking 30% of the card's height */}
            <img
                src="https://www.ikea.com/images/jaettebo-series-4aeab9d3b5d5c17920756c715aba35ce.jpg?f=s"
                alt="Card Image"
                className="w-full h-[30%] object-cover rounded-t-lg"
            />

            {/* Description in the next row */}
            <div className="p-2 flex-grow">
                <h3 className="text-lg font-semibold">Card Title</h3>
                <p className="text-gray-600">
                    This is a brief description of the card. It provides information about the content of the card.
                </p>
            </div>

            {/* Circular button at the bottom */}
            <div className="flex justify-center mb-4">
                <button className="bg-blue-500 text-white py-2 px-2 rounded-full h-8 w-8">
                   *
                </button>
            </div>
        </div>
    );
};

const VcardRow = () => {
    return (
        <div className="flex justify-center mt-6 ml-15">
            {/* Call the VertCard component three times to create a row of three cards */}
            <VertCard />
            <VertCard />
            <VertCard />
        </div>
    );
};

export default VcardRow;
