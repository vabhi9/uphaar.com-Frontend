import React from "react";
import Sect1 from "./FootSections/Sect1";
import Sect2 from "./FootSections/Sect2";
import Sect3 from "./FootSections/Sect3";
import Sect4 from "./FootSections/Sect4";

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-inner">
      {/* Main Footer Layout */}
      <section
        className="
          w-full 
          flex flex-wrap 
          justify-between 
          items-start 
          gap-6 
          px-6 
          py-10 
          md:px-10 
          lg:px-16 
          lg:flex-nowrap 
          lg:gap-8
        "
      >
        {/* Section1 */}
        <div className="w-full sm:w-[48%] lg:w-[30%]">
          <Sect1 />
        </div>

        {/* Section2 */}
        <div className="w-full sm:w-[48%] lg:w-[25%]">
          <Sect2 />
        </div>

        {/* Section3 */}
        <div className="w-full sm:w-[48%] lg:w-[25%]">
          <Sect3 />
        </div>

        {/* Section4 */}
        <div className="w-full sm:w-[48%] lg:w-[20%]">
          <Sect4 />
        </div>
      </section>

      {/* Divider line */}
      <div className="border-t border-gray-300" />

      {/* Bottom copyright */}
      <div className="text-center text-gray-500 text-sm py-3">
        © 2025 Uphaar.com | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
