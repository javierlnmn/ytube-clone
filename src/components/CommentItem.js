import React, { useState, useEffect } from 'react';

import youtube from './../api/youtube';

import CommentReply from './CommentReply';

const CommentItem = ({ comment }) => {

    const [replies, setReplies] = useState([]);
    const [nextPageToken, setNextPageToken] = useState();

    const commentData = comment.snippet.topLevelComment.snippet;

    const commentPublishedAt = new Date(commentData.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const fetchReplies = async () => {

        const response = await youtube.get(
            'comments',
            {
                params: {
                    part: 'snippet',
                    parentId: comment.snippet.topLevelComment.id,
                    maxResults: 10,
                    order: 'relevance',
                    pageToken: nextPageToken,
                }
            }
        );

        let isNextPage = false;

        if (response.data.nextPageToken) isNextPage = response.data.nextPageToken;

        setNextPageToken(isNextPage);
        createReplies(response.data.items);

    }

    const createReplies = (replies) => {
        setReplies(replies.map((reply, id) => <CommentReply key={id} reply={reply} />));
    }

    const showReplies = () => {
        fetchReplies();
    }

    return (
        <div className='my-5 p-5 rounded-md shadow-2xl bg-zinc-700 text-zinc-100 flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <img className='rounded-full w-9 h-auto' src={commentData.authorProfileImageUrl} />
                <a className='hover:text-teal-400 transition all' href={commentData.authorChannelUrl}><p className='font-bold'>{commentData.authorDisplayName}</p></a>
                <p className='text-zinc-400 font-light ml-auto'>
                    {commentPublishedAt}
                </p>
            </div>
            <p className='whitespace-pre-wrap'>
                {commentData.textOriginal}
            </p>
            <div className='flex items-center gap-2'>
                <p className='font-bold text-teal-400'>{commentData.likeCount}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] fill-teal-400' viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" strokeWidth="0" />
                    <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" strokeWidth="0" />
                </svg>
            </div>
            {replies}
            {comment.snippet.totalReplyCount > 0 ?
                <button onClick={() => showReplies()} className='mr-auto transition-all shadow-md hover:shadow-2xl mt-4 py-1 px-3 bg-teal-600 hover:bg-teal-500 text-zinc-100 rounded-md font-bold'>See {nextPageToken ? 'replies' : 'more'} ({comment.snippet.totalReplyCount} in total) </button>


                :
                <p className='text-zinc-400 font-light'>This comment has no replies</p>
            }
        </div>
    );
}

export default CommentItem;