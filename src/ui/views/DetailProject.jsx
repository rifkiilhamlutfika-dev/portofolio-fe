import BaseLayout from "../layouts/BaseLayout";
import { MdAccessTime, MdOutlineAccessTimeFilled } from "react-icons/md";
import { useParams } from "react-router";
import { formatedDateWithDay } from "../../config/formatedDate";
import { useEffect, useState } from "react";
import BaseHeading3 from "../base/BaseHeading3";
import CarouselImg from "../modules/CarouselImg";
import BaseHeading2 from "../base/BaseHeading2";
import ButtonLink from "../components/ButtonLink";
import YoutubeSettings from "../modules/Youtubesettings";
import FrameworkIconPart from "../modules/FrameworkIconPart";
import useStore from "../../stores/StoreApp";
import CardProjectShort from "../modules/CardProjectShort";
import projectApi from "../../api/projectApi";
import PropTypes from "prop-types";

import Loading from "../modules/dataConditions/Loading";
import NoData from "../modules/dataConditions/NoData";
import ErrorServer from "../modules/dataConditions/ErrorServer";

function Content({
  dataProject = {},
  dataProjectConnect = [],
  getDataClicked,
}) {
  return (
    <>
      <BaseLayout>
        <BaseHeading3
          text={`Project / ${dataProject?.type || ""}`}
          className={"mb-3 text-xs capitalize lg:text-sm font-semibold"}
        />

        <div className="lg:flex lg:space-x-3 lg:items-start">
          <div className="lg:w-1/2">
            <CarouselImg
              url={dataProject?.images || []}
              dataClicked={getDataClicked}
            />
          </div>
          <div className="lg:w-1/2">
            <BaseHeading2
              text={dataProject.title}
              className={
                "mt-4 text-justify text-sm font-semibold text-blue-950 md:text-lg lg:mt-0"
              }
            />

            <div className="mt-3">
              {dataProject?.dataLink?.online && (
                <ButtonLink
                  part={"Online"}
                  link={dataProject?.dataLink?.online}
                  blank
                />
              )}

              {dataProject?.dataLink?.figma && (
                <ButtonLink
                  part={"Figma"}
                  link={dataProject?.dataLink?.figma}
                  blank
                />
              )}

              {dataProject?.dataLink?.github && (
                <ButtonLink
                  part={"Github"}
                  link={dataProject?.dataLink?.github}
                  blank
                />
              )}
            </div>
            <div className="w-full h-[0.1rem] bg-opacity-25 bg-black mt-7 mb-8 lg:mb-5"></div>
            <BaseHeading3
              text="Work Period"
              className={"text-xs font-bold opacity-65 uppercase"}
            />

            <BaseHeading3
              className={
                "text-sm font-bold text-blue-950 flex items-center mt-1"
              }
            >
              <MdAccessTime />
              <span className="text-sm capitalize text-opacity-10 font-medium px-2">
                Start :
              </span>
              {formatedDateWithDay(dataProject.start || "2006-04-25")}
            </BaseHeading3>

            <BaseHeading3
              className={"text-sm font-bold text-blue-950 flex items-center"}
            >
              <MdOutlineAccessTimeFilled />
              <span className="text-sm capitalize text-opacity-10 font-medium px-2">
                End :
              </span>
              {formatedDateWithDay(dataProject.end || "2006-04-25")}
            </BaseHeading3>

            <BaseHeading3
              text="Tech Stack"
              className={"text-xs font-bold mt-8 opacity-65 lg:mt-4 uppercase"}
            />
            <FrameworkIconPart
              icons={(dataProject.tech || []).map((data) => {
                return data.toLowerCase();
              })}
            />
          </div>
        </div>

        <BaseHeading3
          text="Demo"
          className={
            "text-xs lg:text-sm font-bold mt-8 mb-2 opacity-65 lg:mt-14 uppercase"
          }
        />

        <div className="w-full h-52 md:h-96 xl:h-[30rem] mb-10">
          <YoutubeSettings codeUrlVideo={dataProject.demoCode || ""} />
        </div>

        <BaseHeading3
          text="Project Connected"
          className={
            "text-xs lg:text-sm font-bold mt-8 mb-2 opacity-65 lg:mt-14 uppercase"
          }
        />

        {dataProjectConnect < 1 && <NoData />}
        <div className="md:grid md:grid-cols-2 md:gap-5 gap-y-10 mb-4">
          {(dataProjectConnect || []).filter(Boolean).map((data, index) => (
            <CardProjectShort
              title={data.title}
              part={data.type}
              dateEnd={data.end}
              dataLink={data.dataLink}
              key={index}
            />
          ))}
        </div>
      </BaseLayout>
    </>
  );
}

function DetailProject() {
  const { idProject } = useParams();
  const { addUrlImagePopUp, setIsImagePopUp } = useStore();
  const [dataProject, setDataProject] = useState();
  const [dataProjectConnect, setDataProjectConnect] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    projectApi
      .getDetail(idProject)
      .then((res) => {
        setDataProject(res.result);
        setDataProjectConnect(res.projectConnected);
      })
      .catch((error) => {
        console.log(error.code);
        setIsError(error.code);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [idProject]);

  const getDataClicked = (indexImage) => {
    addUrlImagePopUp(dataProject.images[indexImage]);
    setIsImagePopUp(true);
  };

  if (isLoading) return <Loading />;
  if (!isLoading && isError == "ERR_NETWORK") return <ErrorServer />;
  if (dataProject === undefined) return <NoData />;
  return (
    <Content
      dataProject={dataProject}
      dataProjectConnect={dataProjectConnect}
      getDataClicked={getDataClicked}
    />
  );
}

Content.propTypes = {
  dataProject: PropTypes.object.isRequired,
  dataProjectConnect: PropTypes.array.isRequired,
  getDataClicked: PropTypes.func.isRequired,
};

export default DetailProject;
