import axios from 'axios';

const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
    baseURL: youtubeApiUrl,
    params: {
        key: apiKey,
    },
});