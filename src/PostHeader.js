import React from "react";
import PropsTypes from "prop-types";

const PostHeader = props => <div onClick={props.onClick}>{props.children}</div>;
