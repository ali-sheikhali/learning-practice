import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="my-52">
      {/* ------------------------------ Join us ------------------------------ */}
      <div
        className="flex flex-col md:flex-row 
       space-y-5 p-4 justify-around items-center w-8/12 mx-auto rounded-xl bg-[#43D477]"
      >
        <div className="md:w-6/12">
          <p className="text-3xl font-bold text-white">Join us today</p>
          <p className="text-white text-sm">
            #We will send the best deals and offers to your email.
          </p>
        </div>
        <div className="relative md:w-6/12">
          <input
            className="rounded-2xl px-3 py-2 mx-auto md:w-8/12 focus:outline-none"
            type="text"
            placeholder="Search... "
          />
          <button className="absolute bg-[#43D477] top-1 right-3 md:right-44 px-1 py-1 text-white rounded-xl">
            Search
          </button>
        </div>
      </div>
      <div className="w-full bg-[#1F3B64] pt-[100px]  text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center w-8/12 mx-auto">
          <div className="space-y-3">
            <h2 className="font-bold text-xl">a bout us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              odio augue, congue vitae interdum sed, rutrum et elit. Integer
              tempus hendrerit leo sit amet mattis.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Additional Links</h2>
            <ul>
                <Link to="./login" >- <span>Login</span> </Link>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Footer;
