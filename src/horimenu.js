import React from 'react';
import CardHor from './cardhor';

const HorizontalScrollMenu = () => {
    return (
        <div className="flex overflow-x-scroll p-4 scrollbar-hide mt-9">
            {/* Render each card manually without using array methods */}
            <CardHor/>
            <CardHor/>
            <CardHor/>
            <CardHor/>
            <CardHor/>
            <CardHor/>
            
        </div>
    );
};

export default HorizontalScrollMenu;
