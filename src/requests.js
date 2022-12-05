import axios from 'axios';

//Gathers API Key

const APIKey = axios
.get(`https://project-2-api.herokuapp.com/register`)
.then((pull) => {
    let APIKey = pull.data.api_key;
    return APIKey;
})

const requests = {
    getVideosSidebar: `/videos${APIKey}`,
    getVideosMain: `/videos/:id${APIKey}`
}

export default requests;
