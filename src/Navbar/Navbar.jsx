import { useContext, useEffect, useState } from "react";
import uphaarLogo2 from './uphaar_Logo2.jpg'
import { scrollFix } from "../utils/Scroll.js";
import MDiv from "./MDiv.png";
import Hover from "../utils/Hover";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { FaCartArrowDown, FaHamburger, FaTimes } from "react-icons/fa";
import UserContext from "../Context/UserContext.js";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { user } = useContext(UserContext);
  const userId = user?._id;
  const { cart } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    scrollFix();
    window.addEventListener("scroll", scrollFix);
    return () => window.removeEventListener("scroll", scrollFix);
  }, []);

  const handleNavigation = (section) => {
    navigate(`/?scrollTo=${section}`);
    setMenuOpen(false); // close menu on navigation
  };

  return (
    <div className="relative">
      {/* --- Section 1 --- */}
      <section
        id="Sect-1"
        className="h-12 w-full bg-Primary md:flex justify-between items-center p-3 hidden"
      >
        <div className="text-white">info@uphaar.com | +91-2464576807</div>
        <div>
          <NavLink to={userId ? "/profile" : "/signin"}>
            <div className="bg-white px-3 py-1 rounded-xl active:scale-95 duration-500">
              {userId ? "Profile" : "Sign In"}
            </div>
          </NavLink>
        </div>
      </section>

      {/* --- Section 2 --- */}
      <section
        id="Sect-2"
        className="h-24 w-full bg-Secondary md:flex justify-between items-center px-3 hidden"
      >
        <img
          src={uphaarLogo2}
          alt="Logo"
          className="cursor-pointer w-[12%] ml-[12px] h-[80%]"
        />
        <div>Text</div>
        <div>Google-Reviews</div>
      </section>

      {/* --- Section 3 (Main Navbar) --- */}
      <section
        id="Sect-3"
        className="fixed top-0 left-0 h-12 w-full bg-white flex items-center justify-between px-4 z-40 shadow-sm"
      >
        {/* Hamburger (mobile only) */}
        <div className="flex items-center gap-3 md:hidden">
          <FaHamburger
            className="h-7 w-7 text-[#012C4F] cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>

        {/* Center Menu (Desktop only) */}
        <div className="hidden md:flex justify-center items-center flex-1">
          <ul className="text-Primary flex justify-center items-center gap-7 [&>li]:cursor-pointer">
            <li onClick={() => handleNavigation("home")}>Home</li>
            <li onClick={() => handleNavigation("about")}>About Us</li>
            <li>
              <NavLink to={"/api/blog"}>Blog</NavLink>
            </li>
            <li>
              <Hover Parent={"Categories"} />
            </li>
            <li>Download Catalogue</li>
            <li onClick={() => handleNavigation("contact")}>Contact Us</li>
          </ul>
        </div>

        {/* Cart Icon */}
        <div className="flex justify-end items-center px-2">
          <div className="relative cursor-pointer">
            <FaCartArrowDown
              className="h-7 w-7 text-yellow-500"
              onClick={() => navigate("/cart")}
            />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
              {cart.length}
            </span>
          </div>
        </div>
      </section>

      {/* --- Mobile Dropdown Menu --- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-12 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-start gap-4 py-5 px-6 md:hidden"
          >
            {/* Close Button */}
            <div className="absolute top-3 right-5">
              <FaTimes
                className="h-6 w-6 text-gray-600 cursor-pointer hover:text-red-600 transition"
                onClick={() => setMenuOpen(false)}
              />
            </div>

            {/* Dropdown Items */}
            <ul className="flex flex-col gap-4 text-[#012C4F] font-medium w-full [&>li]:cursor-pointer mt-2">
              <li onClick={() => handleNavigation("home")}>Home</li>
              <li onClick={() => handleNavigation("about")}>About Us</li>
              <li>
                <NavLink to={"/api/blog"} onClick={() => setMenuOpen(false)}>
                  Blog
                </NavLink>
              </li>
              <li>
                <Hover Parent={"Categories"} />
              </li>
              <li>Download Catalogue</li>
              <li onClick={() => handleNavigation("contact")}>Contact Us</li>
              <li>
                <NavLink
                  to={userId ? "/profile" : "/signin"}
                  onClick={() => setMenuOpen(false)}
                >
                  {userId ? "Profile" : "Sign In"}
                </NavLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
