import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold">
            Subscribe to our newsletter
          </h1>
          <p>Stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="p-3 bg-white text-black flex w-full rounded-md"
            />
            <button className="bg-[#90ff7c] text-black font-semibold rounded-md cursor-pointer hover:bg-[#00df9a] w-[200px] mx-auto ml-4 my-6 py-3">
              Subscribe
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
