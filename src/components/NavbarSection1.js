import React from "react";
import { Menu } from "@headlessui/react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function NavbarSection1() {
  return (
    <div className="w-full border-b-2 py-2 hidden lg:block">
      <section className="w-8/12 mx-auto flex justify-between">
        <div className="flex items-center space-x-5">
          <div className="relative">
            <Menu>
              <Menu.Button className="flex leading-3">
                USD ($)
                <IoIosArrowDown className="text-gray-600" />
              </Menu.Button>
              <Menu.Items className="absolute flex flex-col bg-gray-200 w-[180px] rounded-md mt-2">
                <Menu.Item className="py-1 relative">
                  {({ active }) => (
                    <a
                      className="border-b w-10/12 mx-auto border-black p-1"
                      href="#"
                    
                    >
                      American Dollar
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="border-b w-10/12 mx-auto border-black p-1"
                      href="#"
                    >
                      Australian Dollar
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="border-b w-10/12 mx-auto border-black p-1"
                      href="#"
                    >
                      Hong Kong Dollar
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a className=" w-10/12 mx-auto p-1" href="#">
                      Canadian Dollar
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <div>
            <Menu>
              <Menu.Button className="flex leading-3">
                English <IoIosArrowDown className="text-gray-600" />
              </Menu.Button>
              <Menu.Items className="absolute flex flex-col bg-gray-200 w-[180px] rounded-md mt-2">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="border-b w-10/12 mx-auto border-black p-1"
                      href="#"
                    >
                      German
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="border-b w-10/12 mx-auto border-black p-1"
                      href="#"
                    >
                      French
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="border-b w-10/12 mx-auto border-black p-1"
                      href="#"
                    >
                      Japanese
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className="border-b w-10/12 mx-auto border-black p-1"
                      href="#"
                    >
                      Arabic
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a className="w-10/12 mx-auto p-1" href="#">
                      Spanixh
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
          <div className="relative leading-3">
            <input
              className="border rounded-md px-3 py-1 focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            <CiSearch className="absolute top-2 right-4" />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-4">
            <CiShoppingCart className="text-xl" />
           <div className="border-l-2 border-gray-[#ECECEC] flex items-center space-x-5"> 
            <CiBellOn className=" mr-8 ml-4 text-xl" />
           <Link>Login</Link>
           <Link>Register</Link>
           </div>
        </div>
      </section>
    </div>
  );
}

export default NavbarSection1;
