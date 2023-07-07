import React from 'react';

const Header = ({ content }) => {
    return (
        <div className='p-5 bg-zinc-900 text-center font-bold text-4xl shadow-md'>
            <h1 className='text-teal-500'>{content}</h1>
        </div>
    );
}

export default Header;