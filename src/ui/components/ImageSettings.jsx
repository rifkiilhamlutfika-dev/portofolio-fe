import PropTypes from "prop-types";

function ImageSettings({ url, circle = false, className }) {
  return (
    <>
      <div
        className={`overflow-hidden ${
          circle ? "rounded-full" : ""
        } ${className}`}
      >
        <img src={url} className="w-full h-full object-cover object-center" />
      </div>
    </>
  );
}

ImageSettings.propTypes = {
  url: PropTypes.string.isRequired,
  circle: PropTypes.bool,
  className: PropTypes.string,
};

export default ImageSettings;
