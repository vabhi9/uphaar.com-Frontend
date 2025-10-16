import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { useCart } from "../Cart/CartContext";

const S3 = () => {
  const { addToCart } = useCart();
  const [offset, setOffset] = useState(0);
  const cardWidth = 270; // card width + spacing
  const visibleCards = 4;

  const products = [
    {
      _id: 1201,
      img: "https://i.pinimg.com/736x/3f/f7/34/3ff7347d2a33cba49d85d8f42d7eb543.jpg",
      content: "Bottle on Stones",
      price: "200",
    },
    {
      _id: 1202,
      img: "https://i.pinimg.com/736x/00/ac/ef/00acefa25971025f8e900e39fcac1ff7.jpg",
      content: "Porsche Car",
      price: "820",
    },
    {
      _id: 1203,
      img: "https://i.pinimg.com/736x/ab/1e/84/ab1e84c6c2bf8a61d21b5dfb5c0ce50a.jpg",
      content: "Herbal Shampoo",
      price: "370",
    },
    {
      _id: 1204,
      img: "https://i.pinimg.com/1200x/ef/9c/23/ef9c239c98e501c3ef5d710e7f45954d.jpg",
      content: "Royal Perfume",
      price: "580",
    },
    {
      _id: 1205,
      img: "https://i.pinimg.com/736x/37/a7/27/37a727a46e6611784eacbfef4c367979.jpg",
      content: "Premium Shampoo",
      price: "699",
    },
    {
      _id: 1206,
      img: "https://i.pinimg.com/736x/0d/7d/f8/0d7df8261d03be52b2c175d8a631974b.jpg",
      content: "Nikol's Shampoo",
      price: "789",
    },
    {
      _id: 1207,
      img: "https://i.pinimg.com/736x/ba/ee/60/baee60fd4d57fb99f09553336ff29e61.jpg",
      content: "Honey Facewash",
      price: "535",
    },
    {
      _id: 1208,
      img: "https://i.pinimg.com/736x/2e/c6/68/2ec668e692606e1759bdec9650237e05.jpg",
      content: "4 Bottle Set",
      price: "899",
    },
    {
      _id: 1209,
      img: "https://i.pinimg.com/736x/3f/f7/34/3ff7347d2a33cba49d85d8f42d7eb543.jpg",
      content: "Purple Bottle",
      price: "150",
    },
    {
      _id: 1210,
      img: "https://i.pinimg.com/736x/57/13/8b/57138bd0b118abf2e1d13e6a406048b1.jpg",
      content: "Notebook Set",
      price: "325",
    },
  ];

  const totalCards = products.length;
  const maxOffset = -(totalCards - visibleCards) * cardWidth;

  const moveCards = (direction) => {
    setOffset((prev) => {
      let newOffset =
        direction === "left" ? prev + cardWidth : prev - cardWidth;
      return Math.max(Math.min(newOffset, 0), maxOffset);
    });
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white to-blue-50">
      {/* Section Heading */}
      <div className="flex justify-center mb-14">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F497F] bg-white/80 px-6 py-3 rounded-2xl shadow-md">
          Our Products
        </h1>
      </div>

      {/* Products Slider */}
      <section
        id="S3"
        className="h-[28rem] w-full flex items-center justify-center relative"
      >
        {/* Left Button */}
        <button
          className="h-[3rem] w-[3rem] absolute left-6 bg-white/90 text-3xl 
          rounded-full shadow-md border border-gray-200 hover:bg-[#0F497F] hover:text-white 
          hover:shadow-lg duration-300 z-20 flex items-center justify-center"
          onClick={() => moveCards("left")}
        >
          {"<"}
        </button>

        {/* Cards Wrapper */}
        <div className="overflow-hidden px-12">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {products.map((Product, index) => (
              <div
                key={index}
                className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl hover:shadow-blue-100 
                hover:scale-105 duration-500 w-64 flex-shrink-0"
              >
                <div className="h-72 w-full rounded-t-2xl overflow-hidden">
                  <img
                    src={Product.img}
                    alt={Product.content}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <p className="font-semibold text-gray-700 truncate">
                    {Product.content}
                  </p>
                  <p className="font-extrabold text-[#0F497F]">
                    ₹{Product.price}
                  </p>
                  <button
                    className="mt-2 py-2 rounded-full bg-[#0F497F] text-white 
                    flex items-center justify-center gap-2 
                    hover:bg-[#012C4F] hover:shadow-md duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(Product);
                    }}
                  >
                    Add to Cart
                    <FaCartArrowDown />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          className="h-[3rem] w-[3rem] absolute right-6 bg-white/90 text-3xl 
          rounded-full shadow-md border border-gray-200 hover:bg-[#0F497F] hover:text-white 
          hover:shadow-lg duration-300 z-20 flex items-center justify-center"
          onClick={() => moveCards("right")}
        >
          {">"}
        </button>
      </section>
    </div>
  );
};

export default S3;
