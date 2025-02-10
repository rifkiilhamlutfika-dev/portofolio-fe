import PropTypes from "prop-types";

function DetailImagePopUp({ url, onClose }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-gray-400 bg-opacity-70 flex justify-center items-center z-50 pt-24 lg:pt-0"
        onClick={onClose}
      >
        <div>
          <img
            src={url}
            alt={`image ${url}`}
            className="max-w-[70vw] max-h-[70vh]"
          />
        </div>
      </div>
    </>
  );
}

DetailImagePopUp.propTypes = {
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailImagePopUp;
