import { useState } from "react";
import { motion } from "framer-motion";
import { MdPerson, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BiMessageSquare } from "react-icons/bi";
import axios from "axios";

const Query = () => {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/query`,
        {
          fullName,
          email,
          mobileNumber,
          message,
        }
        // {
        //   headers: { "Content-Type": "application/json" },
        //   withCredentials: true, // only if cookies involved
        // }
      );
      setFullName("");
      setMobileNumber("");
      setEmail("");
      setMessage("");
      alert(
        "We've Successfully Registered You Query! We will Contact you ASAP!"
      );
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrorMsg(err.response.data.errors[0].msg);
      } else {
        setErrorMsg("Something went wrong!");
      }
    }
  };
  return (
    <section className="w-full py-24 bg-gradient-to-b from-blue-50 to-white flex flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 tracking-wide"
      >
        Send Us a Query
      </motion.h2>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-[90%] md:w-2/3 flex flex-col md:flex-row gap-6 p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/30"
      >
        {/* Left Inputs */}
        <div className="flex flex-col gap-5 md:w-1/2">
          <div className="relative">
            <MdPerson className="absolute top-3 left-3 text-blue-400 w-6 h-6" />
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 py-3 rounded-xl border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none transition shadow-sm"
            />
          </div>
          <div className="relative">
            <FaPhoneAlt className="absolute top-3 left-3 text-blue-400 w-6 h-6" />
            <input
              value={mobileNumber}
              onChange={(e) =>
                setMobileNumber(e.target.value.replace(/\D/g, ""))
              }
              type="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="Mobile Number"
              className="w-full pl-12 py-3 rounded-xl border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none transition shadow-sm"
            />
          </div>
          <div className="relative">
            <MdEmail className="absolute top-3 left-3 text-blue-400 w-6 h-6" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email ID"
              className="w-full pl-12 py-3 rounded-xl border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none transition shadow-sm"
            />
          </div>
        </div>

        {/* Right Textarea */}
        <div className="relative md:w-1/2">
          <BiMessageSquare className="absolute top-3 left-3 text-blue-400 w-6 h-6" />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full pl-12 py-3 rounded-xl border border-gray-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-200 focus:outline-none resize-none h-full transition shadow-sm"
          />
        </div>
      </motion.div>
      {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
      {/* Submit Button */}
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 8px 25px rgba(59, 130, 246, 0.5)",
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-10 py-3 text-white font-bold rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-2xl transition-all duration-300"
        onClick={handlerSubmit}
      >
        Submit
      </motion.button>
    </section>
  );
};

export default Query;
