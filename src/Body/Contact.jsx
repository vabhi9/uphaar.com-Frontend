import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { FcConferenceCall } from "react-icons/fc";
import { GiExtraTime } from "react-icons/gi";

const Contact = ({ contactRef }) => {
  return (
    <section
      ref={contactRef}
      id="contact-us"
      className="min-h-[70vh] w-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white py-12 px-6"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Get in Touch</h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {/* Location */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-center items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <MdLocationOn className="text-Primary h-12 w-12 mb-3" />
          <p className="text-gray-700 font-semibold text-lg">
            Sector-36, Gurugram
          </p>
          <p className="text-gray-500 text-sm text-center">
            Visit our office to discuss your gifting needs in person.
          </p>
        </div>

        {/* Email */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-center items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <FaMailBulk className="text-Primary h-12 w-12 mb-3" />
          <p className="text-gray-700 font-semibold text-lg">
            support@company.com
          </p>
          <p className="text-gray-500 text-sm text-center">
            Drop us an email and our team will respond within 24 hours.
          </p>
        </div>

        {/* Call */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-center items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <FcConferenceCall className="h-12 w-12 mb-3" />
          <p className="text-gray-700 font-semibold text-lg">+91 98765 43210</p>
          <p className="text-gray-500 text-sm text-center">
            Call us Mon–Fri (9 AM – 6 PM) for immediate assistance.
          </p>
        </div>

        {/* Timings */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-center items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <GiExtraTime className="text-Primary h-12 w-12 mb-3" />
          <p className="text-gray-700 font-semibold text-lg">Working Hours</p>
          <p className="text-gray-500 text-sm text-center">
            Monday – Friday: 9:00 AM – 6:00 PM <br />
            Saturday: 10:00 AM – 4:00 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
