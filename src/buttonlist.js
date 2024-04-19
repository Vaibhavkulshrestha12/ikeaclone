import React from 'react';
import { useState } from 'react';

const ButtonList = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
        }
    };

    return (
        <div className="px-3">
        <div className="flex space-x-4 mt-5">
            {/* Button 1 */}
            <div className="relative ">
            <button
                    className="py-2 px-4 w-[15vw] text-black bg-slate-200 hover:border-b-2 hover:border-red-600"
                    onClick={() => handleDropdown(1)}
                >
                    Button 1
                </button>
                {openDropdown === 1 && (
                    <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg border border-gray-300">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 4</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 5</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 6</li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Button 2 */}
            <div className="relative">
                <button
                    className="py-2 px-4 w-[15vw]  text-black bg-slate-200 hover:border-b-2 hover:border-red-600"
                    onClick={() => handleDropdown(2)}
                >
                    Button 2
                </button>
                {openDropdown === 2 && (
                    <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg border border-gray-300">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 4</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 5</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 6</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="relative">
                <button
                    className="py-2 px-4 w-[15vw]  text-black bg-slate-200 hover:border-b-2  hover:border-red-600"
                    onClick={() => handleDropdown(3)}
                >
                    Button 3
                </button>
                {openDropdown === 3 && (
                    <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg border border-gray-300">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="relative">
                <button
                    className="py-2 px-4 w-[15vw]  text-black bg-slate-200 hover:border-b-2  hover:border-red-600"
                    onClick={() => handleDropdown(4)}
                >
                    Button 4
                </button>
                {openDropdown === 4 && (
                    <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg border border-gray-300">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                        </ul>
                    </div>
                )}
            </div>
            <div className="relative">
                <button
                    className="py-2 px-4 w-[15vw]  text-black bg-slate-200 hover:border-b-2  hover:border-red-600"
                    onClick={() => handleDropdown(5)}
                >
                    Button 5
                </button>
                {openDropdown === 5 && (
                    <div className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg border border-gray-300">
                        <ul>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 1</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 2</li>
                            <li className="px-4 py-2 hover:bg-gray-200">Option 3</li>
                        </ul>
                    </div>
                )}
            </div>
            {/* Add more buttons similarly */}
        </div>
        </div>
    );
};

export default ButtonList;