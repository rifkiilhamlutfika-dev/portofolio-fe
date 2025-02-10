import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoSchool } from "react-icons/io5";
import { MdCamera } from "react-icons/md";
import useStore from "../../stores/StoreApp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  const { isImagePopUp } = useStore();

  return (
    <>
      <div
        className={`bg-white sticky top-0 w-full h-max shadow-sm ${
          isImagePopUp ? "z-40" : "z-50"
        }`}
      >
        <div className="flex items-center justify-between p-2">
          <div className=" w-16 h-auto mx-5 mt-3 ">
            <div className="relative">
              <h1 className="text-lg tracking-wide break-words font-extrabold leading-snug">
                RILKA DEV
              </h1>
              <div className="w-2 h-2 rounded-full bg-green-400 absolute right-2 bottom-3 flicker"></div>
            </div>
            <div className="w-full h-2 bg-blue-400 flicker-width"></div>
          </div>
          <div
            className="mx-5 space-y-1 flex flex-col items-end"
            onClick={toggleBurger}
          >
            <div
              className={`w-6 h-1 bg-blue-400 rounded-sm duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-4 h-1 bg-blue-400 rounded-sm duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-1 bg-blue-400 rounded-sm duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
        </div>
      </div>

      <div
        className={`bg-gray-500 w-full h-screen fixed ${
          isOpen ? "z-30 opacity-15" : "-z-50 opacity-0"
        }`}
        onClick={toggleBurger}
      ></div>
      <div
        className={`w-full bg-white px-3 fixed transform transition-transform duration-500 ease-in-out  ${
          isOpen ? "translate-y-0 z-40" : "-translate-y-full z-30 "
        }`}
      >
        <a
          className={`flex items-center justify-center space-x-3 py-2  `}
          href="/"
        >
          <FaHome className="w-4 h-auto" />
          <h1 className="font-semibold text-sm">Home</h1>
        </a>
        <hr />
        <a
          className="flex items-center justify-center space-x-3 py-2"
          href="/projects"
        >
          <GoProjectRoadmap className="w-4 h-auto" />
          <h1 className="font-semibold text-sm">Projects</h1>
        </a>
        <hr />
        <a
          className="flex items-center justify-center space-x-3 py-2"
          href="/academy"
        >
          <IoSchool className="w-4 h-auto" />
          <h1 className="font-semibold text-sm">Academy</h1>
        </a>
        <hr />
        <a
          className="flex items-center justify-center space-x-3 py-2"
          href="/hobbies"
        >
          <MdCamera className="w-4 h-auto" />
          <h1 className="font-semibold text-sm">Hobbies</h1>
        </a>
      </div>
    </>
  );
}

export default Navbar;
