import ImageSettings from "../components/imageSettings";
import SectionBoard from "../components/SectionBoard";
import BaseText from "../base/BaseText";
import BaseHeading3 from "../base/BaseHeading3";
import PropTypes from "prop-types";
import ButtonLink from "../components/ButtonLink";
import { formatedDate } from "../../config/formatedDate";

function CardProject({
  img = "",
  title = "",
  part = "",
  dateEnd = "",
  dataLink = { idProject: "", online: "", github: "", figma: "" },
}) {
  return (
    <>
      <div className="w-full mb-5 md:mb-2 bg-slate-200 bg-opacity-5 rounded-xl p-5 shadow-[3px_4px_5px_rgba(253,186,116,0.355)] outline-2 outline-orange-200 outline-dashed ">
        <ImageSettings url={img} className={"rounded-lg h-56"} />

        <div className="flex items-center justify-between mt-3">
          <SectionBoard
            part={part}
            className={
              "px-2 py-1 w-max text-[0.55rem] font-semibold rounded-[0.200rem] shadow-md uppercase"
            }
          />
          <BaseText
            text={String(formatedDate(dateEnd))}
            className={"text-[0.5rem] text-justify font-medium"}
          />
        </div>

        <BaseHeading3
          text={title}
          truncateWord={6}
          className={"text-justify font-medium mt-2 mb-3 text-sm capitalize"}
        />

        {dataLink.idProject != "" ? (
          <ButtonLink
            part={"Details"}
            link={`/projects/${dataLink.idProject}`}
          />
        ) : (
          ""
        )}

        {dataLink.online != "" ? (
          <ButtonLink part={"Online"} link={dataLink.online} blank={true} />
        ) : (
          ""
        )}
        {dataLink.figma != "" ? (
          <ButtonLink part={"Figma"} link={dataLink.figma} blank={true} />
        ) : (
          ""
        )}

        {dataLink.github != "" ? (
          <ButtonLink part={"Github"} link={dataLink.github} blank={true} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

CardProject.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  part: PropTypes.string.isRequired,
  dateEnd: PropTypes.string.isRequired,
  dataLink: PropTypes.object.isRequired,
};

export default CardProject;
