import React from "react";
import './FileName.css';
import Tooltip from "@material-ui/core/Tooltip";

const TextTooltip = ({text, title}) => {
  text = text || text === 0 ? text : "";
  return (
    <Tooltip title={text}>
      <div className={`file-name-tooltip`}>{text}</div>
    </Tooltip>
  );
};

export default TextTooltip;
