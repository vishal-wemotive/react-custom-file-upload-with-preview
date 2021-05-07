import React, { useState, useEffect } from 'react'
import './App.css';

import { Container, Grid } from '@material-ui/core';

import Preview from './Components/Preview/Preview';
import Thumbnails from './Components/Thumbnails/Thumbnails';

const mediaUrls= [
  {id: 1, type: 'jpg', url: 'https://source.unsplash.com/5tlbXq1p-Qo/1280x853', thumbnail: ''},
  {id: 2, type: 'png', url: 'https://source.unsplash.com/RoJq6AuMXP8/1280x853', thumbnail:''},
  {id: 3, type: 'mp4', url: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4', thumbnail: ''},
  {id: 4, type: 'pdf', url: 'https://surgeon-dev.s3-accelerate.amazonaws.com/product/c2aeddaa-3354-483b-b2d4-607c8818d89d.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXFYZJE6FEBMN3NLX%2F20210507%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210507T113924Z&X-Amz-Expires=3600&X-Amz-Signature=0eb7fa05bce2d3e14ed760a18c4f6171fa13dfb2a6bada7c44439b6f83b0109e&X-Amz-SignedHeaders=host', thumbnail: ''},
  {id: 5, type: 'jpeg', url: 'https://source.unsplash.com/RoJq6AuMXP8/1280x853', thumbnail: ''}
];

// const mediaUrls= [
//   {id: 1, type: 'jpg', url: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg', thumbnail: ''},
//   {id: 2, type: 'png', url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png', thumbnail:''},
//   {id: 3, type: 'jpeg', url: 'https://surgeon-dev.s3-accelerate.amazonaws.com/product/4c883071-168c-4d90-ac28-552a98c65046.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXFYZJE6FEBMN3NLX%2F20210507%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210507T101233Z&X-Amz-Expires=3600&X-Amz-Signature=e24c9c08f9073b8872e21e4038a06bc30287eca9bc9fad5a7db0dbb9167bd33d&X-Amz-SignedHeaders=host', thumbnail: ''},
//   {id: 4, type: 'jpg', url: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg', thumbnail: ''},
//   {id: 5, type: 'png', url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png', thumbnail:''},
//   {id: 6, type: 'jpeg', url: 'https://surgeon-dev.s3-accelerate.amazonaws.com/product/4c883071-168c-4d90-ac28-552a98c65046.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXFYZJE6FEBMN3NLX%2F20210507%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210507T101233Z&X-Amz-Expires=3600&X-Amz-Signature=e24c9c08f9073b8872e21e4038a06bc30287eca9bc9fad5a7db0dbb9167bd33d&X-Amz-SignedHeaders=host', thumbnail: ''},
//   {id: 7, type: 'jpg', url: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg', thumbnail: ''},
//   {id: 8, type: 'png', url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png', thumbnail:''},
//   {id: 9, type: 'jpeg', url: 'https://surgeon-dev.s3-accelerate.amazonaws.com/product/4c883071-168c-4d90-ac28-552a98c65046.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXFYZJE6FEBMN3NLX%2F20210507%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210507T101233Z&X-Amz-Expires=3600&X-Amz-Signature=e24c9c08f9073b8872e21e4038a06bc30287eca9bc9fad5a7db0dbb9167bd33d&X-Amz-SignedHeaders=host', thumbnail: ''},
//   {id: 10, type: 'jpg', url: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg', thumbnail: ''},
//   {id: 11, type: 'png', url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png', thumbnail:''},
//   {id: 12, type: 'jpeg', url: 'https://surgeon-dev.s3-accelerate.amazonaws.com/product/4c883071-168c-4d90-ac28-552a98c65046.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXFYZJE6FEBMN3NLX%2F20210507%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20210507T101233Z&X-Amz-Expires=3600&X-Amz-Signature=e24c9c08f9073b8872e21e4038a06bc30287eca9bc9fad5a7db0dbb9167bd33d&X-Amz-SignedHeaders=host', thumbnail: ''}
// ];

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

  return (
    <Container maxWidth={false} className="custom-file-upload-with-preview-container">
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="preview-container">
          <Preview totalCount={mediaUrls.length}  media={mediaUrls[page-1]} page={page} handleChange={handleChange}/>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
        <Grid item xs={9} sm={9} md={9} lg={9} xl={9} className="thumbnails-container">
          <Thumbnails mediaUrls={mediaUrls} page={page} handleChange={handleChange} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
