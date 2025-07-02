import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center items-center p-4">
        <p className="text-[#90ff7c] font-bold">Growing your data insights</p>
        <h1 className="md:text-7xl sm:text-6xl text-3xl font-semibold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center w-full flex-col">
          <p className="md:text-5xl sm:text-4xl md-pl-4 pl-2 text-xl font-bold">
            Fast, flexible financing
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold py-4 ml-2"
            strings={["BTB", "BTC", "SAAS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl sm:text-4xl text-xl font-semibold text-gray-300 text-center">
          Monitor your data analytics to increase revenue for BTB, BTC & SAAS
          platforms
        </p>
        <button className="bg-[#90ff7c] text-black font-semibold rounded-full cursor-pointer hover:bg-[#00df9a] w-[170px] my-3 py-2 mx-auto">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
