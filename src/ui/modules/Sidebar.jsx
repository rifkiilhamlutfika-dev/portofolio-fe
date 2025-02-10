import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoSchool } from "react-icons/io5";
import { MdCamera } from "react-icons/md";
import SocialMediaPart from "./SocialMediaPart";

function Sidebar() {
  return (
    <>
      <div className="bg-white shadow-lg shadow-blue-400 h-full fixed top-0 left-0 w-[250px]">
        <div className=" w-24 h-auto mx-10 mt-10 ">
          <div className="relative">
            <h1 className="text-2xl tracking-wider break-words font-extrabold">
              RILKA DEV
            </h1>
            <div className="w-3 h-3 rounded-full bg-green-400 absolute right-6 bottom-3 flicker"></div>
          </div>
          <div className="w-full h-2 bg-blue-400 flicker-width"></div>
        </div>
        <a
          className="flex items-center space-x-3 mx-10 mt-10 hover:p-3 hover:bg-blue-200 duration-300 rounded-lg"
          href="/"
        >
          <FaHome className="w-8 h-auto " />
          <h1 className="font-semibold text-lg">Home</h1>
        </a>
        <a
          className="flex items-center space-x-3 mx-10 mt-6 hover:p-3 hover:bg-blue-200 duration-300 rounded-lg"
          href="/projects"
        >
          <GoProjectRoadmap className="w-8 h-auto " />
          <h1 className="font-semibold text-lg">Projects</h1>
        </a>
        <a
          className="flex items-center space-x-3 mx-10 mt-6 hover:p-3 hover:bg-blue-200 duration-300 rounded-lg"
          href="/academy"
        >
          <IoSchool className="w-8 h-auto " />
          <h1 className="font-semibold text-lg">Academy</h1>
        </a>
        <a
          className="flex items-center space-x-3 mx-10 mt-6 hover:p-3 hover:bg-blue-200 duration-300 rounded-lg"
          href="/hobbies"
        >
          <MdCamera className="w-8 h-auto " />
          <h1 className="font-semibold text-lg">Hobbies</h1>
        </a>

        <div className="w-full absolute bottom-0">
          <p className="font-semibold text-sm  text-center">Follow Me :</p>
          <div className="flex justify-center mt-2 mb-4">
            <SocialMediaPart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
