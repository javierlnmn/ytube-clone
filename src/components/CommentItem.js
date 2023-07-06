import React from 'react';

const CommentItem = ({ comment }) => {

    return (
        <p className='my-4 text-zinc-100 bg-zinc-700 p-5'>
            {comment.snippet.topLevelComment.snippet.textOriginal}
        </p>
    );
}

export default CommentItem;