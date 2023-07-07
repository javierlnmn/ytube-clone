import React, { useState, useEffect} from 'react';

import youtube from './../api/youtube';

import VideoDescription from './VideoDescription';
import VideoStatistics from './VideoStatistics';


const VideoDetail = ({ video }) => {

    const [videoDescription, setVideoDescription] = useState('');
    const [videoDate, setVideoDate] = useState('');

    const videoId = video.id.videoId
    const channelId = video.snippet.channelId
    
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    const channelSrc = `https://www.youtube.com/channel${channelId}/`

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
        setVideoDescription(response.data.items[0].snippet.description);
    }

    useEffect(() => {
        let videoDate = new Date(video.snippet.publishedAt).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
        setVideoDate(videoDate)
        fetchVideoDetails();
    }, [video]);

    return (
        <div className='xl:sticky top-7 mb-3 pb-3 xl:mb-5 xl:pb-0  border-b-[1px] xl:border-b-0 border-b-zinc-600'>
            <iframe  
                title={'videoPlayer'+videoId}
                className='w-full h-auto aspect-video'
                src={videoSrc}       
            />
            <h4 className='text-3xl text-slate-100 font-extrabold my-3  whitespace-pre-wrap'>{video.snippet.title}</h4>
            <p className='text-xl text-teal-500 font-extrabold my-3  whitespace-pre-wrap'><a className='hover:underline' href={channelSrc}>{video.snippet.channelTitle}</a></p>
            <div className='my-3'>
                <VideoStatistics id={video.id.videoId} likeCount={video.statistics.likeCount} viewCount={video.statistics.viewCount} />
            </div>
            <div className='my-3'>
                <p className='text-slate-100'>
                    Published <span className='font-extrabold'>{videoDate}</span>
                </p>
            </div>
            <div className='my-3'>
                <VideoDescription text={videoDescription} />
            </div>
        </div>
    );
}

export default VideoDetail;