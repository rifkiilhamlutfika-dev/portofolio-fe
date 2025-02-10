import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import BaseButton from "../base/BaseButton";
import PropTypes from "prop-types";

function CarouselImg({ url = [], dataClicked }) {
  const [indexImage, setIndexImage] = useState(0);
  const [positionClick, setPositionClick] = useState("right");

  const prevIndexImage = () => {
    setPositionClick("left");
    setIndexImage((indexNow) =>
      indexNow === 0 ? url.length - 1 : indexNow - 1
    );
  };

  const nextIndexImage = () => {
    setPositionClick("right");
    setIndexImage((indexNow) =>
      indexNow === url.length - 1 ? 0 : indexNow + 1
    );
  };

  const setDataClicked = (indexImage) => {
    dataClicked(indexImage);
  };

  return (
    <>
      <div className="w-full h-48 md:h-96 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={indexImage}
            src={url[indexImage]}
            initial={
              positionClick == "right"
                ? { x: 50, opacity: 0 }
                : { x: -50, opacity: 0 }
            }
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full object-cover object-center"
            onClick={() => setDataClicked(indexImage)}
          />
        </AnimatePresence>

        <BaseButton className={"absolute inset-y-0"} onClick={prevIndexImage}>
          <IoIosArrowBack className="text-white text-xl hover:bg-slate-300 hover:bg-opacity-50 hover:text-blue-950 duration-200" />
        </BaseButton>

        <BaseButton
          className={"absolute right-0 inset-y-0"}
          onClick={nextIndexImage}
        >
          <IoIosArrowForward className="text-white text-xl hover:bg-slate-300 hover:bg-opacity-50 hover:text-blue-950 duration-200" />
        </BaseButton>

        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {url.map((_, index) => (
            <div
              className={`w-2 h-2 rounded-full ${
                indexImage === index ? "bg-blue-400" : "bg-white"
              }`}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

CarouselImg.propTypes = {
  url: PropTypes.array.isRequired,
  dataClicked: PropTypes.func,
};

export default CarouselImg;
