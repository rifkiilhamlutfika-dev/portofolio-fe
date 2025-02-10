import PropTypes from "prop-types";

function SectionBoard({
  part,
  className,
  button = false,
  color = true,
  onClick,
}) {
  const style = {
    Frontend:
      "bg-gradient-to-r from-gradient-gradientFe-colorOne from-20% to-gradient-gradientFe-colorSecond to-80% text-white",
    Backend:
      "bg-gradient-to-r from-gradient-gradientBe-colorOne from-20% to-gradient-gradientBe-colorSecond to-80% text-white",
    Design:
      "bg-gradient-to-r from-gradient-gradientDs-colorOne from-20% to-gradient-gradientDs-colorSecond to-80% text-white ",
  };

  const ElementType = button ? "button" : "p"; //first variabel alphabet with Big

  return (
    <ElementType
      className={`w-max px-2 py-1 font-medium text-[0.55rem] rounded-[0.200rem] shadow-md ${
        color ? style[part] : ""
      } ${className}`}
      onClick={onClick}
    >
      {part}
    </ElementType>
  );
}

SectionBoard.propTypes = {
  part: PropTypes.oneOf(["Frontend", "Backend", "Design", "All"]),
  className: PropTypes.string,
  button: PropTypes.bool,
  color: PropTypes.bool,
  onClick: PropTypes.func,
};

export default SectionBoard;
