import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative">
      {/* ------------------------------ Join us ------------------------------ */}
      <div
        className="flex flex-col md:flex-row absolute top-[-50px] left-20 md:left-60
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
      {/* ------------------------------ Footer ------------------------------ */}

      <div className="w-full bg-[#1F3B64] pt-[150px]  text-white">
        <div
          className="grid grid-cols-1 space-y-5 md:space-y-0 md:space-x-20 md:grid-cols-3 justify-center w-8/12 mx-auto
        border-b-2"
        >
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
            <ul className="flex flex-col">
              <Link to="./category">
                - <span>Category</span>{" "}
              </Link>
              <Link to="./login">
                - <span>Login</span>{" "}
              </Link>
              <Link to="./register">
                - <span>Register</span>{" "}
              </Link>
              <Link to="./blog">
                - <span>Blog</span>{" "}
              </Link>
              <Link to="./contact-us">
                - <span>Contact Us</span>{" "}
              </Link>
              <Link to="./certificate-validation">
                - <span>Certificate validation</span>{" "}
              </Link>
              <Link to="./become-instructor">
                - <span>Become instructor</span>{" "}
              </Link>
              <Link to="./terms-rules">
                - <span>Terms & rules</span>{" "}
              </Link>
              <Link to="./about-us">
                - <span>About us</span>{" "}
              </Link>
            </ul>
          </div>
          <div className="pb-5">
            <h2 className="font-bold text-xl">Information links</h2>
            <ul className="flex flex-col">
              <Link to="./#">
                - <span>Info Link</span>{" "}
              </Link>
              <Link to="./#">
                - <span>Info Link</span>{" "}
              </Link>
              <Link to="./#">
                - <span>Info Link</span>{" "}
              </Link>
              <Link to="./#">
                - <span>Info Link</span>{" "}
              </Link>
              <Link to="./#">
                - <span>Info Link</span>{" "}
              </Link>
              <Link to="./#">
                - <span>Info Link</span>{" "}
              </Link>
              <Link to="./#">
                - <span>Info Link</span>{" "}
              </Link>
              <Link to="./#">
                - <span>Info Link</span>{" "}
              </Link>
            </ul>
          </div>
        </div>
        <div className=" w-8/12 mx-auto py-10  text-lg relative">
          <div className="absolute right-0 flex space-x-2">
            <p className="flex leading-4 ">
              <FaPhoneAlt className="mr-2" />
              063-011-01-01
            </p>
            <Link>
              <FaInstagram />
            </Link>
            <Link>
              <FaWhatsapp />
            </Link>
            <Link>
              <FaXTwitter />
            </Link>
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <SiGmail />
            </Link>
          </div>
        </div>
        <div className="w-full bg-[#1b3459] text-white">
          <div className="w-8/12 mx-auto text-center py-3 text-[12px]">
            All rights are reserved for learning management system platform
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
