import PropTypes from "prop-types";

function BaseLayout({ children }) {
  return (
    <>
      <div className="pt-5 px-3 md:px-10">
        <main>{children}</main>
      </div>
    </>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
