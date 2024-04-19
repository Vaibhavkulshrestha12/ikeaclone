import React, { useState } from 'react';

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    return (
        <div
            onClick={handleToggle}
            className={`w-16 h-8 flex items-center bg-black rounded-full p-1 cursor-pointer ${
                isToggled ?'bg-black' : 'bg-gray-300'
            } transition-colors duration-300`}
        >
            <span
                className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
                    isToggled ? 'translate-x-8' : 'translate-x-0'
                } transition-transform duration-300`}
            />
        </div>
    );
};

export default ToggleButton;
