import React from 'react';
import './Preview.css';

import {Typography, Tooltip} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRightRounded';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';

import DownloadIcon from '@material-ui/icons/GetAppRounded';

const Preview = React.memo(({
    media, totalCount, page, handleChange
}) => {

    const documentRenderBasedOnType = (type, fileUrl) => {
        switch(type) {
            case 'jpg':
            case 'png':
            case 'jpeg':
                return (
                    <div className="gallery-media-container">
                        <img className="gallery-media" src={fileUrl} />
                        <Tooltip title="Download">
                            <a href={fileUrl} download>
                                <DownloadIcon className="download-image-file-icon" />
                            </a>
                        </Tooltip>
                    </div>
                )
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