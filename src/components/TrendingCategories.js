import React from "react";
import Slider from "react-slick";
import img1 from "../img/briefcase.png.png";
import img2 from "../img/bulb.png.png";
import img3 from "../img/family.png.png";
import img4 from "../img/muscle.png.png";
import img5 from "../img/palette.png.png";
import img6 from "../img/connection.png.png";

function TrendingCategories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (
    <div className="w-8/12 mx-auto my-20">
      <section className="flex flex-col">
        <h1 className="text-2xl">Trending Categories</h1>
        <p className="text-sm text-[#818894]">
          #Browse trending & popular learning topics
        </p>
        <div className="md:hidden">
          <Slider {...settings}>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#7367F0] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img1}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  2 Course
                </span>
                <p className="text-center my-5">Mangment</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#AD82E0] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img2}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  3 Course
                </span>
                <p className="text-center my-5">Business Strategy</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#FF7C59] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img3}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  5 Course
                </span>
                <p className="text-center my-5">Life Style</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#28C76F] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img4}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  1 Course
                </span>
                <p className="text-center my-5">Health & Fitness</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#EA5455] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img6}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  3 Course
                </span>
                <p className="text-center my-5">Science</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#45C0F9] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img5}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  1 Course
                </span>
                <p className="text-center my-5">Design</p>
              </figure>
            </div>
          </Slider>
        </div>
        {/* ----------------------------------------------  the part of md Screen ---------------------------------------------- */}
        <div className="hidden md:block">
          <Slider {...settings2}>
            <div className="px-1">
              <figure className="flex flex-col justify-center items-center my-5">
                <img
                  className="bg-[#7367F0] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img1}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  2 Course
                </span>
                <p className="text-center my-5">Mangment</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#AD82E0] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img2}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  3 Course
                </span>
                <p className="text-center my-5">Business Strategy</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#FF7C59] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img3}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  5 Course
                </span>
                <p className="text-center my-5">Life Style</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#28C76F] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img4}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  1 Course
                </span>
                <p className="text-center my-5">Health & Fitness</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#EA5455] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img6}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  3 Course
                </span>
                <p className="text-center my-5">Science</p>
              </figure>
            </div>
            <div className="">
              <figure className="flex flex-col justify-center items-center   my-5">
                <img
                  className="bg-[#45C0F9] rounded-2xl mt-5 p-5 w-[120px] h-[120px]"
                  src={img5}
                  alt=""
                />
                <span className="bg-white text-sm px-3   rounded-3xl mt-[-10px]">
                  1 Course
                </span>
                <p className="text-center my-5">Design</p>
              </figure>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default TrendingCategories;
