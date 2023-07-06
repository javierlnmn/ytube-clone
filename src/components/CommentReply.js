import React from 'react';

const CommentReply = ({ reply }) => {

    console.log(reply);

    return (
        <p>
            {reply.snippet.textOriginal}
        </p>
    );
}

export default CommentReply;