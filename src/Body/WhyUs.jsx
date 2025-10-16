import React from "react";
import { motion } from "framer-motion";
import { FaGift, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    icon: <FaGift className="text-pink-600 text-3xl" />,
    title: "Personalised Corporate Gifts",
    desc: "Tailor-made gift boxes to reflect your brand identity and make employees & clients feel valued.",
  },
  {
    icon: <FaLayerGroup className="text-indigo-600 text-3xl" />,
    title: "Wide Range of Products",
    desc: "From tech gadgets to eco-friendly gifts, we offer a diverse catalog for all occasions.",
  },
  {
    icon: <FaCheckCircle className="text-green-600 text-3xl" />,
    title: "Professional Approach",
    desc: "Curated with care, ensuring every product is practical, premium, and perfectly aligned to your event.",
  },
];

const WhyUs = ({whyRef}) => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-100 to-blue-200 flex flex-col items-center"
    ref={whyRef}
    id="why"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Why Choose Us?
      </motion.h2>

      <p className="text-lg text-gray-600 text-center max-w-xl mb-12">
        We go beyond just gifting — we help you build lasting relationships
        through thoughtfully curated corporate solutions.
      </p>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full px-6">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
