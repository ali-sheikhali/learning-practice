import React from "react";
import img1 from "../img/medal.png.png";
import img2 from "../img/club_points_banner.png.png";

function ClubPoint() {
  return (
    <div className="w-8/12 mx-auto md:flex md:items-center my-20">
      <div className="">
        <figure className="relative">
          <img src={img2} alt="" />
          <div className="flex space-x-2 border absolute bottom-5 right-[-20px] bg-white px-3 py-2 leading-5 rounded-xl">
            <img className="h-[40px] w-[40px]" src={img1} alt="" />
            <div>
              <p className="font-bold">You earned 50 points! </p>
              <p className="text-[14px] text-gray-400">
                for completing the course...
              </p>
            </div>
          </div>
        </figure>
      </div>
      <div className="md:w-6/12 mt-5 md:px-10">
        <p className="text-3xl font-bold">Win Club Points</p>
        <p className="text-gray-400">
          Use Intent LMS and win club points according to different activities.
          You will be able to use your club points to get free prizes and
          courses. Start using the system now and collect points!
        </p>
        <div className="flex justify-between mt-5 md:w-10/12 md:mx-auto">
          <button className="bg-[#43D477] text-white px-2 py-1 rounded-md">
            Rewards
          </button>
          <button className="px-2 py-1 rounded-md border border-[#43D477] text-[#43D477]">
            Points Club
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClubPoint;
