import React from 'react';

const Footer = ({ content }) => {
    return (
        <div className='p-5 bg-zinc-900 text-center font-bold text-4xl'>
            <span className='text-green-300'>{ content }</span>
        </div>
    );
}

export default Footer;