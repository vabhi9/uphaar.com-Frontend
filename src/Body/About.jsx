import React from "react";

const About = ({ aboutRef }) => {
  return (
    <section
      ref={aboutRef}
      id="About-us"
      className="w-full bg-gradient-to-br from-white to-blue-50 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12"
    >
      {/* Left Image */}
      <div className="md:w-1/2 w-full rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
        <img
          src="https://i.pinimg.com/736x/b6/81/9d/b6819d4fa2bbeb07d014dd0726272e1e.jpg"
          alt="About Us"
          className="w-full h-[350px] md:h-[450px] object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="md:w-1/2 w-full bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
          About Us
        </h2>
        <p className="mt-4 text-gray-700 text-center md:text-left leading-relaxed">
          At{" "}
          <span className="font-semibold text-blue-700">Uphaar.com</span>
          , we believe every gift should tell a story. We specialize in turning
          ordinary moments into extraordinary memories with our curated range of
          corporate gifts — from T-shirts and mugs to custom employee welcome
          kits. Our mission is simple: to make every corporate gesture
          thoughtful, personal, and memorable.
        </p>
        <p className="mt-4 text-gray-600 text-center md:text-left leading-relaxed">
          With a professional and creative team, we ensure every gift reflects
          your brand's personality and leaves a lasting impression.
        </p>
      </div>
    </section>
  );
};

export default About;
