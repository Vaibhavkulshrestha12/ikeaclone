import React, { useState } from 'react';

const Card2 = () => {
    // Define state to keep track of the current rating
    const [rating, setRating] = useState(0);

    // Function to handle star click events
    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    return (
        <div className="w-85 bg-white rounded-lg shadow-lg p-4">
            {/* Compare checkbox on top */}
            <div className="flex justify-end mb-2">
                <input type="checkbox" id="compare" className="form-checkbox text-blue-500" />
                <label htmlFor="compare" className="ml-2 text-sm">Compare</label>
            </div>

            {/* Image */}
            <img
                src="https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-beige__0868907_pe781417_s5.jpg?f=xxs/150"
                alt="Product"
                className="w-full h-48 object-cover rounded-lg"
            />

            {/* Heading */}
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
                Product Heading
            </h2>

            {/* Subheading */}
            <p className="text-gray-600">
                Subheading goes here
            </p>

            {/* Interactive star rating */}
            <div className="mt-2 flex items-center">
                <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }, (_, index) => (
                        <svg
                            key={index}
                            className={`w-5 h-5 fill-current cursor-pointer ${
                                index < rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                            onClick={() => handleStarClick(index)}
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 15l-6.16 3.25 1.18-6.88-5-4.89 6.9-1L10 0l3.08 6.58 6.9 1-5 4.89 1.18 6.88z" />
                        </svg>
                    ))}
                </div>
                {/* Optional text rating (for display purposes) */}
                <span className="ml-2 text-gray-600 text-sm">{rating}.0</span>
            </div>

            {/* Buttons in a row */}
            <div className="mt-4 flex space-x-2">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Button 1
                </button>
                <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg">
                    Button 2
                </button>

            </div>

            <p className="mt-4 text-gray-600">
                Second subheading goes here
            </p>

            {/* Row of 5 small images */}
            <div className="mt-2 grid grid-cols-5 gap-2">
    <img
        src="https://via.placeholder.com/50?text=1"
        alt="Image 1"
        className="w-full h-12 object-cover rounded-lg"
    />
    <img
        src="https://via.placeholder.com/50?text=2"
        alt="Image 2"
        className="w-full h-12 object-cover rounded-lg"
    />
    <img
        src="https://via.placeholder.com/50?text=3"
        alt="Image 3"
        className="w-full h-12 object-cover rounded-lg"
    />
    <img
        src="https://via.placeholder.com/50?text=4"
        alt="Image 4"
        className="w-full h-12 object-cover rounded-lg"
    />
    <img
        src="https://via.placeholder.com/50?text=5"
        alt="Image 5"
        className="w-full h-12 object-cover rounded-lg"
    />
</div>

        </div>
    );
};

export default Card2;
