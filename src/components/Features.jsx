import React from "react";
import Laptop from "../assets/laptop.jpg";

const Features = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00b57c] font-semibold">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-4xl font-bold py-2">
            Manage Data Analytics Centerally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, repudiandae autem aliquam doloribus totam voluptates
            quidem aut dolore et harum.
          </p>
          <button className="bg-[#000] text-[#00b57c] font-semibold rounded-md cursor-pointer hover:bg-[#1a1a1ada] w-[170px] my-3 py-2 mx-auto md:mx-0">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
