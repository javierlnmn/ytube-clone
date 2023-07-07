import React, { useEffect, useState } from 'react';

import youtube from './../api/youtube';

import CommentItem from './CommentItem';

const VideoComments = ({ video }) => {

    const videoId = video.id.videoId;
    const [videoComments, setVideoComments] = useState([]);


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
        setVideoComments(comments.map((comment) => <CommentItem key={comment.id} comment={comment} />));
    }

    useEffect(() => {
        fetchVideoComments();
    }, [video]);

    return (
        <div className='mt-3 pt-3 border-t-[1px] border-t-zinc-600'>
            <h2 className='text-zinc-100 text-xl font-extrabold'>Comments</h2>
            {videoComments}
        </div>
    );
}

export default VideoComments;