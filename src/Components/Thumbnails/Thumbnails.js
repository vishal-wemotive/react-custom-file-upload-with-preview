import React from 'react';
import './Thumbnails.css';
import {Pagination, PaginationItem} from '@material-ui/lab';

import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';

const Thumbnails = React.memo(({
    mediaUrls, page, handleChange
}) => {
    
    const thumbnailRenderBasedOnType = (type, fileUrl, itemPage) => {
        switch(type) {
            case 'jpg':
            case 'png':
            case 'jpeg':
                return <img src={fileUrl} alt="image" className={`thumbnail-item ${itemPage === page?"selected-item":""}`} onClick={() => handleChange(itemPage)} />
                break;
            case 'mp4':
                return <div className={`text-align-center thumbnail-item ${itemPage === page?"selected-item":""}`} onClick={() => handleChange(itemPage)}><VideoLibraryRoundedIcon className="video-thumbnail" /></div>
                break;
            case 'pdf':
                return <div className={`text-align-center thumbnail-item ${itemPage === page?"selected-item":""}`} onClick={() => handleChange(itemPage)}><PictureAsPdfRoundedIcon className="pdf-thumbnail" /></div>
                break;
            default:
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
                                return thumbnailRenderBasedOnType(media.type, media.url, item.page);
                                return <img src={media.url} alt="image" className={`thumbnail-item ${item.page === page?"selected-item":""}`} onClick={() => handleChange(item.page)} />
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