import PropTypes from "prop-types";

function BaseHeading3({
  text = "",
  truncateWord = 0,
  className,
  children,
  htmlRead = false,
}) {
  const truncateText = (text, maxWord) => {
    const words = text.split(" ");
    if (maxWord == 0 || words.length <= maxWord) return text;
    else return words.slice(0, maxWord).join(" ") + "...";
  };

  if (htmlRead)
    return (
      <h3
        className={`tracking-wide break-words leading-snug ${className}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></h3>
    );
  else
    return (
      <h3 className={`tracking-wide break-words leading-snug ${className}`}>
        {truncateText(text, truncateWord)} {children}
      </h3>
    );
}

BaseHeading3.propTypes = {
  text: PropTypes.string,
  truncateWord: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  htmlRead: PropTypes.bool,
};

export default BaseHeading3;
