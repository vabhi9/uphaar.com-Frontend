// Sect4.jsx - Customer Support
import React from "react";
import { NavLink, Link } from "react-router-dom";

const Sect4 = () => {
  return (
    <div
      className="h-full flex justify-center items-center"
      style={{ flexBasis: "20%" }}
    >
      <div className="h-[68%] flex flex-col justify-between items-center">
        <h2 className="text-2xl font-extrabold">Customer Support</h2>
        <ul className="flex flex-col justify-center items-center gap-2">
          <li className="hover:text-blue-700 cursor-pointer">FAQs</li>
          <li className="hover:text-blue-700 cursor-pointer">
            Shipping & Delivery
          </li>
          <li>
            <NavLink
              className="hover:text-blue-700"
              to="/return&refundpolicies"
            >
              Return & Refund Policy
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:text-blue-700" to="/privacypolicy">
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <Link className="hover:text-blue-700" to="/terms&conditions">
              Terms & Conditions
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sect4;
