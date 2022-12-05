import axios from 'axios';

const instance = axios.create({
    baseURL: "https://project-2-api.herokuapp.com",
});

export default instance;