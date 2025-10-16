import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "This platform completely changed the way we shop for corporate gifts. Seamless experience and top-notch quality!",
    name: "John Doe",
    title: "HR Manager, TechCorp",
  },
  {
    text: "I loved the custom box creation feature! Our team was thrilled with the personalized gifts we sent out.",
    name: "Sarah Lee",
    title: "Marketing Head, FinFlow",
  },
  {
    text: "Fast delivery, beautiful packaging, and excellent customer support. Highly recommended!",
    name: "Ravi Patel",
    title: "Operations Manager, BuildCo",
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-wide"
      >
        Testimonials
      </motion.h2>

      <p className="text-lg text-gray-600 text-center max-w-2xl mb-14">
        Hear what our happy clients have to say about their experience.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 px-6 max-w-6xl w-full">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between border border-gray-100/50"
          >
            {/* Faint background quote */}
            <FaQuoteLeft className="absolute top-4 left-4 text-gray-200 text-5xl -z-0" />

            {/* Main Text */}
            <p className="text-gray-700 text-base leading-relaxed italic relative z-10">
              {item.text}
            </p>

            <FaQuoteRight className="text-indigo-500 text-2xl self-end mt-4 relative z-10" />

            <div className="mt-6 relative z-10 border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-gray-500">{item.title}</p>
              {/* Stars */}
              <div className="flex mt-2 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
