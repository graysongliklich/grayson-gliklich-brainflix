import axios from "axios";

//Gathers API Key

let APIKey;

let ID;

const requests = {
    getVideosSidebar: `/videos`,
    getVideosMain: `/videos/:${ID}`
};

export default requests;
