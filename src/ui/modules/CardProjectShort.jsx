import BaseHeading2 from "../base/BaseHeading2";
import SectionBoard from "../components/SectionBoard";
import BaseHeading3 from "../base/BaseHeading3";
import ButtonLink from "../components/ButtonLink";
import PropTypes from "prop-types";
import { formatedDate } from "../../config/formatedDate";

function CardProjectShort({
  title = "",
  part = "",
  dateEnd = "",
  dataLink = { idProject: "", onlineLink: "", githubLink: "" },
}) {
  return (
    <>
      <div className="text-blue-950  w-full text-justify px-5 py-3 shadow-sm shadow-gray-500 rounded-md ">
        <BaseHeading2
          text={title}
          className={"capitalize text-sm font-semibold"}
        />

        <div className="text-xs flex items-center my-2">
          <SectionBoard part={part} className={"text-xs"} />
          <BaseHeading3
            text={`| ${String(formatedDate(dateEnd))}`}
            className={"ml-1 font-semibold "}
          />
        </div>

        {dataLink.idProject != "" ? (
          <ButtonLink
            part={"Details"}
            link={`/projects/${dataLink.idProject || ""}`}
          />
        ) : (
          ""
        )}

        {dataLink.online != "" ? (
          <ButtonLink
            part={"Online"}
            link={dataLink.online || ""}
            blank={true}
          />
        ) : (
          ""
        )}
        {dataLink.figma != "" ? (
          <ButtonLink part={"Figma"} link={dataLink.figma || ""} blank={true} />
        ) : (
          ""
        )}

        {dataLink.github != "" ? (
          <ButtonLink
            part={"Github"}
            link={dataLink.github || ""}
            blank={true}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

CardProjectShort.propTypes = {
  title: PropTypes.string.isRequired,
  part: PropTypes.oneOf(["Frontend", "Backend", "Design"]),
  dateEnd: PropTypes.string,
  dataLink: PropTypes.shape({
    idProject: PropTypes.string,
    onlineLink: PropTypes.string,
    githubLink: PropTypes.string,
  }),
};

export default CardProjectShort;
