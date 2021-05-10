import React, { useState, useEffect } from 'react';
import './FileUpload.css';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import { AttachFile } from '@material-ui/icons';

const styles = theme => ({
  smallDropzone: {
    minHeight: '100px',
    height: '120px',
    border: 'none',
    width: "120px",
    margin: "auto",
    padding: "10px"
  },
  hideIcon: {
    display: 'none'
  },
  text: {
    margin: '0px !important'
  },
  textContainer: {
    padding: '0px !important'
  }
});

const FileUpload = /*#__PURE__*/React.memo(({
  classes,
  onUploadFileList,
  filesLimit,
  uploadText,
  uploadedFiles
}) => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    if (uploadedFiles) {
      setFiles(uploadedFiles);
    }
  }, [uploadedFiles]);

  const uploadLabelRender = () => {
    return /*#__PURE__*/React.createElement("div", {
      className: "add-file"
    }, /*#__PURE__*/React.createElement("div", {
      className: "content-display-center"
    }, uploadText ? uploadText : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AttachFile, null), " ", /*#__PURE__*/React.createElement("br", null), " Upload")));
  };

  return /*#__PURE__*/React.createElement(DropzoneArea, {
    Icon: AttachFile //   acceptedFiles={[process.env.REACT_APP_BUILD_FILE_SUPPORTED]}
    ,
    showPreviewsInDropzone: false,
    showFileNamesInPreview: false,
    useChipsForPreview: false,
    dropzoneText: uploadLabelRender(),
    showAlerts: ['error'] //   maxFileSize={ALLOWED_ATTACHMENT_SIZE_IN_MB}
    ,
    filesLimit: filesLimit ? filesLimit : 3,
    initialFiles: files,
    onChange: selectedFiles => onUploadFileList(selectedFiles),
    onDelete: () => onUploadFileList([]),
    classes: {
      root: classes.smallDropzone,
      icon: classes.hideIcon,
      text: classes.text,
      textContainer: classes.textContainer
    }
  });
});
export default withStyles(styles)(FileUpload);