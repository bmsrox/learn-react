import axios from 'axios';

const api = axios.create({
    baseURL: "https://twitter-backend-clone.herokuapp.com"
});

export default api;