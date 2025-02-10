import PropTypes from "prop-types";

function YoutubeSettings({ codeUrlVideo }) {
  return (
    <>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${codeUrlVideo}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}

YoutubeSettings.propTypes = {
  codeUrlVideo: PropTypes.string.isRequired,
};

export default YoutubeSettings;
