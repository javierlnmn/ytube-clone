import React from 'react';

const Footer = ({ searchVideo }) => {

    return (
        <div className='p-5 bg-zinc-900 mt-28'>
            <div className='my-6 mx-auto w-10/12 max-w-7xl lg:grid grid-cols-2 gap-32'>
                
                <p className='text-zinc-500 whitespace-pre-wrap'>
                    Introducing "Green YouTube" (or "ytube-clone") - a React-based application developed for educational purposes.<br/><br/>
                    Green YouTube is a personal project aimed at providing a hands-on learning experience with React, one of the most popular JavaScript frameworks for building user interfaces. As an aspiring developer, the creator of Green YouTube sought to gain a deeper understanding of React's core concepts and explore its capabilities in the context of building a YouTube-inspired application.<br/><br/>
                    With Green YouTube, users can explore a simplified version of the familiar YouTube interface, allowing them to search for videos, watch them, and interact with the comment section. While the app may not provide the full range of features available on the official YouTube platform, it serves as a practical exercise in applying React fundamentals such as component composition, state management, and API integration.<br/><br/>
                    By building Green YouTube, the developer gained valuable experience in working with React's component-based architecture, handling asynchronous data fetching, and managing application state. This project not only served as a platform for honing technical skills but also provided insights into the challenges and considerations involved in building modern web applications.<br/><br/>
                    Overall, Green YouTube (ytube-clone) stands as a testament to the developer's commitment to continuous learning and exploration, showcasing their dedication to mastering React and acquiring real-world development skills.
                </p>
                <nav className='flex flex-col gap-6 mt-6 lg:mt-0'>
                    <p className='text-teal-500 hover:text-teal-300 font-extrabold text-lg'><a href='https://github.com/javierlnmn' className='hover:underline hover:cursor-pointer'>My Github</a></p>
                    <p className='text-teal-500 hover:text-teal-300 font-extrabold text-lg'><a onClick={() => {searchVideo('Despacito')}} className='hover:underline hover:cursor-pointer'>Despacito</a></p>
                    <p className='text-teal-500 hover:text-teal-300 font-extrabold text-lg'><a className='hover:underline hover:cursor-pointer'>Seek for a random video</a></p>
                    <p className='text-teal-500 hover:text-teal-300 font-extrabold text-lg'><a onClick={() => {searchVideo('Me at the zoo')}} className='hover:underline hover:cursor-pointer'>First Youtube video</a></p>
                </nav>
            </div>
        </div>
    );
}

export default Footer;