import React from 'react';

const CommentItem = ({ comment }) => {

    const commentData = comment.snippet.topLevelComment.snippet;

    return (
        <div className='my-5 p-5 rounded-md shadow-2xl bg-zinc-700 text-zinc-100 flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <img className='rounded-full w-9 h-auto' src={commentData.authorProfileImageUrl} />
                <a className='hover:text-teal-400 transition all' href={commentData.authorChannelUrl}><p className='font-bold'>{commentData.authorDisplayName}</p></a>
            </div>
            <p className=''>
                {commentData.textOriginal}
            </p>
        </div>
    );
}

export default CommentItem;