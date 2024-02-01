import React from "react";
import Slider from "react-slick";
import { CiStar } from "react-icons/ci";
import { FiClock } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import img1 from "../img/solar.png";
import img2 from "../img/python.png";
import img3 from "../img/linkOficee.png";
import img6 from "../img/img1.jfif";
import img4 from "../img/person2.png";
import img5 from "../img/person.png";
function LatestBundles() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className="w-8/12 mx-auto my-32 shadow-md">
      <section className="flex flex-col ">
        <div className="flex justify-between mx-3">
          <div>
            <h1 className="text-2xl">Latest bundles</h1>
            <p className="text-sm text-[#818894]">#Latest bundles subtitle</p>
          </div>
          <button className="border px-5 text-gray-500 rounded-lg text-[14px]">
            View All
          </button>
        </div>
        <div className="shadow-md rounded-md block md:hidden">
          <Slider {...settings}>
            <div className="p-3 flex flex-col space-y-5">
              <figure className="">
                <img className="rounded-t-md h-[250px]" src={img1} alt="" />
              </figure>
              <div className="px-3">
                <div className="flex space-x-3 leading-9">
                  <img className="w-10 rounded-full" src={img4} alt="" />
                  <p>Kate Williams</p>
                </div>
                <div className="">
                  <h3>Solar Energy Design Course From Zero To Hero</h3>
                  <p className="mt-8">in Science</p>
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
                    4.1
                  </button>
                </div>
                <div className="flex justify-between text-sm leading-3 space-x-2 mt-2">
                  <div className="flex space-x-1 border-r border-black pr-[78px]">
                    <FiClock />
                    <p>1:40 Hours</p>
                  </div>
                  <div className="flex space-x-1">
                    <CiCalendar />
                    <p>19 April 2023</p>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="text-[#43D477] font-bold  ">25$</button>
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col space-y-5">
              <figure className="">
                <img className="rounded-t-md h-[250px]" src={img2} alt="" />
              </figure>
              <div className="px-3">
                <div className="flex space-x-3 leading-9">
                  <img className="w-10 rounded-full" src={img5} alt="" />
                  <p>Kate Williams</p>
                </div>
                <div className="">
                  <h3>Python for Beginners</h3>
                  <p className="mt-8">in Programmer</p>
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
                    4.6
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
                  <button className="text-[#43D477] font-bold  ">60$</button>
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col space-y-5">
              <figure className="">
                <img className="rounded-t-md h-[250px]" src={img3} alt="" />
              </figure>
              <div className="px-3">
                <div className="flex space-x-3 leading-9">
                  <img className="w-10 rounded-full" src={img5} alt="" />
                  <p>Kate Williams</p>
                </div>
                <div className="">
                  <h3>Microsoft Office Beginner to Expert Bundle</h3>
                  <p className="mt-8">in Management</p>
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
                    4.7
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
                  <button className="text-[#43D477] font-bold  ">50$</button>
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col space-y-5">
              <figure className="">
                <img className="rounded-t-md h-[250px]" src={img6} alt="" />
              </figure>
              <div className="px-3">
                <div className="flex space-x-3 leading-9">
                  <img className="w-10 rounded-full" src={img4} alt="" />
                  <p>Kate Williams</p>
                </div>
                <div className="">
                  <h3>New Update Features</h3>
                  <p className="mt-8">in Language</p>
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
          </Slider>
        </div>
        {/* ----------------------------------------------  the part of md Screen ---------------------------------------------- */}
        <div className="rounded-md hidden md:block">
          <Slider {...settings2}>
            <div className="p-3 flex flex-col space-y-5 h-[550px] shadow-md space-x-1">
              <figure className="">
                <img className="rounded-t-md h-[250px]" src={img1} alt="" />
              </figure>
              <div className="px-3">
                <div className="flex space-x-3 leading-9">
                  <img className="w-10 rounded-full" src={img4} alt="" />
                  <p>Kate Williams</p>
                </div>
                <div className="">
                  <h3>Solar Energy Design Course From Zero To Hero</h3>
                  <p className="mt-8">in Science</p>
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
                <div className="flex justify-between leading-3 space-x-2 mt-2">
                  <div className="flex  space-x-1 border-r border-black pr-[78px]">
                    <FiClock />
                    <p>1:40 Hours</p>
                  </div>
                  <div className="flex space-x-1">
                    <CiCalendar />
                    <p>19 April 2023</p>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="text-[#43D477] font-bold  ">25$</button>
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col space-y-5 h-[550px]  shadow-md space-x-1">
              <figure className="">
                <img className="rounded-t-md h-[250px]" src={img2} alt="" />
              </figure>
              <div className="px-3">
                <div className="flex space-x-3 leading-9">
                  <img className="w-10 rounded-full" src={img5} alt="" />
                  <p>Kate Williams</p>
                </div>
                <div className="">
                  <h3>Python for Beginners</h3>
                  <p className="mt-8">in Programmer</p>
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
                    4.6
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
                  <button className="text-[#43D477] font-bold  ">60$</button>
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col space-y-5 h-[550px] shadow-md space-x-1">
              <figure className="">
                <img className="rounded-t-md h-[250px]" src={img3} alt="" />
              </figure>
              <div className="px-3">
                <div className="flex space-x-3 leading-9">
                  <img className="w-10 rounded-full" src={img5} alt="" />
                  <p>Kate Williams</p>
                </div>
                <div className="">
                  <h3>Microsoft Office Beginner to Expert Bundle</h3>
                  <p className="mt-8">in Mangment</p>
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
                  <button className="text-[#43D477] font-bold  ">20$</button>
                </div>
              </div>
            </div>
            <div className="p-3 flex flex-col h-[550px] space-y-5">
              <figure className="">
                <img className="rounded-t-md h-[250px]" src={img1} alt="" />
              </figure>
              <div className="px-3">
                <div className="flex space-x-3 leading-9">
                  <img className="w-10 rounded-full" src={img4} alt="" />
                  <p>Kate Williams</p>
                </div>
                <div className="">
                  <h3>New Update Features</h3>
                  <p className="mt-8">in Language</p>
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
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default LatestBundles;
