import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-8 px-6">
            <div className="container mx-auto flex flex-wrap">
                {/* First Column */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Join IKEA Family</h3>
                    <p className="text-sm mb-4">
                        Enjoy member-only discounts & offers, early access to IKEA sale, delicious food offers, and much more. Join for free.
                    </p>
                    
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="bg-black text-white px-4 py-2 rounded-md">Join now</a></li>
                        <li><a href="#" className="text-blue-600 underline">See more</a></li>
                        
                    </ul>
                </div>

                {/* Second Column */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Join the club</h3>
                    <p className="text-sm mb-4">
                        IKEA Business Network
                        Join the membership program for business customers with exciting benefits and features. Join us for free and enjoy member discounts, quick-fix tips, online tutorials and a lot more.
                    </p>
                   
                </div>

                {/* Third Column */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">IKEA Family</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="text-blue-600 underline">Log in</a></li>
                        <li><a href="#" className="text-blue-600 underline">Join IKEA Family</a></li>
                        <li><a href="#" className="text-blue-600 underline">Member offers</a></li>
                        <li><a href="#" className="text-blue-600 underline">Workshops & Events</a></li>
                    </ul>
                </div>

                {/* Fourth Column */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Services</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="text-blue-600 underline">Delivery Service</a></li>
                        <li><a href="#" className="text-blue-600 underline">Click & Collect</a></li>
                        <li><a href="#" className="text-blue-600 underline">Personal shopper</a></li>
                        <li><a href="#" className="text-blue-600 underline">Design your room</a></li>
                        <li><a href="#" className="text-blue-600 underline">Assembly Service</a></li>
                        <li><a href="#" className="text-blue-600 underline">Measuring Service</a></li>
                        <li><a href="#" className="text-blue-600 underline">Kitchen Planning</a></li>
                        <li><a href="#" className="text-blue-600 underline">Installation Service</a></li>
                        <li><a href="#" className="text-blue-600 underline">Track Your Order</a></li>
                        <li><a href="#" className="text-blue-600 underline">Customer Service</a></li>
                        <li><a href="#" className="text-blue-600 underline">Recycle Program</a></li>
                    </ul>
                </div>

                {/* Fifth Column */}
                <div className="w-full md:w-1/5 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-2">Help</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="text-blue-600 underline">How to shop</a></li>
                        <li><a href="#" className="text-blue-600 underline">Return policy</a></li>
                        <li><a href="#" className="text-blue-600 underline">Prices and price tags</a></li>
                        <li><a href="#" className="text-blue-600 underline">Contact us</a></li>
                        <li><a href="#" className="text-blue-600 underline">FAQ's</a></li>
                        <li><a href="#" className="text-blue-600 underline">Planners</a></li>
                        <li><a href="#" className="text-blue-600 underline">Gift Card</a></li>
                        <li><a href="#" className="text-blue-600 underline">Feedback</a></li>
                        <li><a href="#" className="text-blue-600 underline">Terms and conditions</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
