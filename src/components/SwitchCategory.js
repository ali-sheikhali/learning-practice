import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { BiCategory } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";

function SwitchCategory() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="w-8/12 mx-auto mb-20 border rounded-lg p-3 flex justify-around items-center">
      <div className="flex mt-1 space-x-5 text-2xl">
        <BiCategory className="text-[#43D477] " />
        <FaBars />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
        <div className="flex leading-5">
          <span className="text-gray-400 mr-2">unComing</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only"></span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div className="flex leading-5">
          <span className="text-gray-400 mr-2">Free</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only"></span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div className="flex leading-5">
          <span className="text-gray-400 mr-2">Discount</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only"></span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div className="flex leading-5">
          <span className="text-gray-400 mr-2">Download</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-blue-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only"></span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default SwitchCategory;
