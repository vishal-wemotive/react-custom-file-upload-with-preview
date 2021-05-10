import React from "react";
import './FileName.css';
import Tooltip from "@material-ui/core/Tooltip";

const TextTooltip = ({
  text,
  title
}) => {
  text = text || text === 0 ? text : "";
  return /*#__PURE__*/React.createElement(Tooltip, {
    title: text
  }, /*#__PURE__*/React.createElement("div", {
    className: `file-name-tooltip`
  }, text));
};

export default TextTooltip;