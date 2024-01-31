import React from "react";
import Slider from "react-slick";
import teacherSVG from "../img/teacher.svg.svg";
import studentSVG from "../img/student.svg.svg";
import cousetSVG from "../img/course.svg.svg";
import videoSVG from "../img/video.svg.svg";
function ItemsState() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="relative">
      <div className="w-5/12 mx-auto my-10 rounded-md border md:hidden">
        <Slider className="mt-5" {...settings}>
          <div className="p-2">
            <div className="bg-blue-500 rounded-md p-1 w-4/12 mx-auto">
              <img className="ml-2 rounded-md" src={teacherSVG} alt="" />
            </div>
            <div className="flex flex-col justify-center space-y-1 text-center mt-5">
              <p className="text-[30px]">7</p>
              <h3 className="font-bold">Skillful Instructors</h3>
              <p className="text-gray-400 text-sm">
                Start learning from experienced instructors
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-purple-500 rounded-md p-1 w-4/12 mx-auto">
              <img className="ml-2 rounded-md" src={studentSVG} alt="" />
            </div>
            <div className="flex flex-col justify-center space-y-1 text-center mt-5">
              <p className="text-[30px]">8</p>
              <h3 className="font-bold">Happy Students</h3>
              <p className="text-gray-400 text-sm">
                Enrolled in our courses and improved their skills.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-green-400 rounded-md p-1 w-4/12 mx-auto">
              <img className="ml-1 rounded-md" src={cousetSVG} alt="" />
            </div>
            <div className="flex flex-col justify-center space-y-1 text-center mt-5">
              <p className="text-[30px]">8</p>
              <h3 className="font-bold">Live Classes</h3>
              <p className="text-gray-400 text-sm">
                Improve your skills using live knowledge flow.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="bg-red-400 rounded-md p-1 w-4/12 mx-auto">
              <img className="ml-1 rounded-md" src={videoSVG} alt="" />
            </div>
            <div className="flex flex-col justify-center space-y-1 text-center mt-5">
              <p className="text-[30px]">9</p>
              <h3 className="font-bold">Video Courses</h3>
              <p className="text-gray-400 text-sm">
                Learn without any geographical & time limitations.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="md:w-8/12 md:mx-auto hidden md:flex md:space-x-3 mt-[-80px]">
        <div className="p-2 shadow-md rounded-md bg-white">
          <div className="bg-blue-500 rounded-md p-1 w-4/12 mx-auto mt-3">
            <img className="ml-2 rounded-md" src={teacherSVG} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-1 text-center mt-5">
            <p className="text-[30px]">7</p>
            <h3 className="font-bold">Skillful Instructors</h3>
            <p className="text-gray-400 text-sm">
              Start learning from experienced instructors
            </p>
          </div>
        </div>
        <div className="p-2 shadow-md rounded-md bg-white">
          <div className="bg-purple-500 rounded-md p-1 w-4/12 mx-auto mt-3">
            <img className="ml-3 rounded-md" src={studentSVG} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-1 text-center mt-5">
            <p className="text-[30px]">8</p>
            <h3 className="font-bold">Happy Students</h3>
            <p className="text-gray-400 text-sm">
              Enrolled in our courses and improved their skills.
            </p>
          </div>
        </div>
        <div className="p-2 shadow-md rounded-md bg-white">
          <div className="bg-green-400 rounded-md p-1 w-4/12 mx-auto mt-3">
            <img className="ml-1 rounded-md" src={cousetSVG} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-1 text-center mt-5">
            <p className="text-[30px]">8</p>
            <h3 className="font-bold">Live Classes</h3>
            <p className="text-gray-400 text-sm">
              Improve your skills using live knowledge flow.
            </p>
          </div>
        </div>
        <div className="p-2 shadow-md rounded-md bg-white">
          <div className="bg-red-400 rounded-md p-1 w-4/12 mx-auto mt-3">
            <img className="ml-2 rounded-md" src={videoSVG} alt="" />
          </div>
          <div className="flex flex-col justify-center space-y-1 text-center mt-5">
            <p className="text-[30px]">9</p>
            <h3 className="font-bold">Video Courses</h3>
            <p className="text-gray-400 text-sm">
              Learn without any geographical & time limitations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsState;
