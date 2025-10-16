// Sect2.jsx - About Us
import React from "react";

const Sect2 = () => {
  return (
    <div
      className="h-full flex justify-center items-center"
      style={{ flexBasis: "25%" }}
    >
      <div className="h-[80%] flex flex-col justify-around items-center">
        <h2 className="text-2xl font-bold">About Us</h2>
        <p className="text-center text-gray-700 w-[85%]">
          M Divine Creation is your trusted corporate gifting partner, offering
          premium, customizable gift solutions for businesses. We specialize in
          curated gift boxes, personalized merchandise, and eco-friendly gifting
          options.
        </p>
      </div>
    </div>
  );
};

export default Sect2;
