import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { FaBars } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";

function NavbarSection2() {
  return (
    <div className="w-full  border-b-2 py-2">
      <section className="w-8/12 mx-auto  flex justify-between items-center ">
        <Link className="font-[Montserrat] text-[24px] font-bold" to="/">
          LOGO
        </Link>
        <div className="md:hidden z-10">
          <Menu>
            <Menu.Button>
              <FaBars className="text-xl mt-1 ml-6" />
            </Menu.Button>
            <Menu.Items className="absolute text-white left-0 mt-[10px] flex flex-col w-full bg-[#43D477] ">
              <Menu.Item className="mx-auto py-1 ">
                {({ active }) => <Link to="/">Home</Link>}
              </Menu.Item>
              <Menu.Item className="mx-auto py-1">
                {({ active }) => <Link to="/">Courses</Link>}
              </Menu.Item>
              <Menu.Item className="mx-auto py-1">
                {({ active }) => <Link to="/">Instructors</Link>}
              </Menu.Item>
              <Menu.Item className="mx-auto py-1">
                {({ active }) => <Link to="/">Login</Link>}
              </Menu.Item>
              <Menu.Item className="mx-auto py-1">
                {({ active }) => <Link to="/">Register</Link>}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="z-10">
          <Menu>
            <Menu.Button className="flex bg-[#F1F1F1] p-2 rounded-md">
              <BiCategory className="text-xl mt-1" />
              <p>Categories</p>
            </Menu.Button>
            <Menu.Items
              className="absolute mx-auto text-white left-0 md:left-[455px]
             mt-[10px] flex flex-col w-full md:w-[180px] md:rounded-b-md bg-[#43D477] "
            >
              <Menu.Item className="mx-auto py-1">
                {({ active }) => <Link>Web Design</Link>}
              </Menu.Item>
              <Menu.Item className="mx-auto py-1">
                {({ active }) => <Link>Python</Link>}
              </Menu.Item>
              <Menu.Item className="mx-auto py-1">
                {({ active }) => <Link>Javascript</Link>}
              </Menu.Item>
              <Menu.Item className="mx-auto py-1">
                {({ active }) => <Link>React js</Link>}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Courses</Link>
            </li>
            <li>
              <Link>Instructors</Link>
            </li>
            <li>
              <Link>Info</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="bg-[#43D477] text-white rounded-md p-1">
            Start Learning
          </button>
        </div>
      </section>
    </div>
  );
}

export default NavbarSection2;
