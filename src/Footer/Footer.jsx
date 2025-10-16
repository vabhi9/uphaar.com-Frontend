// Footer.jsx
import React from "react";
import Sect1 from "./FootSections/Sect1";
import Sect2 from "./FootSections/Sect2";
import Sect3 from "./FootSections/Sect3";
import Sect4 from "./FootSections/Sect4";

const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-inner">
      <section className="flex w-full h-72">
        {/* Section1 - 30% */}
        <Sect1 />

        {/* Section2 - 25% */}
        <Sect2 />

        {/* Section3 - 25% */}
        <Sect3 />

        {/* Section4 - 20% */}
        <Sect4 />
      </section>

      {/* Bottom copyright */}
      <div className="text-center text-gray-500 text-sm py-3 border-t border-gray-300">
        © 2025 M Divine Creation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
