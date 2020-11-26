import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.43.54:3333' //IPv4 do PC "Local" (Windows usar o comando ipconfig) ou nuvem
});

export default api;