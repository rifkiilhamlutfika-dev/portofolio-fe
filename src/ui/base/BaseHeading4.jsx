import PropTypes from "prop-types";

function BaseHeading4({ text, className }) {
  return (
    <h3 className={`tracking-wide break-words leading-snug ${className}`}>
      {text}
    </h3>
  );
}

BaseHeading4.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BaseHeading4;
