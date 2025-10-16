import React, { useState, useEffect } from "react";
import Pic from "./Pic.jpg";

const S1 = ({ homeRef }) => {
  const imgAry = [
    "https://i.pinimg.com/1200x/6a/c9/f4/6ac9f47303585c493fea16b8319beaa9.jpg",
    "https://i.pinimg.com/1200x/25/f9/f0/25f9f033dcb1490ef107c627831fe214.jpg",
    "https://i.pinimg.com/736x/fc/73/e5/fc73e5792b1dd94a66de3e5b62eca45a.jpg",
    "https://i.pinimg.com/736x/5f/73/69/5f7369c13e432e10931633034c5db971.jpg",
    "https://i.pinimg.com/1200x/7b/ea/49/7bea49d88b88b15dcb07ef3d4e089be2.jpg",
    "https://i.pinimg.com/1200x/2b/2d/43/2b2d43a05bf530b07bd178ed0db8f980.jpg",
  ];
  // const imgAry = [
  //   "https://i.pinimg.com/736x/69/87/76/698776a454a090592ea6ad173c862a43.jpg",
  //   "https://i.pinimg.com/736x/f9/c3/db/f9c3db06ef9dee6428f38332c6fbd3bb.jpg",
  //   "https://i.pinimg.com/736x/46/ba/26/46ba2614fdb2b65b1faa8ad52dcac82c.jpg",
  //   "https://i.pinimg.com/1200x/cf/78/fe/cf78fe788b403ff3d41784153b10d20d.jpg",
  //   "https://i.pinimg.com/736x/94/a6/a0/94a6a02148dfebbf83e3c1e25b49bdd4.jpg",
  //   "https://i.pinimg.com/1200x/88/3f/e1/883fe1a56f687d3a60e43ca597efc103.jpg",
  // ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imgAry.length);
    }, 3000); // change 3000 → 2000 or 4000 for faster/slower
    return () => clearInterval(interval);
  }, [imgAry.length]);

  // Handle Next & Previous
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgAry.length);
  };
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgAry.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      ref={homeRef}
      id="S1"
      className="relative h-[90vh] w-full overflow-hidden"
    >
      {/* Images */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {imgAry.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F497F]/80 via-[#012C4F]/60 to-transparent"></div>

      {/* Centered Text (optional hero message) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          Corporate Gifting Made Elegant
        </h1>
        <p className="mt-4 text-lg md:text-xl drop-shadow-md">
          Premium curated gifts to delight your employees & clients.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 text-4xl">
        <button
          className="bg-white/70 hover:bg-white text-black px-4 py-2 rounded-full shadow-md transition"
          onClick={prevImage}
        >
          {"<"}
        </button>
        <button
          className="bg-white/70 hover:bg-white text-black px-4 py-2 rounded-full shadow-md transition"
          onClick={nextImage}
        >
          {">"}
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {imgAry.map((_, idx) => (
          <div
            key={idx}
            className={`h-3 w-3 rounded-full transition-all duration-500 ${
              idx === currentIndex
                ? "bg-white scale-125 shadow-md"
                : "bg-gray-300/70"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default S1;
