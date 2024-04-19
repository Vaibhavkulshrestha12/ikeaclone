import React from "react";

const Image = () => {
    return (
        <div className="flex w-full mt-11">
  <img
    src="https://www.ikea.com/ext/ingkadam/m/5a36edc040c812cf/original/PH194128.jpg?f=xl/800"
    alt="First"
    className="w-1/2  object-cover mx-2" // Adding a height of 64 units (equivalent to 16rem)
  />
  <img
    src="https://www.ikea.com/ext/ingkadam/m/6b387ce32b9339d/original/PH194132.jpg?f=xl/800"
    alt="Second"
    className="w-1/2   object-cover mx-2" // Adding a height of 64 units (equivalent to 16rem)
  />
</div>
    )
}

export default Image;