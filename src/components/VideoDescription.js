import React, { useState, useEffect } from 'react';

const VideoDescription = ({ text }) => {

    const [descriptionDisplayed, setDescriptionDisplayed] = useState(false);

    const displayText = (event) => {
        setDescriptionDisplayed(!descriptionDisplayed);
    }

    return (
        <div className='p-5 rounded-md shadow-2xl bg-zinc-700'>
            <p className={
                'text-slate-300 whitespace-pre-wrap overflow-hidden'
                + (descriptionDisplayed ? ' h-full pb-4' : ' h-12 border-zinc-500 border-b-2 pb-12')
            }>
                {text}
            </p>
            <button
                className='ml-auto transition-all shadow-md hover:shadow-2xl mt-4 py-1 px-3 bg-teal-600 hover:bg-teal-500 text-zinc-100 rounded-md font-bold'
                onClick={displayText}
            >
                {descriptionDisplayed ? 'See less' : 'See more'}
            </button>
        </div>
    );
}

export default VideoDescription;