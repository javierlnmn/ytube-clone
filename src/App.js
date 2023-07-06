import React from 'react';
import './index.css';

import youtube from './api/youtube';

import { SearchBar, VideoDetail, VideoList, Header, Footer } from './components'; 

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    fetchVideos = async (searchTerm) => {

        const response = await youtube.get(
            'search',
            {
                params: { 
                    part: 'snippet',
                    type: 'video',
                    maxResults: 10,
                    q: searchTerm,
                }
            }
        );

        let videoSnippets = response.data.items;
        
        let videoStatistics = (await this.fetchVideoStatistics(videoSnippets.map((video) => { return video.id.videoId}).toString())).data.items;

        this.mergeVideosData(videoSnippets, videoStatistics);

    }

    fetchVideoStatistics = async (videoIds) => {
        const response = await youtube.get(
            'videos',
            {
                params: {
                    part: 'statistics',
                    id: videoIds
                }
            }
        );

        return response;
    }

    mergeVideosData = (snippets, statistics) => {

        let videos = [];

        for(let i = 0; i < snippets.length; i++) {
            snippets[i]['statistics'] = statistics[i].statistics;
            let video = snippets[i];
            videos.push(video);
        }
        
        this.setState({
            videos: videos.slice(1),
            selectedVideo: videos[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    render() {

        const { selectedVideo, videos } = this.state;

        return (
            <main className='bg-zinc-800' >
                <Header content={'Green YTube'} />
                
                <div className='mt-7 w-11/12 max-w-screen-2xl my-0 mx-auto justify-center '>
                    <SearchBar onFormSubmit={ this.fetchVideos }/>

                    <div className='flex flex-col xl:flex-row gap-5'>
                        <div className="flex-1">
                        { selectedVideo ? <VideoDetail video={ selectedVideo } /> : null }
                        </div>
                        <div>
                            <VideoList videos={ videos } onVideoSelect={ this.onVideoSelect } />
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        );
    }
}

export default App;