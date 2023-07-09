import React, { useEffect, useState } from 'react';

import youtube from './../api/youtube';

import CommentItem from './CommentItem';

const VideoComments = ({ video }) => {

    const videoId = video.id.videoId;
    const [videoComments, setVideoComments] = useState([]);
    const [nextPageToken, setNextPageToken] = useState();

    const fetchVideoComments = async () => {

        const response = await youtube.get(
            'commentThreads',
            {
                params: {
                    part: 'snippet, replies',
                    videoId: videoId,
                    maxResults: 20,
                    order: 'relevance',
                    pageToken: nextPageToken,
                }
            }
        );

        setNextPageToken(response.data.nextPageToken);
        addComments(response.data.items);

    }

    const addComments = (comments) => {
        setVideoComments(prevComments => [...prevComments, ...comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)]);
    }

    const seeMoreComments = () => {
        if (nextPageToken) fetchVideoComments();
    }

    useEffect(() => {
        setVideoComments([]);
        fetchVideoComments();
    }, [video]);

    return (
        <div className='mt-3 pt-3 border-t-[1px] border-t-zinc-600'>
            <h2 className='text-zinc-100 text-xl font-extrabold'>Comments ({video.statistics.commentCount})</h2>
            {videoComments}
            { nextPageToken ?
                <button className='transition-all shadow-md hover:shadow-2xl py-1 px-3 bg-teal-600 hover:bg-teal-500 text-zinc-100 rounded-md font-bold' onClick={seeMoreComments}>See more </button>
                :
                <p className='text-zinc-500 font-light'>There are no more comments</p>
            }
        </div>
    );
}

export default VideoComments;