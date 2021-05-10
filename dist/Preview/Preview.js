import React from 'react';
import './Preview.css';
import { Typography, Tooltip } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import DownloadIcon from '@material-ui/icons/GetAppRounded';
const Preview = /*#__PURE__*/React.memo(({
  media,
  totalCount,
  page,
  handleChange
}) => {
  const documentRenderBasedOnType = (type, fileUrl) => {
    switch (type) {
      case 'jpg':
      case 'png':
      case 'jpeg':
        return /*#__PURE__*/React.createElement("div", {
          className: "gallery-media-container"
        }, /*#__PURE__*/React.createElement("img", {
          className: "gallery-media",
          src: fileUrl
        }), /*#__PURE__*/React.createElement(Tooltip, {
          title: "Download"
        }, /*#__PURE__*/React.createElement("a", {
          href: fileUrl,
          download: true
        }, /*#__PURE__*/React.createElement(DownloadIcon, {
          className: "download-image-file-icon"
        }))));
        break;

      case 'mp4':
        return /*#__PURE__*/React.createElement("video", {
          className: "gallery-media",
          controls: true
        }, /*#__PURE__*/React.createElement("source", {
          src: fileUrl,
          type: "video/mp4"
        }));
        break;

      case 'pdf':
        return /*#__PURE__*/React.createElement("div", {
          className: "grid-download-icon-label"
        }, /*#__PURE__*/React.createElement("div", {
          class: "download-container"
        }, /*#__PURE__*/React.createElement("a", {
          href: fileUrl,
          download: true
        }, /*#__PURE__*/React.createElement(GetAppRoundedIcon, {
          className: "download-icon"
        }), /*#__PURE__*/React.createElement(Typography, null, "Download File"))));
        break;

      default:
        return /*#__PURE__*/React.createElement("div", {
          className: "grid-download-icon-label"
        }, /*#__PURE__*/React.createElement("div", {
          class: "download-container"
        }, /*#__PURE__*/React.createElement("a", {
          href: fileUrl,
          download: true
        }, /*#__PURE__*/React.createElement(GetAppRoundedIcon, {
          className: "download-icon"
        }), /*#__PURE__*/React.createElement(Typography, null, "Download File"))));
        break;
      // code block
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, page !== 1 ? /*#__PURE__*/React.createElement(ChevronLeftIcon, {
    className: "left-click-button",
    onClick: () => handleChange(page - 1)
  }) : /*#__PURE__*/React.createElement(React.Fragment, null), documentRenderBasedOnType(media.type, media.url), page < totalCount ? /*#__PURE__*/React.createElement(ChevronRightIcon, {
    className: "right-click-button",
    onClick: () => handleChange(page + 1)
  }) : /*#__PURE__*/React.createElement(React.Fragment, null));
});
export default Preview;