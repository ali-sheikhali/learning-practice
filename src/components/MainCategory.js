import React from "react";
import { Menu } from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";

function MainCategory() {
  return <div className="w-8/12 mx-auto mb-20">
{/* ----------------------------------- filter ----------------------------------- */}
    <div className="border rounded-md">
        <Menu>
            <Menu.Button className="flex items-center" >
                Filter 
                <IoChevronDown className="ml-3" />
            </Menu.Button>
            <Menu.Items>
                
            </Menu.Items>
        </Menu>
    </div>
  </div>;
}

export default MainCategory;
