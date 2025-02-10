import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import ButtonLink from "../components/ButtonLink";
import PropTypes from "prop-types";

function SocialMediaPart({ className }) {
  return (
    <>
      <div className={`flex space-x-3 ${className}`}>
        <ButtonLink
          className={"w-5 h-5 overflow-hidden"}
          link="https://github.com/rifkiilhamlutfika-dev"
          blank
        >
          <FaGithub className="w-full h-full" />
        </ButtonLink>
        <ButtonLink
          className={"w-5 h-5 overflow-hidden"}
          link="www.linkedin.com/in/rifki-ilham-lutfika-6353aa350"
          blank
        >
          <FaLinkedinIn className="w-full h-full" />
        </ButtonLink>
        <ButtonLink
          className={"w-5 h-5 overflow-hidden"}
          link="https://mail.google.com/mail/?view=cm&to=rilkayt@gmail.com"
          blank
        >
          <CgMail className="w-full h-full" />
        </ButtonLink>
        <ButtonLink
          className={"w-5 h-5 overflow-hidden"}
          link="http://wa.me/6285117225271"
          blank
        >
          <FaWhatsapp className="w-full h-full" />
        </ButtonLink>
        <ButtonLink
          className={"w-5 h-5 overflow-hidden"}
          link="https://www.instagram.com/rilka_yt/?hl=id"
          blank
        >
          <FaInstagram className="w-full h-full" />
        </ButtonLink>
      </div>
    </>
  );
}

SocialMediaPart.propTypes = {
  className: PropTypes.string,
};

export default SocialMediaPart;
