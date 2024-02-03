import React from "react";
import img1 from "../img/Section → become_instructor_banner.jpg.png";
import img2 from "../img/Section → forum_section.jpg.png";
import img4 from "../img/become_instructor.svg fill.png";

function Become() {
  return (
    <div className="w-8/12 mx-auto my-20 ">
      {/* ---------------------------------- first section ---------------------------------- */}
      <div className="flex flex-col md:flex-row md:items-center mb-20">
        <div className="md:w-6/12 hidden md:block">
          <p className="text-3xl font-bold">Become an instructor</p>
          <p className="text-gray-400">
            Are you interested to be a part of our community? You can be apart
            of our community by signing up as an instructor or organization.
          </p>
          <div className="flex justify-between mt-5 md:w-10/12 md:mx-auto">
            <button className="bg-[#43D477] text-white px-2 py-1 rounded-md">
              Become an Instructor
            </button>
            <button className="px-2 py-1 rounded-md border border-[#43D477] text-[#43D477]">
              Registration Packages
            </button>
          </div>
        </div>
        <figure className="relative md:w-6/12">
          <img src={img1} alt="" />
          <p className="absolute top-[-30px] right-[-10px] z-[-1] h-[150px] w-[150px] rounded-full bg-pink-200"></p>
          <div className="flex space-x-2 border absolute bottom-24 right-[-50px] bg-white px-3 py-2 leading-5 rounded-xl">
            <img className="h-[40px] w-[40px]" src={img4} alt="" />
            <div>
              <p className="font-bold">Become an instructor </p>
              <p className="text-[14px] text-gray-400">
                start earning right now...{" "}
              </p>
            </div>
          </div>
        </figure>
        <div className="md:w-6/12 md:hidden block">
          <p className="text-3xl font-bold">Become an instructor</p>
          <p className="text-gray-400">
            Are you interested to be a part of our community? You can be apart
            of our community by signing up as an instructor or organization.
          </p>
          <div className="flex justify-between mt-5 md:w-10/12 md:mx-auto">
            <button className="bg-[#43D477] text-white px-2 py-1 rounded-md">
              Become an Instructor
            </button>
            <button className="px-2 py-1 rounded-md border border-[#43D477] text-[#43D477]">
              Registration Packages
            </button>
          </div>
        </div>
      </div>
      {/* ---------------------------------- second section ---------------------------------- */}
      <div className="flex flex-col md:flex-row md:items-center ">
        <figure className="relative md:w-6/12">
          <img src={img2} alt="" />
          <p className="absolute top-[-30px] right-[-10px] z-[-1] h-[150px] w-[150px] rounded-full bg-pink-200"></p>
          <div className="flex space-x-2 border absolute bottom-24 right-[-50px] bg-white px-3 py-2 leading-5 rounded-xl">
            <img className="h-[40px] w-[40px]" src={img4} alt="" />
            <div>
              <p className="font-bold">Become an instructor </p>
              <p className="text-[14px] text-gray-400">
                start earning right now...{" "}
              </p>
            </div>
          </div>
        </figure>
        <div className="md:w-6/12">
          <p className="text-3xl font-bold">
            Have a Question? Ask it in forum and get answer
          </p>
          <p className="text-gray-400">
            Our forums helps you to create your questions on different subjects
            and communicate with other forum users. Our users will help you to
            get the best answer!
          </p>
          <div className="flex justify-between mt-5 md:w-10/12 md:mx-auto">
            <button className="bg-[#43D477] text-white px-2 py-1 rounded-md">
              Create a new topic
            </button>
            <button className="px-2 py-1 rounded-md border border-[#43D477] text-[#43D477]">
              Browse forums
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Become;
