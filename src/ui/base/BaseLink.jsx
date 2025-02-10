import PropTypes from "prop-types";

function BaseLink({ text, url, blank = false, className = "" }) {
  return (
    <>
      <a href={url} className={className} target={blank ? "_blank" : ""}>
        {text}
      </a>
    </>
  );
}

BaseLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  blank: PropTypes.bool,
  className: PropTypes.string,
};

export default BaseLink;
