import React from 'react';

const ImageCollage = () => {
    return (
        
        <div className="flex h-screen w-full">
          
            <div className="w-1/2 h-full">
                <img
                    src="https://www.ikea.com/ext/ingkadam/m/24c983181c6e7c59/original/PH187010-crop002.jpg?f=xl"
                    alt="Left Image"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="w-1/4 h-full flex flex-col mx-2 ">
               
                <div className="w-[350px] h-[600px] m-2">
            <img
                src="https://www.ikea.com/ext/ingkadam/m/1427af785fe647b8/original/PH181137-crop001.jpg?f=xs"
                alt="Right Image 2"
                className="w-full h-full object-cover"
            />
        </div>  

               
                <div className="w-[350px] h-[200px] m-2">
            <img
                src="https://www.ikea.com/ext/ingkadam/m/1427af785fe647b8/original/PH181137-crop001.jpg?f=xs"
                alt="Right Image 2"
                className="w-full h-full object-cover"
            />
        </div>

                
            </div>
            <div className="w-1/4 h-full flex flex-col m-2">
                
                <div className="w-[350px] h-[400px] m-2">
            <img
                src="https://www.ikea.com/ext/ingkadam/m/1427af785fe647b8/original/PH181137-crop001.jpg?f=xs"
                alt="Right Image 2"
                className="w-full h-full object-cover"
            />
        </div>
                
                <div className="w-[350px] h-[480px] m-2">
            <img
                src="https://www.ikea.com/ext/ingkadam/m/1427af785fe647b8/original/PH181137-crop001.jpg?f=xs"
                alt="Right Image 2"
                className="w-full h-full object-cover"
            />
        </div>

                
            </div>
        </div>
    );
};

export default ImageCollage;
