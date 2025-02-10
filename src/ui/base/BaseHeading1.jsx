import PropTypes from "prop-types";

function BaseHeading1({ text, className }) {
  return (
    <h1 className={`tracking-wide break-words leading-snug ${className}`}>
      {text}
    </h1>
  );
}

BaseHeading1.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BaseHeading1;
