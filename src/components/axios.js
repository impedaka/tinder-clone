import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend2410.herokuapp.com',
});

export default instance;