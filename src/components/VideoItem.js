import React from 'react';
import { VideoStatistics } from './';

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div
            className="mb-5 w-full self-center xl:w-[500px] shadow-lg grid grid-cols-9 rounded-md hover:shadow-2xl cursor-pointer"
            onClick={() => onVideoSelect(video)}
        >
            <img className="col-span-4 rounded-l-md w-full h-full object-cover" src={video.snippet.thumbnails.medium.url} alt="Thumbnail" />
            <div className="col-span-5 rounded-md flex flex-col start gap-3 xl:gap-0 p-3">
                <p className="font-bold cursor-pointer text-gray-100 truncate text-l">{video.snippet.title}</p>
                <p className="text-xs cursor-pointer text-gray-300 truncate">{video.snippet.channelTitle}</p>
                <span className="description text-sm text-gray-500 truncate">
                    {video.snippet.description}
                </span>
                <VideoStatistics id={video.id.videoId} likeCount={video.statistics.likeCount} viewCount={video.statistics.viewCount} />
            </div>
        </div>
    );
}

export default VideoItem;