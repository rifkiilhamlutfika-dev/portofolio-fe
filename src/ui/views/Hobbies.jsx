import { useEffect, useState } from "react";
import BaseHeading3 from "../base/BaseHeading3";
import BaseText from "../base/BaseText";
import BaseLayout from "../layouts/BaseLayout";
import YoutubeSettings from "../modules/YoutubeSettings";
import videosApi from "../../api/videosApi";
import PropTypes from "prop-types";
import Loading from "../modules/dataConditions/Loading";
import ErrorServer from "../modules/dataConditions/ErrorServer";
import NoData from "../modules/dataConditions/NoData";

function Content({ dataVideos = [] }) {
  return (
    <>
      <BaseLayout>
        <BaseHeading3 className={"text-sm font-semibold"}>
          Hi, I am also a <br />
          <span className="text-lg font-bold">Videographer & Video Editor</span>
        </BaseHeading3>

        <hr className="my-3" />

        <BaseText className={"text-gray-700 mb-4 text-justify text-sm"}>
          Hi, I’m Rifki Ilham Lutfika, Aside from being an app developer, I have
          a deep passion for creating and editing videos. <br /> <br /> I even
          enjoy making short movies to upload on Instagram. This hobby started
          back in elementary school and has remained a big part of my life. Most
          of the time, I create videos just for fun or to entertain myself.
          <br />
          <br /> Does this hobby affect my ability to learn and build websites
          or apps? Absolutely not! In fact, it helps me unwind and stay
          motivated during coding sessions.
          <br />
          <br />
          If you’re interested in collaborating with me on video projects, feel
          free to check out my Instagram at
          <a
            href="https://www.instagram.com/rilka_yt"
            target="_blank"
            className="text-blue-500 hover:underline pl-1"
          >
            @rilka_yt
          </a>
        </BaseText>

        <hr className="my-3" />
        <BaseHeading3
          text="Showcase"
          className={"text-sm font-semibold opacity-60 mb-5"}
        />

        <div className="md:grid md:grid-cols-2 md:gap-2 xl:grid-cols-3">
          {dataVideos.map((data, index) => (
            <div className="w-full h-56 rounded-lg" key={index}>
              <YoutubeSettings codeUrlVideo={data} />
            </div>
          ))}
        </div>
      </BaseLayout>
    </>
  );
}

function Hobbies() {
  const [dataVideos, setDataVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);

    videosApi
      .getAll()
      .then((res) => {
        setDataVideos(res);
      })
      .catch((error) => {
        setIsError(error.code);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <Loading />;
  if (!isLoading && isError == "ERR_NETWORK") return <ErrorServer />;
  if (!isLoading && dataVideos.length < 1) return <NoData />;
  return <Content dataVideos={dataVideos} />;
}

Content.propTypes = {
  dataVideos: PropTypes.array.isRequired,
};

export default Hobbies;
