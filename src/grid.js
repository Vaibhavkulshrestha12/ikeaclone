import React from 'react';
import Card2 from './card2'; // Import your Card2 component

// Function to render a 4x3 grid of Card2 components
const RenderGrid = () => {
    return (
        <>
        <div className="flex flex-row justify-between mt-6">
<Card2/>
<Card2/>
<Card2/>
<Card2/>
</div>
<div className="flex flex-row justify-between mt-6">
<Card2/>
<Card2/>
<Card2/>
<Card2/>
</div>
<div className="flex flex-row justify-between mt-6">
<Card2/>
<Card2/>
<Card2/>
<Card2/>
</div>
</>
    );
};

// Export renderGrid function
export default RenderGrid;
