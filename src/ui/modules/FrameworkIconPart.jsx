import PropTypes from "prop-types";
import reactIcon from "../../assets/icons/react-js.png";
import vueIcon from "../../assets/icons/vue-js.png";
import tailwindIcon from "../../assets/icons/tailwind-css.png";
import bootstrapIcon from "../../assets/icons/bootstrap-5.png";
import expressIcon from "../../assets/icons/express-js.png";
import nodeIcon from "../../assets/icons/node-js.png";
import figmaIcon from "../../assets/icons/figma.png";
import ButtonLink from "../components/ButtonLink";

const icon_valid = {
  react: { src: reactIcon, link: "https://react.dev/" },
  vue: { src: vueIcon, link: "https://vuejs.org/" },
  tailwind: { src: tailwindIcon, link: "https://tailwindcss.com/" },
  bootstrap: { src: bootstrapIcon, link: "https://getbootstrap.com/" },
  express: { src: expressIcon, link: "https://expressjs.com/" },
  node: { src: nodeIcon, link: "https://nodejs.org/en" },
  figma: { src: figmaIcon, link: "https://www.figma.com/" },
};

const allItem = Object.values(icon_valid);
function FrameworkIconPart({ icons, grid = false }) {
  if (icons.length < 1) return null;

  return (
    <>
      <div
        className={`${
          grid ? "grid grid-cols-5 gap-2 " : "flex gap-2"
        } pt-2 md:flex`}
      >
        {icons[0] == "all"
          ? allItem.map((data, index) => {
              return (
                <ButtonLink
                  className={"w-5 h-5 overflow-hidden"}
                  key={index}
                  link={data.link}
                  blank
                >
                  <img
                    src={data.src}
                    alt={data.src}
                    className="w-full h-full object-cover object-center"
                  />
                </ButtonLink>
              );
            })
          : icons.map((iconProp, index) => {
              const icon = icon_valid[iconProp];
              return (
                <ButtonLink
                  className={"w-5 h-5 overflow-hidden"}
                  key={index}
                  link={icon.link}
                  blank
                >
                  <img
                    src={icon.src}
                    alt={icon.src}
                    className="w-full h-full object-cover object-center"
                  />
                </ButtonLink>
              );
            })}
      </div>
    </>
  );
}

FrameworkIconPart.propTypes = {
  icons: PropTypes.arrayOf(PropTypes.node).isRequired,
  grid: PropTypes.bool,
};

export default FrameworkIconPart;
