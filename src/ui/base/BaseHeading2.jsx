import PropTypes from "prop-types";

function BaseHeading2({ text, className }) {
  return (
    <h2
      className={`tracking-wide break-words font-extrabold leading-snug ${className}`}
    >
      {text}
    </h2>
  );
}

BaseHeading2.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BaseHeading2;
