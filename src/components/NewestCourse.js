import React from "react";
import Slider from "react-slick";
import img1 from "../img/st1.jfif";
import img2 from "../img/st2.jfif";
import img3 from "../img/st3.jfif";
import img4 from "../img/person2.png";
function NewestCourse() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="w-8/12 mx-auto my-10">
      <section className="flex flex-col">
        <h1 className="text-2xl">Newest Courses</h1>
        <p className="text-sm text-[#818894]">#Recently published courses</p>
        <div className="shadow-md rounded-md">
          <Slider {...settings}>
            <div className="p-3 flex flex-col space-y-5">
              <figure className="">
                <img className="rounded-t-md" src={img1} alt="" />
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
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default NewestCourse;
