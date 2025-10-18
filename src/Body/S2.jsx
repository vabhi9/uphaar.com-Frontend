import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const S2 = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/product/frontProducts`,
        { withCredentials: true }
      )
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          setProducts([]);
        }
      })
      .catch(() => setProducts([]));
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      {/* Section Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-[#0F497F] bg-white px-6 py-3 rounded-2xl shadow-md inline-block">
          Corporate Gifts
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Discover our handpicked selection of premium corporate gifts designed
          to impress clients and employees alike.
        </p>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
        {products.length > 0 ? (
          products.map((product, index) => (
            <motion.div
              key={product._id}
              onClick={() => navigate("/product", { state: product })}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-56 w-full bg-offWhite flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.productName}
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center flex-grow flex flex-col justify-between">
                <p className="text-lg font-semibold text-[#012C4F] mb-3">
                  {product.productName}
                </p>
                <button className="px-5 py-2 bg-[#0F497F] text-white rounded-xl text-sm font-medium hover:bg-[#012C4F] transition-all">
                  View Details
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            Loading or No Data Found
          </p>
        )}
      </div>
    </section>
  );
};

export default S2;
