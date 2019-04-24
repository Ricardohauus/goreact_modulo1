import React from "react";
import PropsTypes from "prop-types";

const Header = props => <div className="header">{props.children}</div>;

Header.defaultProps = {
  children: "RocketBook"
};
Header.propTypes = {
  children: PropsTypes.string
};
export default Header;
