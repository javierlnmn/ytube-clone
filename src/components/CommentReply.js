import React from 'react';

const CommentReply = ({ reply }) => {

    const replyData = reply.snippet;

    const replyPublishedAt = new Date(replyData.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className='p-4 rounded-md shadow-2xl bg-zinc-600 text-zinc-100 flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <img className='rounded-full w-7 h-auto' src={replyData.authorProfileImageUrl} alt='' />
                <a className='hover:text-teal-400 transition all' href={replyData.authorChannelUrl}><p className='font-bold'>{replyData.authorDisplayName}</p></a>
                <p className='text-zinc-400 font-light ml-auto'>
                    {replyPublishedAt}
                </p>
            </div>
            <p className='whitespace-pre-wrap'>
                {replyData.textOriginal}
            </p>
            <div className='flex items-center gap-2'>
                <p className='font-bold text-teal-400'>{replyData.likeCount}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[20px] h-[20px] fill-teal-400' viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" strokeWidth="0" />
                    <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" strokeWidth="0" />
                </svg>
            </div>
        </div>
    );
}

export default CommentReply;