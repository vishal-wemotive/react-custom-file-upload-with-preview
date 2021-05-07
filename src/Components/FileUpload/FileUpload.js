import React, { useState, useEffect } from 'react'
import './FileUpload.css';
import {withStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import {DropzoneArea} from 'material-ui-dropzone'
import {AttachFile} from '@material-ui/icons';

const styles = theme => ({
    smallDropzone: {
      minHeight: '100px',
      height: '120px',
      border: 'none',
      width: "120px",
      margin: "auto",
      padding: "10px",
    },
    hideIcon: {
      display: 'none'
    },
    text: {
      margin: '0px !important',
    },
    textContainer: {
      padding: '0px !important',
    }
});

const FileUpload = React.memo(({
    classes, onUploadFileList
}) => {

    return (
        <DropzoneArea
          Icon={AttachFile}
        //   acceptedFiles={[process.env.REACT_APP_BUILD_FILE_SUPPORTED]}
          showPreviewsInDropzone={false}
          showFileNamesInPreview={false}
          useChipsForPreview={false}
          dropzoneText={<div className="add-file"><div className="content-display-center"><AttachFile /> <br /> Add File</div></div>}
          showAlerts={['error']}
        //   maxFileSize={ALLOWED_ATTACHMENT_SIZE_IN_MB}
        //   filesLimit={CONCURRENT_FILE_UPLOAD_LIMIT}
        //   initialFiles={files}
          onChange={selectedFiles => onUploadFileList(selectedFiles)}
          onDelete={() => onUploadFileList([])}
          classes={{
            root: classes.smallDropzone,
            icon: classes.hideIcon,
            text: classes.text,
            textContainer: classes.textContainer
          }}
        />
    )

});

export default withStyles(styles)(FileUpload);