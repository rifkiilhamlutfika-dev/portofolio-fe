import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ImageSettings from "../components/ImageSettings";
import BaseText from "../base/BaseText";
import BaseHeading2 from "../base/BaseHeading2";
import BaseHeading3 from "../base/BaseHeading3";
import BaseButton from "../base/BaseButton";
import PropTypes from "prop-types";

function CardAcademy({
  dataAcademy = {
    urlImg: "",
    yearsStart: "",
    yearsEnd: "",
    institut: "",
    studentNumber: "",
    major: "",
    firstContent: "",
    secondContent: "",
  },
}) {
  const [contentFirst, setContentFirst] = useState(false);
  const [contentSecond, setContentSecond] = useState(false);

  const toggleFirst = () => {
    setContentFirst((prev) => !prev);
  };

  const toggleSecond = () => {
    setContentSecond((prev) => !prev);
  };

  return (
    <>
      <div className="rounded-md overflow-hidden outline-dashed outline-1 mt-10 mb-10 lg:w-1/2">
        <div className="w-full p-2">
          <div className="flex space-x-3 justify-around items-center py-2">
            <ImageSettings
              url={dataAcademy.urlImg}
              circle={true}
              className={
                "w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem] xl:w-[10rem] xl:h-[10rem] overflow-hidden rounded-full"
              }
            />

            <div>
              <BaseText
                text={`${dataAcademy.yearsStart} - ${dataAcademy.yearsEnd}`}
                className={
                  "text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] font-semibold"
                }
              />
              <BaseHeading2
                text={dataAcademy.institut}
                className={
                  "text-sm uppercase font-semibold md:text-lg xl:text-xl"
                }
              />
              <BaseHeading3
                text={`Student Number : ${dataAcademy.studentNumber}`}
                className={
                  "text-[0.7rem] md:text-[0.8rem] xl:text-[1rem] font-medium"
                }
              />
              <BaseHeading3
                text="Major"
                className={
                  "text-[0.6rem] md:text-[0.7rem] xl:text-[0.9rem] opacity-40 font-semibold uppercase mt-3"
                }
              />
              <BaseHeading3
                text={dataAcademy.major}
                className={
                  "text-xs md:text-sm xl:text-lg font-semibold capitalize tracking-wide leading-4"
                }
              />
            </div>
          </div>
        </div>
        <BaseButton
          onClick={toggleFirst}
          className={
            "w-full px-3 py-2 flex items-center justify-between border-b-2"
          }
        >
          <BaseText
            text="What I've learned"
            className={"font-semibold text-sm capitalize"}
          />
          <IoIosArrowDown
            className={`font-semibold ${!contentFirst ? "" : "rotate-180"}`}
          />
        </BaseButton>

        {contentFirst ? (
          <>
            <div className="px-3 py-2">
              <BaseText
                className={"text-xs md:text-sm text-justify"}
                htmlRead={true}
                text={dataAcademy.firstContent}
              ></BaseText>
            </div>
          </>
        ) : null}

        <BaseButton
          onClick={toggleSecond}
          className={
            "w-full px-3 py-2 flex items-center justify-between border-b-2"
          }
        >
          <BaseText
            text="Experience"
            className={"font-semibold text-sm capitalize"}
          />
          <IoIosArrowDown
            className={`font-semibold ${!contentSecond ? "" : "rotate-180"}`}
          />
        </BaseButton>

        {contentSecond ? (
          <>
            <div className="px-3 py-2">
              <BaseText
                className={"text-xs md:text-sm text-justify"}
                htmlRead={true}
                text={dataAcademy.secondContent}
              ></BaseText>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

CardAcademy.propTypes = {
  dataAcademy: PropTypes.shape({
    urlImg: PropTypes.string.isRequired,
    yearsStart: PropTypes.string,
    yearsEnd: PropTypes.string,
    institut: PropTypes.string,
    studentNumber: PropTypes.string,
    major: PropTypes.string,
    firstContent: PropTypes.string.isRequired,
    secondContent: PropTypes.string.isRequired,
  }),
};

export default CardAcademy;
