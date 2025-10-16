// Sect3.jsx - Quick Links
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sect3 = () => {
  const navigate = useNavigate();
  const handleNavigation = (section) => {
    navigate(`/?scrollTo=${section}`); // Navigate to home with query param
  };
  return (
    <div
      className="h-full flex justify-center items-center"
      style={{ flexBasis: "25%" }}
    >
      <div className="h-[70%] flex flex-col justify-between items-center">
        <h2 className="text-2xl font-extrabold">Quick Links</h2>
        <ul className="flex flex-col items-center gap-2">
          <li
            className="hover:text-blue-700 transition-colors cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            Home
          </li>
          <li>
            <Link
              className="hover:text-blue-700 transition-colors"
              to="/shop-gifts"
            >
              Shop Gifts
            </Link>
          </li>
          <li
            className="hover:text-blue-700 transition-colors cursor-pointer"
            onClick={() => handleNavigation("about")}
          >
            About Us
          </li>
          <li className="hover:text-blue-700 transition-colors cursor-pointer" onClick={()=>handleNavigation("why")}>
            Why Choose Us
          </li>
          <li>
            <Link
              className="hover:text-blue-700 transition-colors"
              to="/contact"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-700 transition-colors" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sect3;
