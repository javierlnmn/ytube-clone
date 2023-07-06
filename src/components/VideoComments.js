import React, { useEffect, useState } from 'react';

import youtube from './../api/youtube';

import CommentItem from './CommentItem';

const VideoComments = ({ video }) => {

    const videoId = video.id.videoId;
    const [videoComments, setVideoComments] = useState();

    const fetchVideoComments = async () => {

        const response = await youtube.get(
            'commentThreads',
            {
                params: { 
                    part: 'snippet, replies',
                    videoId: videoId,
                    maxResults: 20,
                    order: 'relevance',
                }
            }
        );

        createComments(response.data.items);
    }

    const createComments = (comments) => {
        setVideoComments(comments.map((comment, id) => <CommentItem key={id} comment={comment} /> ));
    }
    
    useEffect(() => {
        fetchVideoComments();
    }, [video]);

    return (videoComments);
}

export default VideoComments;