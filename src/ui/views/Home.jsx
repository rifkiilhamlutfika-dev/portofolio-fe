import photoMe from "/public/images/about-me/PHOTO ME.webp";
import BaseLayout from "../layouts/BaseLayout";
import ImageSettings from "../components/ImageSettings";
import SocialMediaPart from "../modules/SocialMediaPart";
import FrameworkIconPart from "../modules/FrameworkIconPart";
import BaseHeading1 from "../base/BaseHeading1";
import BaseHeading2 from "../base/BaseHeading2";
import YoutubeSettings from "../modules/YoutubeSettings";
import BaseHeading3 from "../base/BaseHeading3";
import TimelineAcademy from "../modules/TimelineAcademy";
import CardProjectShort from "../modules/CardProjectShort";
import BaseLink from "../base/BaseLink";
import { useEffect, useState } from "react";
import projectApi from "../../api/projectApi";
import Loading from "../modules/dataConditions/Loading";
import ErrorServer from "../modules/dataConditions/ErrorServer";
import PropTypes from "prop-types";

const dataSchool = [
  {
    yearsGraduate: "2021 - 2024",
    schoolName: "SMKN 2 Singosari",
    mayor: "Software Enginerring",
    status: false,
  },
  {
    yearsGraduate: "2024 - NOW",
    schoolName: "",
    mayor: "Informatic Engineering (S1)",
    status: true,
  },
];

function Content({ dataProjects = [] }) {
  return (
    <>
      <BaseLayout>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="md:flex md:justify-center md:w-full md:items-start lg:justify-start md:space-x-20">
            <div className="flex flex-col items-center md:pt-5">
              <div className="w-24 h-24 lg:w-32 lg:h-32 xl:w-36 xl:h-36 rounded-full outline-neutral-400 outline-dashed flex justify-center items-center">
                <ImageSettings
                  url={photoMe}
                  circle={true}
                  className={"scale-90"}
                />
              </div>
              <SocialMediaPart className={"mt-7 md:mt-5"} />
            </div>
            <div>
              <div className="mt-7">
                <BaseHeading1
                  text="RIFKI ILHAM LUTFIKA"
                  className={
                    "uppercase text-lg text-center font-extrabold text-blue-950 md:text-start md:text-2xl lg:text-4xl"
                  }
                />
                <BaseHeading2
                  text="FUllStack Web Developer"
                  className={
                    "uppercase text-xs text-center font-semibold md:text-start md:text-sm md:font-bold lg:text-xl"
                  }
                />
              </div>
              <div className="mt-8 md:mt-3">
                <BaseHeading2
                  text="For Development"
                  className={
                    "text-xs text-black opacity-60 text-center uppercase font-semibold md:text-start lg:text-sm"
                  }
                />
                <div>
                  <FrameworkIconPart icons={["all"]} grid={true} />
                  {/* gunakan penulisan react, vue , jangan reactIcon */}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-20 md:w-full">
            <div className="md:flex md:space-x-20">
              <div>
                <BaseHeading2
                  text="About Me"
                  className={
                    "text-xs text-black opacity-60 text-center uppercase font-semibold md:mb-5 lg:text-sm md:text-start"
                  }
                />

                <div className="mt-2 w-full lg:w-[20rem] xl:w-[35rem] h-48 md:h-56 lg:h-[11.2rem] xl:h-[19.7rem] px-10 md:px-0 rounded-md overflow-hidden">
                  <YoutubeSettings codeUrlVideo="pVQaxTRkQ6E?si=xHnrbJ-fAQEhpPE5" />
                </div>
              </div>
              <div className=" mt-10 md:mt-0 flex flex-col items-center md:justify-start md:items-start justify-center h-max ">
                <BaseHeading3
                  text="Education Background"
                  className={
                    "text-xs text-black opacity-60 text-center uppercase font-semibold mb-3 md:mb-5 lg:text-sm"
                  }
                />

                <TimelineAcademy dataSchool={dataSchool} />
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-20 w-full flex flex-col items-center">
            <BaseHeading3
              text="Latest Project"
              className={
                "text-xs text-black opacity-60 text-center uppercase font-semibold mb-3 md:text-start md:w-full"
              }
            />

            <div className="w-full ">
              <div className="md:grid md:grid-cols-2 md:gap-5">
                {dataProjects.map((data, index) => (
                  <CardProjectShort
                    key={index}
                    title={data.title}
                    part={data.type}
                    dateEnd={data.end}
                    dataLink={data.dataLink}
                  />
                ))}
              </div>
            </div>
          </div>
          {dataProjects.length > 1 && (
            <div className="w-full text-center mt-3 mb-10">
              <BaseLink
                text="View All"
                url="/projects"
                className="capitalize text-blue-600 font-semibold text-xs mt-5 text-center w-full"
              />
            </div>
          )}
        </div>
      </BaseLayout>
    </>
  );
}

function Home() {
  const [dataProjects, setDataProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    projectApi
      .getLast()
      .then((res) => {
        setDataProjects(res);
      })
      .catch((error) => {
        setIsError(error.code);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!isLoading && isError == "ERR_NETWORK") return <ErrorServer />;
  return <Content dataProjects={dataProjects} />;
}

Content.propTypes = {
  dataProjects: PropTypes.array.isRequired,
};

export default Home;
