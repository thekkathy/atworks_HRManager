import axios from 'axios';

export default axios.create({
    baseURL: "http://35.173.125.189:8080/"
    //baseURL: "http://localhost:8000/"
})