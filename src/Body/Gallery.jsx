import React from "react";
import { motion } from "framer-motion";
import { GiPresent } from "react-icons/gi";

const galleryItems = [
  "Personalised Corporate Gifts",
  "Wide Range of Products for Corporate and Promotional Events",
  "Symmetric and Professional Approach in Selecting Products",
  "Unique Packaging Solutions",
  "Eco-Friendly Gift Options",
  "Custom Branding Services",
];

const Gallery = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-blue-50 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-wide"
      >
        Gallery
      </motion.h2>
      <div className="w-24 h-1 bg-blue-400 rounded-full mb-12"></div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 max-w-6xl w-full">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative bg-white/80 backdrop-blur-md rounded-3xl h-52 flex flex-col justify-center items-center p-6 
            shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-200"
          >
            {/* Icon */}
            <div className="absolute -top-6 bg-gradient-to-br from-blue-200 to-blue-400 text-blue-900 rounded-full p-4 shadow-lg ring-4 ring-white">
              <GiPresent className="w-8 h-8" />
            </div>

            {/* Text */}
            <p className="text-center text-lg md:text-xl font-semibold text-gray-800 mt-6 leading-snug">
              {item}
            </p>

            {/* Decorative underline */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-300 rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
