import { useEffect, useState } from "react";
import "../../assets/css/animation.css";
import BaseLayout from "../layouts/BaseLayout";
import CardAcademy from "../modules/CardAcademy";
import academyApi from "../../api/academyApi";
import PropTypes from "prop-types";
import Loading from "../modules/dataConditions/Loading";
import ErrorServer from "../modules/dataConditions/ErrorServer";
import NoData from "../modules/dataConditions/NoData";

function Content({ dataAcademy = [] }) {
  return (
    <>
      <BaseLayout>
        {dataAcademy.map((data, index) => (
          <CardAcademy dataAcademy={data} key={index} />
        ))}
      </BaseLayout>
    </>
  );
}

function Academy() {
  const [dataAcademy, setDataAcademy] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    academyApi
      .getAll()
      .then((res) => {
        setDataAcademy(res);
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
  if (!isLoading && dataAcademy.length < 1) return <NoData />;
  return <Content dataAcademy={dataAcademy} />;
}

Content.propTypes = {
  dataAcademy: PropTypes.array.isRequired,
};

export default Academy;
