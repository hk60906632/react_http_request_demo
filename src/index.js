import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//this is the default axios
axios.defaults.baseURL = 'https://my-json-server.typicode.com/hk60906632/my_dummy_jason_server';

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log(request);
    //this is global, all components and all area of your app are covered by this
    //always have to return the request in the interceptors, otherwise you will block the request
    //do something before request is sent
    return request;
}, error => {
    console.log(error);
    //this still forward it to our request where we wrote it in a component where 
    //we can handle it again with the catch method
    //this makes sense if you have some local task you want to do like show something on the UI
    //but also globally to log it in the log file which send to a server or something

    //do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    //Edit request config
    //Do something with response data
    return response;
},error => {
    console.log(error);

    //Do something with response error
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
