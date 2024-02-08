import React from "react";
import { Menu } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import img1 from "../img/Figure → Link → Installment.jpg.png";
import img2 from "../img/person.png";
import img4 from "../img/Figure → Link → Installment.jpg.png";
import img5 from "../img/Figure2.png";
import img7 from "../img/Figure → Link → new_live_system.jpg (1).png";
import img8 from "../img/Figure → Link → update_1.6.jpg.png";

function MainCategory() {
  return (
    <div className="w-8/12 mx-auto mb-20 flex flex-col md:flex-row ">
      {/* ---------------------------- filter in Mobile screen ---------------------------- */}
      <div className="border rounded-md md:hidden">
        <Menu>
          <Menu.Button className="flex items-center border-b w-full py-2">
            <span className="font-bold mx-5">Filter</span>
            <IoChevronDown className="ml-3 mt-1" />
          </Menu.Button>
          <Menu.Items className="p-3 mx-5 border-b-2">
            <h3 className="border-b-4 border-[#43D477] w-fit mb-3">Type</h3>
            <Menu.Item>
              {({ active }) => (
                <Link className="flex justify-between items-center">
                  <span>Course Bundle</span>
                  <input type="checkbox" name="" id="" />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className="flex justify-between items-center">
                  <span>Live class</span>
                  <input type="checkbox" name="" id="" />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className="flex justify-between items-center">
                  <span>Course</span>
                  <input type="checkbox" name="" id="" />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className="flex justify-between items-center">
                  <span>Text course</span>
                  <input type="checkbox" name="" id="" />
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
          <Menu.Items className="p-3 mx-5">
            <h3 className="border-b-4 border-[#43D477] w-fit mb-3">
              More options
            </h3>
            <Menu.Item>
              {({ active }) => (
                <Link className="flex justify-between items-center">
                  <span>Show only subscribe</span>
                  <input type="checkbox" name="" id="" />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className="flex justify-between items-center">
                  <span>Show only certificate included</span>
                  <input type="checkbox" name="" id="" />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className="flex justify-between items-center">
                  <span>Show only courses with quiz</span>
                  <input type="checkbox" name="" id="" />
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link className="flex justify-between items-center">
                  <span>Show only featured courses</span>
                  <input type="checkbox" name="" id="" />
                </Link>
              )}
            </Menu.Item>
            <button className="bg-[#43D477] w-10/12 mx-auto flex justify-center items-center  text-white py-1 my-2 rounded-lg">
              Filter items
            </button>
          </Menu.Items>
        </Menu>
      </div>
      <div className="md:grid md:grid-cols-2 gap-4 md:w-8/12">
        <div className="shadow-md rounded-md my-5">
          <div className="p-3 flex flex-col space-y-5">
            <figure className="">
              <img className="rounded-t-md h-[250px]" src={img1} alt="" />
            </figure>
            <div className="px-3">
              <div className="flex space-x-3 leading-9">
                <img className="w-10 rounded-full" src={img2} alt="" />
                <p>Robert Ransdell</p>
              </div>
              <div className="">
                <h3>Installment and Secure HostNew Update Features</h3>
                <p className="mt-8">in Business Strategy</p>
              </div>
              <div className="flex leading-3 space-x-3 mt-2">
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
              <div className="flex justify-between text-sm leading-3 space-x-2 mt-2">
                <div className="flex space-x-1 border-r border-black pr-[78px]">
                  <FiClock />
                  <p>1:40 Hours</p>
                </div>
                <div className="flex space-x-1">
                  <CiCalendar />
                  <p>19 March 2023</p>
                </div>
              </div>
              <div className="mt-3">
                <button className="text-[#43D477] font-bold  ">Free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-md my-5">
          <div className="p-3 flex flex-col space-y-5">
            <figure className="">
              <img className="rounded-t-md h-[250px]" src={img7} alt="" />
            </figure>
            <div className="px-3">
              <div className="flex space-x-3 leading-9">
                <img className="w-10 rounded-full" src={img2} alt="" />
                <p>Robert Ransdell</p>
              </div>
              <div className="">
                <h3>Installment and Secure HostNew Update Features</h3>
                <p className="mt-8">in Business Strategy</p>
              </div>
              <div className="flex leading-3 space-x-3 mt-2">
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
              <div className="flex justify-between text-sm leading-3 space-x-2 mt-2">
                <div className="flex space-x-1 border-r border-black pr-[78px]">
                  <FiClock />
                  <p>1:40 Hours</p>
                </div>
                <div className="flex space-x-1">
                  <CiCalendar />
                  <p>19 March 2023</p>
                </div>
              </div>
              <div className="mt-3">
                <button className="text-[#43D477] font-bold  ">Free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-md my-5">
          <div className="p-3 flex flex-col space-y-5">
            <figure className="">
              <img className="rounded-t-md h-[250px]" src={img8} alt="" />
            </figure>
            <div className="px-3">
              <div className="flex space-x-3 leading-9">
                <img className="w-10 rounded-full" src={img2} alt="" />
                <p>Robert Ransdell</p>
              </div>
              <div className="">
                <h3>Installment and Secure HostNew Update Features</h3>
                <p className="mt-8">in Business Strategy</p>
              </div>
              <div className="flex leading-3 space-x-3 mt-2">
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
              <div className="flex justify-between text-sm leading-3 space-x-2 mt-2">
                <div className="flex space-x-1 border-r border-black pr-[78px]">
                  <FiClock />
                  <p>1:40 Hours</p>
                </div>
                <div className="flex space-x-1">
                  <CiCalendar />
                  <p>19 March 2023</p>
                </div>
              </div>
              <div className="mt-3">
                <button className="text-[#43D477] font-bold  ">Free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-md my-5">
          <div className="p-3 flex flex-col space-y-5">
            <figure className="">
              <img className="rounded-t-md h-[250px]" src={img5} alt="" />
            </figure>
            <div className="px-3">
              <div className="flex space-x-3 leading-9">
                <img className="w-10 rounded-full" src={img2} alt="" />
                <p>Robert Ransdell</p>
              </div>
              <div className="">
                <h3>Installment and Secure HostNew Update Features</h3>
                <p className="mt-8">in Business Strategy</p>
              </div>
              <div className="flex leading-3 space-x-3 mt-2">
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
              <div className="flex justify-between text-sm leading-3 space-x-2 mt-2">
                <div className="flex space-x-1 border-r border-black pr-[78px]">
                  <FiClock />
                  <p>1:40 Hours</p>
                </div>
                <div className="flex space-x-1">
                  <CiCalendar />
                  <p>19 March 2023</p>
                </div>
              </div>
              <div className="mt-3">
                <button className="text-[#43D477] font-bold  ">Free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-md my-5">
          <div className="p-3 flex flex-col space-y-5">
            <figure className="">
              <img className="rounded-t-md h-[250px]" src={img5} alt="" />
            </figure>
            <div className="px-3">
              <div className="flex space-x-3 leading-9">
                <img className="w-10 rounded-full" src={img2} alt="" />
                <p>Robert Ransdell</p>
              </div>
              <div className="">
                <h3>Installment and Secure HostNew Update Features</h3>
                <p className="mt-8">in Business Strategy</p>
              </div>
              <div className="flex leading-3 space-x-3 mt-2">
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
              <div className="flex justify-between text-sm leading-3 space-x-2 mt-2">
                <div className="flex space-x-1 border-r border-black pr-[78px]">
                  <FiClock />
                  <p>1:40 Hours</p>
                </div>
                <div className="flex space-x-1">
                  <CiCalendar />
                  <p>19 March 2023</p>
                </div>
              </div>
              <div className="mt-3">
                <button className="text-[#43D477] font-bold  ">Free</button>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md rounded-md my-5">
          <div className="p-3 flex flex-col space-y-5">
            <figure className="">
              <img className="rounded-t-md h-[250px]" src={img4} alt="" />
            </figure>
            <div className="px-3">
              <div className="flex space-x-3 leading-9">
                <img className="w-10 rounded-full" src={img2} alt="" />
                <p>Robert Ransdell</p>
              </div>
              <div className="">
                <h3>Installment and Secure HostNew Update Features</h3>
                <p className="mt-8">in Business Strategy</p>
              </div>
              <div className="flex leading-3 space-x-3 mt-2">
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
              <div className="flex justify-between text-sm leading-3 space-x-2 mt-2">
                <div className="flex space-x-1 border-r border-black pr-[78px]">
                  <FiClock />
                  <p>1:40 Hours</p>
                </div>
                <div className="flex space-x-1">
                  <CiCalendar />
                  <p>19 March 2023</p>
                </div>
              </div>
              <div className="mt-3">
                <button className="text-[#43D477] font-bold  ">Free</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ---------------------------- filter in md screen ---------------------------- */}
      <div className="hidden md:block md:sticky md:right-0 md:top-10 md:mb-4 md:h-full md:mt-6 border rounded-md h-fit py-3 md:w-4/12 ml-2">
        <div className="border-b w-10/12 mx-auto space-y-4 py-3">
          <h3 className="font-bold mx-5 border-b-4 border-[#43D477] mb-3 w-fit">
            Type
          </h3>
          <div className="flex justify-between items-center mx-3">
            <p>Course Bundle</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between items-center mx-3">
            <p>Live class</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between items-center mx-3">
            <p>Course</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between items-center mx-3">
            <p>Text course</p>
            <input type="checkbox" />
          </div>
        </div>
        <div className="border-b w-10/12 space-y-4 mx-auto py-3">
          <h3 className="font-bold mx-5 border-b-4 border-[#43D477] mb-3 w-fit">
            More options
          </h3>
          <div className="flex justify-between items-center mx-3">
            <p>Show only subscribe</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between items-center mx-3">
            <p>Show only certificate included</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between items-center mx-3">
            <p>Show only courses with quiz</p>
            <input type="checkbox" />
          </div>
          <div className="flex justify-between items-center mx-3">
            <p>Show only featured courses</p>
            <input type="checkbox" />
          </div>
        </div>
        <button className="bg-[#43D477] w-10/12 mx-auto flex justify-center items-center  text-white py-1 my-2 rounded-lg">
          Filter items
        </button>
      </div>
    </div>
  );
}

export default MainCategory;
