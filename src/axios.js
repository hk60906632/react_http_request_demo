import axios from 'axios';

//this is instance of axios, allow you to set different baseURL with the default axios

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/hk60906632/my_dummy_jason_server'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';
//instance.interceptors.request...

export default instance;