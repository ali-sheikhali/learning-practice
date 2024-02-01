import React from "react";
import { Menu } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import img1 from "../img/img1.jfif";
import img2 from "../img/person.png";
import { CiStar } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";

function FeaturedCourses() {
  return (
    <div className="w-8/12 mx-auto mb-10">
      <section className="flex flex-col space-y-2 ">
        <h1 className="text-2xl">Featured Courses</h1>
        <p className="text-sm text-[#818894]">
          #Browse featured courses and become skillful
        </p>
        <figure className="relative ">
          <img className="rounded-md md:h-[400px] md:w-full" src={img1} alt="" />
          <div className="md:hidden">
            <Menu>
              <Menu.Button className="absolute bottom-2 left-2 z-10 bg-gray-300 flex leading-3 rounded-md px-3 py-1 ">
                More
                <IoIosArrowDown className="ml-2" />
              </Menu.Button>
              <Menu.Items className="absolute bg-gray-300 w-10/12  rounded-b-md left-3 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link>
                      <div className="px-3 flex flex-col space-y-3">
                        <h3>Excel from Beginner to Advanced</h3>
                        <figure className="flex items-center space-x-3">
                          <img
                            className="w-10 rounded-full"
                            src={img2}
                            alt=""
                          />
                          <p>Robert Ransdell</p>
                        </figure>
                        <p className="text-sm">
                          Microsoft Excel is a spreadsheet developed by
                          Microsoft for Windows, macOS, Android and iOS. It
                          features calculation, graphing tools, pivot tables,
                          and a macro programming language called Visual Basic
                          for Applications (VBA).
                        </p>
                        <div className="flex leading-3 space-x-3">
                          <div className="flex">
                            <CiStar className="text-yellow-500" />
                            <CiStar className="text-yellow-500" />
                            <CiStar className="text-yellow-500" />
                            <CiStar className="text-yellow-500" />
                            <CiStar className="text-yellow-500" />
                          </div>
                          <button className="text-white bg-[#43D477] px-2 py-1 rounded-md">
                            4.5
                          </button>
                        </div>
                        <div className="flex justify-between text-sm leading-3 space-x-2">
                          <div className="flex space-x-1 border-r-2 border-gray-400 pr-2">
                            <FiClock />
                            <p>1:40 Hours</p>
                          </div>
                          <div className="flex space-x-1">
                            <CiCalendar />
                            <p>19 March 2023</p>
                          </div>
                          <button className="text-white bg-[#43D477] px-2 py-1 rounded-md">
                            100$
                          </button>
                        </div>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <div className="absolute top-10 left-20 py-2 bg-white w-4/12 rounded-md hidden md:block">
            <div className="px-3 flex flex-col space-y-3">
              <h3>Excel from Beginner to Advanced</h3>
              <figure className="flex items-center space-x-3">
                <img className="w-10 rounded-full" src={img2} alt="" />
                <p>Robert Ransdell</p>
              </figure>
              <p className="text-sm">
                Microsoft Excel is a spreadsheet developed by Microsoft for
                Windows, macOS, Android and iOS. It features calculation,
                graphing tools, pivot tables, and a macro programming language
                called Visual Basic for Applications (VBA).
              </p>
              <div className="flex leading-3 space-x-3">
                <div className="flex">
                  <CiStar className="text-yellow-500" />
                  <CiStar className="text-yellow-500" />
                  <CiStar className="text-yellow-500" />
                  <CiStar className="text-yellow-500" />
                  <CiStar className="text-yellow-500" />
                </div>
                <button className="text-white bg-[#43D477] px-2 py-1 rounded-md">
                  4.5
                </button>
              </div>
              <div className="flex justify-between text-sm leading-3 space-x-2">
                <div className="flex space-x-1 border-r-2 mt-1 border-gray-400 pr-2">
                  <FiClock />
                  <p>1:40 Hours</p>
                </div>
                <div className="flex space-x-1 mt-1">
                  <CiCalendar />
                  <p>19 March 2023</p>
                </div>
                <button className="text-white bg-[#43D477] px-2 py-1 rounded-md">
                  100$
                </button>
              </div>
            </div>
          </div>
        </figure>
      </section>
    </div>
  );
}

export default FeaturedCourses;
