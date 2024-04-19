import React from 'react';

const LandscapeCard = () => {
    return (
        <div className="w-[40%] bg-white rounded-lg shadow-md p-4">
            {/* Image on top */}
            <img
                src="https://www.ikea.com/images/jaettebo-series-4aeab9d3b5d5c17920756c715aba35ce.jpg?f=s"
                alt="Card Image"
                className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* Description in the next row */}
            <div className="p-2">
                <h3 className="text-lg font-semibold">Card Title</h3>
                <p className="text-gray-600">
                    This is a brief description of the card. It provides information about the content of the card.
                </p>
            </div>
        </div>
    );
};

const CardRow = () => {
    return (
        <div className="flex space-x-4 mt-6">
            {/* Call the LandscapeCard component three times to create a row of three cards */}
            <LandscapeCard />
            <LandscapeCard />
            <LandscapeCard />
        </div>
    );
};

export default CardRow;