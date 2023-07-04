import React, { useState, useEffect} from 'react';

import youtube from './../api/youtube';


const VideoDetail = ({ video }) => {

    const [videoDetails, setVideoDetails] = useState();

    const videoId = video.id.videoId
    
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    const fetchVideoDetails = async () => {
        const response = await youtube.get(
            'videos',
            {
                params: { 
                    part: 'id, snippet',
                    id: videoId,
                }
            }
        );

        setVideoDetails(response.data.items[0])
    }

    useEffect(() => {
        fetchVideoDetails();
    }, [video]);

    return (
        <div className='xl:sticky top-7 mb-3 pb-3 border-b-[1px] xl:border-b-0 border-b-slate-600'>
            <iframe  
                title={'videoPlayer'+videoId}
                className='w-full h-auto aspect-video'
                src={videoSrc}       
            />
            <h4 className='text-3xl text-slate-100 font-extrabold my-3'>{video.snippet.title}</h4>
            <p className='text-xl text-teal-500 font-extrabold my-3'>{video.snippet.channelTitle}</p>
            <p className='text-l text-slate-400'>{videoDetails.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;