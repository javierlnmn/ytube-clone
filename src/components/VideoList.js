import React from 'react';

import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video} onVideoSelect={ onVideoSelect } /> );
    
    return (listOfVideos);
}

export default VideoList;