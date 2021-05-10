import React from 'react';
import './Thumbnails.css';
import { Tooltip } from '@material-ui/core';
import { Pagination, PaginationItem } from '@material-ui/lab';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';
import FileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import TextTooltip from '../FileName/FileName';
const Thumbnails = /*#__PURE__*/React.memo(({
  mediaUrls,
  page,
  handleChange,
  isDelete,
  onDeleteFile
}) => {
  const thumbnailRenderBasedOnType = (media, itemPage) => {
    switch (media.type) {
      case 'jpg':
      case 'png':
      case 'jpeg':
        return /*#__PURE__*/React.createElement("div", {
          onClick: () => handleChange(itemPage)
        }, /*#__PURE__*/React.createElement("div", {
          className: `thumbnail-item ${itemPage === page ? "selected-item" : ""}`
        }, isDelete && /*#__PURE__*/React.createElement(Tooltip, {
          title: "Delete"
        }, /*#__PURE__*/React.createElement(CancelRoundedIcon, {
          className: "remove-image-icon",
          onClick: event => onDeleteFile(event, media)
        })), /*#__PURE__*/React.createElement("img", {
          src: media.url,
          alt: "image",
          className: "image-thumbnail"
        })), /*#__PURE__*/React.createElement(TextTooltip, {
          text: media.fileName
        }));
        break;

      case 'mp4':
        return /*#__PURE__*/React.createElement("div", {
          onClick: () => handleChange(itemPage)
        }, /*#__PURE__*/React.createElement("div", {
          className: `text-align-center thumbnail-item ${itemPage === page ? "selected-item" : ""}`
        }, isDelete && /*#__PURE__*/React.createElement(Tooltip, {
          title: "Delete"
        }, /*#__PURE__*/React.createElement(CancelRoundedIcon, {
          className: "remove-image-icon",
          onClick: event => onDeleteFile(event, media)
        })), /*#__PURE__*/React.createElement(VideoLibraryRoundedIcon, {
          className: "video-thumbnail"
        })), /*#__PURE__*/React.createElement(TextTooltip, {
          text: media.fileName
        }));
        break;

      case 'pdf':
        return /*#__PURE__*/React.createElement("div", {
          onClick: () => handleChange(itemPage)
        }, /*#__PURE__*/React.createElement("div", {
          className: `text-align-center thumbnail-item ${itemPage === page ? "selected-item" : ""}`
        }, isDelete && /*#__PURE__*/React.createElement(Tooltip, {
          title: "Delete"
        }, /*#__PURE__*/React.createElement(CancelRoundedIcon, {
          className: "remove-image-icon",
          onClick: event => onDeleteFile(event, media)
        })), /*#__PURE__*/React.createElement(PictureAsPdfRoundedIcon, {
          className: "pdf-thumbnail"
        })), /*#__PURE__*/React.createElement(TextTooltip, {
          text: media.fileName
        }));
        break;

      default:
        return /*#__PURE__*/React.createElement("div", {
          onClick: () => handleChange(itemPage)
        }, /*#__PURE__*/React.createElement("div", {
          className: `text-align-center thumbnail-item ${itemPage === page ? "selected-item" : ""}`
        }, isDelete && /*#__PURE__*/React.createElement(Tooltip, {
          title: "Delete"
        }, /*#__PURE__*/React.createElement(CancelRoundedIcon, {
          className: "remove-image-icon",
          onClick: event => onDeleteFile(event, media)
        })), /*#__PURE__*/React.createElement(FileRoundedIcon, {
          className: "pdf-thumbnail"
        })), /*#__PURE__*/React.createElement(TextTooltip, {
          text: media.fileName
        }));
        break;
      // code block
    }
  };

  return /*#__PURE__*/React.createElement(Pagination, {
    count: mediaUrls.length,
    page: page,
    onChange: (event, page) => handleChange(page),
    renderItem: item => {
      if (item.type === "page") {
        const mediaIndex = item.page - 1;
        const media = mediaUrls[mediaIndex];
        return /*#__PURE__*/React.createElement(PaginationItem, {
          component: () => {
            return thumbnailRenderBasedOnType(media, item.page);
          }
        });
      } else if (item.type === "next") {
        return /*#__PURE__*/React.createElement(PaginationItem, {
          component: () => {
            if (mediaUrls.length + 1 === item.page) {
              return /*#__PURE__*/React.createElement(PlayArrowRoundedIcon, {
                className: "next-icon thumbnail-disable"
              });
            } else {
              return /*#__PURE__*/React.createElement(PlayArrowRoundedIcon, {
                className: "next-icon",
                onClick: () => handleChange(item.page)
              });
            }
          }
        });
      } else if (item.type === "previous") {
        return /*#__PURE__*/React.createElement(PaginationItem, {
          component: () => {
            if (item.page === 0) {
              return /*#__PURE__*/React.createElement(PlayArrowRoundedIcon, {
                className: "previous-icon thumbnail-disable"
              });
            } else {
              return /*#__PURE__*/React.createElement(PlayArrowRoundedIcon, {
                className: "previous-icon",
                onClick: () => handleChange(item.page)
              });
            }
          }
        });
      } else {
        return /*#__PURE__*/React.createElement(PaginationItem, item);
      }
    }
  });
});
export default Thumbnails;