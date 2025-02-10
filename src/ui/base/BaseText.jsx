import PropTypes from "prop-types";

function BaseText({
  text = "",
  truncateWord = 0,
  className,
  children,
  htmlRead = false,
}) {
  const truncateText = (text, maxWord) => {
    const words = text.split(" ");
    if (maxWord == 0) return text;
    else return words.slice(0, maxWord).join(" ") + "...";
  };

  if (htmlRead)
    return (
      <p
        className={`text-xs md:text-sm ${className}`}
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    );
  else
    return (
      <p className={`text-xs md:text-sm ${className}`}>
        {truncateText(text, truncateWord)} {children}
      </p>
    );
}

BaseText.propTypes = {
  text: PropTypes.string,
  truncateWord: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
  htmlRead: PropTypes.bool,
};

export default BaseText;
