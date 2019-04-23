import React from "react";
import PropsTypes from "prop-types";

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};
Button.propTypes = {
  onClick: PropsTypes.func.isRequired,
  children: PropsTypes.string
};
export default Button;
