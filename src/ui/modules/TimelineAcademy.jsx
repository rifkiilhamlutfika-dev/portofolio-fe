import PropTypes from "prop-types";
import BaseHeading3 from "../base/BaseHeading3";
import BaseHeading4 from "../base/BaseHeading4";

function TimelineAcademy({ dataSchool }) {
  return (
    <>
      <div className="ml-16 md:ml-0 border-l-2 border-gray-400 border-opacity-40 relative">
        {dataSchool.map((data, index) => (
          <div className="mb-5 relative" key={index}>
            <div
              className={`w-3 h-3 xl:w-4 xl:h-4 rounded-full  absolute -left-[0.45rem] xl:-left-[0.5rem] top-1 ${
                data.status
                  ? "outline-dotted outline-green-600"
                  : "bg-slate-400"
              }`}
            >
              {data.status ? (
                <>
                  <div className="w-3 h-3 xl:w-4 xl:h-4 rounded-full bg-green-600 scale-75"></div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="ml-4 text-blue-950">
              <BaseHeading3
                text={data.yearsGraduate}
                className={"text-sm font-semibold uppercase xl:text-lg"}
              />

              <BaseHeading4
                text={data.schoolName}
                className={"font-bold text-xs uppercase xl:text-sm"}
              />

              <BaseHeading3
                text={data.mayor}
                className={"font-semibold text-xs xl:text-sm"}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

TimelineAcademy.propTypes = {
  dataSchool: PropTypes.arrayOf(
    PropTypes.shape({
      yearsGraduate: PropTypes.string,
      schoolName: PropTypes.string,
      mayor: PropTypes.string,
      status: PropTypes.bool,
    })
  ),
};

export default TimelineAcademy;
