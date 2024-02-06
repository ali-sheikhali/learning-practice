import React from "react";
import img1 from "../img/Section → category_cover.png.png";
function HearoHeaderCategory() {
  return (
    <div className="relative mt-5 mb-20">
      <figure className="w-full">
        <img src={img1} alt="" />
        <div className="absolute top-5 left-[40%] md:left-[45%] md:top-32 text-center">
          <p className="text-white font-bold text-3xl">Courses</p>
          <p className="border bg-[#F1F1F1] rounded-md p-1 text-[12px]">
            16 courses
          </p>
        </div>
      </figure>
      <div className="absolute w-10/12 mx-auto md:w-4/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <input
          className="text-black mt-10 w-full rounded-[36px] py-3 px-5 placeholder:text-gray-300 placeholder:text-sm 
        focus:outline-none placeholder:text-[12px] "
          type="text"
          placeholder="Search courses, instructors and organizations..."
        />
        <button className="absolute text-white bg-[#43D477] top-11 md:right-5 right-5 py-2 px-4 rounded-3xl ">
          Search
        </button>
      </div>
    </div>
  );
}

export default HearoHeaderCategory;
