function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect } from 'react';
import './Main.css';
import { Container, Grid, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import Preview from '../Preview/Preview';
import Thumbnails from '../Thumbnails/Thumbnails';
import FileUpload from '../FileUpload/FileUpload';

function Alert(props) {
  return /*#__PURE__*/React.createElement(MuiAlert, _extends({
    elevation: 6,
    variant: "filled"
  }, props));
}

function Main(props) {
  const [mediaList, setMediaList] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState(null);
  const [page, setPage] = useState(1);
  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: 'error',
    message: ''
  });
  useEffect(() => {
    setMediaList(props.files ? props.files : []);
  }, []);
  useEffect(() => {
    setMediaList(props.files ? props.files : []);
  }, [props]);
  useEffect(() => {
    if (uploadedFiles && uploadedFiles.length > 0) {
      let previewMedia = mediaList.filter(media => !media.status && media.status !== 'uploaded');
      setMediaList(previewMedia.concat(uploadedFiles));
    }
  }, [uploadedFiles]);

  const handleChange = value => {
    setPage(value);
  };

  const onUploadFileList = files => {
    if (props.onUploadFile) {
      let fileList = [];
      var bar = new Promise((resolve, reject) => {
        files.forEach((file, index) => {
          let obj = Object.assign({}, file);
          let fileName = file.name;
          obj = {
            id: "rcfup-" + index,
            fileName: fileName,
            type: fileName.split('.').pop(),
            thumbnail: '',
            status: 'uploaded'
          };
          let reader = new FileReader();

          reader.onload = function (e) {
            obj.url = e.target.result;
            fileList.push(obj);
            if (index === files.length - 1) resolve();
          };

          reader.readAsDataURL(file);
        });
      });
      bar.then(() => {
        setUploadedFiles(fileList);
        props.onUploadFile(fileList);
      });
    } else {
      showSnackbar('error', 'onUploadFile function required for upload file.');
    }
  };

  const onDeleteFile = (event, file) => {
    event.stopPropagation();

    if (file.status) {
      let medias = mediaList.filter(media => media.id !== file.id);
      let mediasUploaded = uploadedFiles.filter(media => media.id !== file.id);
      setMediaList(medias);
      setUploadedFiles(mediasUploaded);

      if (page > 1) {
        setPage(page - 1);
      }
    } else {
      if (props.onDelete) {
        props.onDelete(file);
      } else {
        showSnackbar('error', 'onDelete function required for delete file.');
      }
    }
  };

  const showSnackbar = (severity, message) => {
    setSnackbar({
      open: true,
      severity: severity,
      message: message
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      open: false,
      severity: 'error',
      message: ''
    });
  };

  return /*#__PURE__*/React.createElement(Container, {
    maxWidth: false,
    className: "custom-file-upload-with-preview-container"
  }, /*#__PURE__*/React.createElement(Grid, {
    container: true,
    spacing: 0
  }, mediaList && mediaList.length > 0 && /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12,
    className: "preview-container"
  }, /*#__PURE__*/React.createElement(Preview, {
    totalCount: mediaList.length,
    media: mediaList[page - 1],
    page: page,
    handleChange: handleChange
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 3,
    sm: 3,
    md: 3,
    lg: 3,
    xl: 3,
    className: "file-upload-container"
  }, props.isUpload && /*#__PURE__*/React.createElement(FileUpload, {
    onUploadFileList: onUploadFileList,
    filesLimit: props.filesLimit,
    uploadText: props.uploadText,
    uploadedFiles: uploadedFiles
  })), /*#__PURE__*/React.createElement(Grid, {
    item: true,
    xs: 9,
    sm: 9,
    md: 9,
    lg: 9,
    xl: 9,
    className: "thumbnails-container"
  }, mediaList && mediaList.length > 0 && /*#__PURE__*/React.createElement(Thumbnails, {
    mediaUrls: mediaList,
    page: page,
    handleChange: handleChange,
    isDelete: props.isDelete,
    onDeleteFile: onDeleteFile
  }))), /*#__PURE__*/React.createElement(Snackbar, {
    open: snackbar.open,
    autoHideDuration: 6000,
    onClose: handleCloseSnackbar
  }, /*#__PURE__*/React.createElement(Alert, {
    onClose: handleCloseSnackbar,
    severity: snackbar.severity
  }, snackbar.message)));
}

export default Main;