import React from 'react';
import ikeaLogo from './ikeaa.png'
import {
    MagnifyingGlassIcon as SearchIcon,
    TruckIcon,
    ShoppingBagIcon as StorefrontIcon,
    UserIcon,
    HeartIcon
  } from '@heroicons/react/24/solid';
  


const Navbar = () => {
    return (
        <nav className="bg-white shadow p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img src= {ikeaLogo} alt="Logo" className="w-16 h-auto" />
                </div>

                {/* Search Bar */}
                <div className="flex-grow mx-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                        />
                        <SearchIcon className="w-5 h-5 absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-500" />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <TruckIcon className="w-5 h-5 mr-2" />
                        <span>Shipping</span>
                    </button>

                    <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <StorefrontIcon className="w-5 h-5 mr-2" />
                        <span>Store</span>
                    </button>

                    <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <UserIcon className="w-5 h-5 mr-2" />
                        <span>Login</span>
                    </button>

                    <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                        <HeartIcon className="w-5 h-5 text-red-500" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
