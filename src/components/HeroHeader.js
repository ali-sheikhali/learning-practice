import React from "react";

function HeroHeader() {
  return (
    <div className="md:h-[calc(100vh-7rem)] h-[calc(100vh-4rem)] overflow-hidden bg-gradient-to-b from-[#04AA96] to-[#43D477] relative">
      <div className="absolute w-10/12 md:w-5/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="  mx-auto space-y-3 flex flex-col justify-center text-center text-white">
          <h1 className="font-bold font-[Montserrat] text-3xl md:text-4xl">
            Joy of learning & teaching...
          </h1>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            odio augue, congue vitae interdum sed, rutrum et elit. Integer
            tempus hendrerit leo sit amet mattis.
          </p>
          <div className="relative">
            <input
              className="text-black mt-10 w-10/12 mx-auto rounded-3xl py-3 px-5 placeholder:text-gray-300 placeholder:text-sm 
        focus:outline-none placeholder:text-[12px] "
              type="text"
              placeholder="Search courses, instructors and organizations..."
            />
            <button className="absolute bg-[#43D477] top-11 md:right-16 right-10 py-2 px-4 rounded-3xl ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroHeader;
