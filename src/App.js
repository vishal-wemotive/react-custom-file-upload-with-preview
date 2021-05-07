import React, { useState, useEffect } from 'react'
import './App.css';

import { Container, Grid } from '@material-ui/core';

import Preview from './Components/Preview/Preview';
import Thumbnails from './Components/Thumbnails/Thumbnails';
import FileUpload from './Components/FileUpload/FileUpload';

const mediaUrls= [
  {id: 1, type: 'jpg', url: 'https://source.unsplash.com/5tlbXq1p-Qo/1280x853', thumbnail: ''},
  {id: 2, type: 'png', url: 'https://source.unsplash.com/RoJq6AuMXP8/1280x853', thumbnail:''},
  {id: 3, type: 'mp4', url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', thumbnail: ''},
  {id: 4, type: 'pdf', url: 'https://surgeon-dev.s3-accelerate.amazonaws.com/product/c2aeddaa-3354-483b-b2d4-607c8818d89d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXFYZJE6FEBMN3NLX%2F20210507%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210507T113924Z&X-Amz-Expires=3600&X-Amz-Signature=0eb7fa05bce2d3e14ed760a18c4f6171fa13dfb2a6bada7c44439b6f83b0109e&X-Amz-SignedHeaders=host', thumbnail: ''},
  {id: 5, type: 'jpeg', url: 'https://source.unsplash.com/RoJq6AuMXP8/1280x853', thumbnail: ''},
  {id: 1, type: 'jpg', url: 'https://source.unsplash.com/5tlbXq1p-Qo/1280x853', thumbnail: ''},
  {id: 2, type: 'png', url: 'https://source.unsplash.com/RoJq6AuMXP8/1280x853', thumbnail:''},
  {id: 3, type: 'mp4', url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', thumbnail: ''},
  {id: 4, type: 'pdf', url: 'https://surgeon-dev.s3-accelerate.amazonaws.com/product/c2aeddaa-3354-483b-b2d4-607c8818d89d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXFYZJE6FEBMN3NLX%2F20210507%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210507T113924Z&X-Amz-Expires=3600&X-Amz-Signature=0eb7fa05bce2d3e14ed760a18c4f6171fa13dfb2a6bada7c44439b6f83b0109e&X-Amz-SignedHeaders=host', thumbnail: ''},
  {id: 5, type: 'jpeg', url: 'https://source.unsplash.com/RoJq6AuMXP8/1280x853', thumbnail: ''}
];

function App(props) {

  const [mediaList, setMediaList] = useState(null);
  const [page, setPage] = React.useState(1);
  
  useEffect(() => {
    setMediaList(props.files);
  }, []);

  useEffect(() => {
    setMediaList(props.files);
  }, [props]);

  const handleChange = (value) => {
    setPage(value);
  };

  const onUploadFileList = (files) => {
    console.log("FILES=====>", files);
  }

  return (
    <Container maxWidth={false} className="custom-file-upload-with-preview-container">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="preview-container">
          <Preview totalCount={mediaUrls.length}  media={mediaUrls[page-1]} page={page} handleChange={handleChange}/>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className="file-upload-container">
          <FileUpload
            onUploadFileList={onUploadFileList}
          />
        </Grid>
        <Grid item xs={9} sm={9} md={9} lg={9} xl={9} className="thumbnails-container">
          <Thumbnails mediaUrls={mediaUrls} page={page} handleChange={handleChange} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
