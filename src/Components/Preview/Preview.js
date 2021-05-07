import React from 'react';
import './Preview.css';

import {Typography} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

const Preview = React.memo(({
    media, totalCount, page, handleChange
}) => {

    const documentRenderBasedOnType = (type, fileUrl) => {
        switch(type) {
            case 'jpg':
            case 'png':
            case 'jpeg':
                return <img  className="gallery-media" src={fileUrl} />
                break;
            case 'mp4':
                return (
                    <video className="gallery-media" controls>
                        <source src={fileUrl} type="video/mp4"/>
                    </video>
                )
                break;
            case 'pdf':
                return (
                    <div className="grid-download-icon-label">
                        <div class="download-container">
                            <a href={fileUrl} download>
                                <GetAppRoundedIcon className="download-icon"/>
                                <Typography>Download File</Typography>
                            </a>
                        </div>
                    </div>
                )
                break;
            default:
              // code block
        }
    }

    return (
        <>
                {
                    page!==1
                    ?<ChevronLeftIcon className="left-click-button" onClick={() => handleChange(page-1)}/>
                    :<></>
                }
                
                
                {
                    documentRenderBasedOnType(media.type, media.url)
                }
                {/* <video className="gallery-Image" controls>
                    <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"type="video/mp4"/>
                </video> */}

                {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                    <div style={{ height: '500px',}}>
                    <Viewer fileUrl={Dummy} plugins={[defaultLayoutPluginInstance]} />
                    </div>
                </Worker> */}

                {
                    page < totalCount
                    ?<ChevronRightIcon className="right-click-button" onClick={() => handleChange(page+1)}/>
                    :<></>
                }
                
            
        </>
    )
});

export default Preview;