import React from 'react';
import './Thumbnails.css';
import {Tooltip} from '@material-ui/core';
import {Pagination, PaginationItem} from '@material-ui/lab';

import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';
import FileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

import TextTooltip from '../FileName/FileName';

const Thumbnails = React.memo(({
    mediaUrls, page, handleChange, isDelete, onDeleteFile
}) => {
    
    const thumbnailRenderBasedOnType = (media, itemPage) => {
        switch(media.type) {
            case 'jpg':
            case 'png':
            case 'jpeg':
                return (
                    <div onClick={() => handleChange(itemPage)}>
                        <div className={`thumbnail-item ${itemPage === page?"selected-item":""}`}>
                            {isDelete && <Tooltip title="Delete"><CancelRoundedIcon className="remove-image-icon" onClick={(event) => onDeleteFile(event, media)}/></Tooltip>}
                            <img src={media.url} alt="image" className="image-thumbnail" />
                        </div>
                        <TextTooltip text={media.fileName} />
                    </div>
                )
                break;
            case 'mp4':
                return (
                    <div onClick={() => handleChange(itemPage)}>
                        <div className={`text-align-center thumbnail-item ${itemPage === page?"selected-item":""}`}>
                            {isDelete && <Tooltip title="Delete"><CancelRoundedIcon className="remove-image-icon" onClick={(event) => onDeleteFile(event, media)}/></Tooltip>}
                            <VideoLibraryRoundedIcon className="video-thumbnail" />
                        </div>
                        <TextTooltip text={media.fileName} />
                    </div>
                )
                break;
            case 'pdf':
                return (
                    <div onClick={() => handleChange(itemPage)}>
                        <div className={`text-align-center thumbnail-item ${itemPage === page?"selected-item":""}`}>
                            {isDelete && <Tooltip title="Delete"><CancelRoundedIcon className="remove-image-icon" onClick={(event) => onDeleteFile(event, media)}/></Tooltip>}
                            <PictureAsPdfRoundedIcon className="pdf-thumbnail" />
                        </div>
                        <TextTooltip text={media.fileName} />
                    </div>
                )
                break;
            default:
                return (
                    <div onClick={() => handleChange(itemPage)}>
                        <div className={`text-align-center thumbnail-item ${itemPage === page?"selected-item":""}`}>
                            {isDelete && <Tooltip title="Delete"><CancelRoundedIcon className="remove-image-icon" onClick={(event) => onDeleteFile(event, media)}/></Tooltip>}
                            <FileRoundedIcon className="pdf-thumbnail" />
                        </div>
                        <TextTooltip text={media.fileName} />
                    </div>
                )
                break;
              // code block
        }
    }

    return (
        <Pagination 
            count={mediaUrls.length}
            page={page} 
            onChange={(event, page) => handleChange(page)}
            renderItem={(item) => {
                if(item.type === "page"){
                    const mediaIndex = item.page - 1;
                    const media = mediaUrls[mediaIndex];
                    return (
                        <PaginationItem
                            component={() => {
                                return thumbnailRenderBasedOnType(media, item.page);
                            }}
                        />
                    )
                }else if(item.type === "next"){
                    return (
                        <PaginationItem
                            component={() => {
                                if((mediaUrls.length+1) === item.page){
                                    return <PlayArrowRoundedIcon className="next-icon thumbnail-disable"/>
                                }else{
                                    return <PlayArrowRoundedIcon className="next-icon" onClick={() => handleChange(item.page)}/>
                                }
                            }}
                        />
                    )
                }else if(item.type === "previous"){
                    return (
                        <PaginationItem
                            component={() => {
                                if(item.page === 0){
                                    return <PlayArrowRoundedIcon className="previous-icon thumbnail-disable" />
                                }else{
                                    return <PlayArrowRoundedIcon className="previous-icon" onClick={() => handleChange(item.page)}/>
                                }
                            }}
                        />
                    )
                }else{
                    return (
                        <PaginationItem
                            {...item}
                        />
                    )
                }
            }}
        />
    )

});

export default Thumbnails;