import React from 'react';

class VideoStatistics extends React.Component {

    state = {
        likesPercentage: 0,
    }

    formatNumberAbbreviated(number) {

        const billion = 1e9;
        const million = 1e6;
        const thousand = 1e3;

        if (number >= billion) {
            return (number / billion).toFixed(1) + 'B';
        } else if (number >= million) {
            return (number / million).toFixed(1) + 'M';
        } else if (number >= thousand) {
            return (number / thousand).toFixed(1) + 'k';
        } else {
            return number;
        }

    }

    componentDidMount() {
        this.setLikesPercentage();
    }

    setLikesPercentage = () => {
        this.setState({
            likesPercentage: this.props.likeCount * 100 / this.props.viewCount,
        });
    }

    render() {

        const keyframesName = 'fillBar' + this.props.id;

        const keyframes = `@keyframes ${keyframesName} {
            0% { width: 0; }
            100% { width: ${this.state.likesPercentage}%; }
        }`;

        return (
            <div className='flex flex-row gap-2 items-center'>
                <style>{keyframes}</style>
                <div className='w-full bg-teal-200 rounded-full h-1.5 dark:bg-teal-900 mr-2'>
                    <div
                        className='bg-teal-600 h-full rounded-full dark:bg-teal-500'
                        style={{
                            animation: '1.5s ease forward',
                            width: this.state.likesPercentage + '%',
                            animationName: keyframesName,
                        }}
                    />
                </div>
                <p className='text-white text-xs'>{this.formatNumberAbbreviated(this.props.viewCount)}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px] fill-gray-100' viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
                <p className='text-white text-xs'>{this.formatNumberAbbreviated(this.props.likeCount)}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] h-[30px] fill-gray-100' viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M13 3a3 3 0 0 1 2.995 2.824l.005 .176v4h2a3 3 0 0 1 2.98 2.65l.015 .174l.005 .176l-.02 .196l-1.006 5.032c-.381 1.626 -1.502 2.796 -2.81 2.78l-.164 -.008h-8a1 1 0 0 1 -.993 -.883l-.007 -.117l.001 -9.536a1 1 0 0 1 .5 -.865a2.998 2.998 0 0 0 1.492 -2.397l.007 -.202v-1a3 3 0 0 1 3 -3z" strokeWidth="0" />
                    <path d="M5 10a1 1 0 0 1 .993 .883l.007 .117v9a1 1 0 0 1 -.883 .993l-.117 .007h-1a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-7a2 2 0 0 1 1.85 -1.995l.15 -.005h1z" strokeWidth="0" />
                </svg>
            </div>
        );
    }

}

export default VideoStatistics;