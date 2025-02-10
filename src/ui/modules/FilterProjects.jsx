import PropTypes from "prop-types";
import SectionBoard from "../components/SectionBoard";
import { useEffect, useState } from "react";

function FilterProjects({ filterNow, className }) {
  const [dataClicked, setDataClicked] = useState("");

  useEffect(() => {
    setDataClicked("All");
    filterNow("All");
  }, []);

  const sendChanges = (data) => {
    setDataClicked(data);
    filterNow(data);
  };

  return (
    <>
      <div
        className={`flex space-x-2 items-center uppercase font-medium w-full ${className}`}
      >
        <SectionBoard
          button={true}
          part="All"
          color={false}
          className={`px-2 py-1 rounded-[0.380rem] text-xs  ${
            dataClicked == "All" ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={() => sendChanges("All")}
        />
        <SectionBoard
          button={true}
          part="Frontend"
          color={dataClicked == "Frontend" ? true : false}
          className={`px-2 py-1 rounded-[0.380rem] text-xs  ${
            dataClicked == "Frontend" ? "" : "bg-gray-300"
          }`}
          onClick={() => sendChanges("Frontend")}
        />
        <SectionBoard
          button={true}
          part="Backend"
          color={dataClicked == "Backend" ? true : false}
          className={`px-2 py-1 rounded-[0.380rem] text-xs  ${
            dataClicked == "Backend" ? "" : "bg-gray-300"
          }`}
          onClick={() => sendChanges("Backend")}
        />
        <SectionBoard
          button={true}
          part="Design"
          color={dataClicked == "Design" ? true : false}
          className={`px-2 py-1 rounded-[0.380rem] text-xs  ${
            dataClicked == "Design" ? "" : "bg-gray-300"
          }`}
          onClick={() => sendChanges("Design")}
        />
      </div>
    </>
  );
}

FilterProjects.propTypes = {
  filterNow: PropTypes.func,
  className: PropTypes.string,
};

export default FilterProjects;
