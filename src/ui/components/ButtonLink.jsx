import PropTypes from "prop-types";
import BaseButton from "../base/BaseButton";
import { FaFigma, FaGithub, FaGlobe } from "react-icons/fa";

function ButtonLink({ part = "", link, blank = false, children, className }) {
  const routeTo = () => {
    window.open(link, blank ? "_blank" : "_self", "noopener,noreferrer");
  };

  if (part == "Online")
    return (
      <BaseButton
        className={
          "flex items-center w-full text-sm justify-center font-semibold mt-2 outline-gradient-gradientFe-colorOne outline-dashed outline-1  rounded-sm p-1 bg-gradient-to-r text-gray-800 hover:from-gradient-gradientDs-colorSecond hover:from-20% hover:to-gradient-gradientFe-colorOne hover:to-80% hover:text-white"
        }
        onClick={routeTo}
      >
        Online Web
        <span className="pl-3">
          <FaGlobe />
        </span>
      </BaseButton>
    );
  else if (part == "Github")
    return (
      <BaseButton
        className={
          "flex items-center w-full text-sm justify-center font-semibold mt-2 outline-dashed outline-1 outline-gray-400 rounded-sm p-1  text-gray-800 hover:bg-gray-800 hover:text-white"
        }
        onClick={routeTo}
      >
        Respository
        <span className="pl-3">
          <FaGithub />
        </span>
      </BaseButton>
    );
  else if (part == "Figma")
    return (
      <BaseButton
        className={
          "flex items-center w-full text-sm justify-center font-semibold mt-2 outline-dashed outline-1 outline-gray-400 rounded-sm p-1 bg-gradient-to-r text-gray-800 hover:from-gradient-gradientDs-colorSecond hover:from-20% hover:to-gradient-gradientBe-colorOne to-80% hover:text-white"
        }
        onClick={routeTo}
      >
        UI / UX
        <span className="pl-3">
          <FaFigma />
        </span>
      </BaseButton>
    );
  else if (part == "Details")
    return (
      <BaseButton
        className={
          "capitalize text-sm px-2 py-1 font-semibold w-full rounded-[0.250rem] outline-dashed outline-1 text-blue-900 hover:bg-blue-950 hover:text-white duration-300"
        }
        onClick={routeTo}
      >
        View Details
      </BaseButton>
    );
  else {
    return (
      <>
        <BaseButton onClick={routeTo} className={className}>
          {children}
        </BaseButton>
      </>
    );
  }
}

ButtonLink.propTypes = {
  part: PropTypes.oneOf(["Online", "Github", "Details", "Figma"]),
  link: PropTypes.string.isRequired,
  blank: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ButtonLink;
