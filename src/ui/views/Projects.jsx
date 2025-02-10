import BaseLayout from "../layouts/BaseLayout";
import FilterProjects from "../modules/FilterProjects";
import { useEffect, useState } from "react";
import CardProject from "../modules/CardProject";
import projectApi from "../../api/projectApi";
import PropTypes from "prop-types";
import Loading from "../modules/dataConditions/Loading";
import ErrorServer from "../modules/dataConditions/ErrorServer";
import NoData from "../modules/dataConditions/NoData";
import BaseButton from "../base/BaseButton";

function Content({ dataProjects = [], totalData = 0, loadData }) {
  return (
    <>
      <BaseLayout>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {dataProjects.map((data, index) => (
            <CardProject
              key={index}
              title={data.title}
              img={data.image}
              part={data.type}
              dateEnd={data.end}
              dataLink={data.dataLink}
            />
          ))}
        </div>
        {dataProjects.length < totalData && (
          <div className="w-full flex justify-center py-3">
            <BaseButton
              onClick={loadData}
              className={"font-semibold text-gray-800 capitalize "}
            >
              See More
            </BaseButton>
          </div>
        )}
      </BaseLayout>
    </>
  );
}

function FilterView({ getDataFilter }) {
  return (
    <>
      <BaseLayout>
        <FilterProjects className={"my-4"} filterNow={getDataFilter} />
      </BaseLayout>
    </>
  );
}

function Projects() {
  const [dataProjects, setDataProjects] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [filterChanges, setFilterChanges] = useState("All");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    setPage(1);
    setDataProjects([]);
  }, [filterChanges]);

  useEffect(() => {
    setIsLoading(true);
    const getData =
      filterChanges === "All"
        ? projectApi.getProject(page, limit)
        : projectApi.getByType(filterChanges, page, limit);

    getData
      .then((res) => {
        setDataProjects((prev) => [...res.list, ...prev]);
        setTotalData(res.meta.total);
      })
      .catch((error) => {
        setIsError(error.code);
        console.error(error.code);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [filterChanges, page]);

  const getDataFilter = (data) => {
    setFilterChanges(data);
  };

  const loadData = () => setPage((prev) => prev + 1);

  if (isLoading) {
    return (
      <>
        <FilterView getDataFilter={getDataFilter} />
        <Loading />
      </>
    );
  }

  if (!isLoading && isError == "ERR_NETWORK") {
    return (
      <>
        <FilterView getDataFilter={getDataFilter} />
        <ErrorServer />
      </>
    );
  }

  if (!isLoading && dataProjects.length < 1) {
    return (
      <>
        <FilterView getDataFilter={getDataFilter} />
        <NoData />
      </>
    );
  }

  return (
    <>
      <FilterView getDataFilter={getDataFilter} />
      <Content
        dataProjects={dataProjects}
        totalData={totalData}
        loadData={loadData}
      />
    </>
  );
}

Content.propTypes = {
  dataProjects: PropTypes.array.isRequired,
  totalData: PropTypes.number,
  loadData: PropTypes.func,
};

FilterView.propTypes = {
  getDataFilter: PropTypes.func.isRequired,
};

export default Projects;
