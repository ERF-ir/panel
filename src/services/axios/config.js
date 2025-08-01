import axios from "axios";

export  const  axiosRequest = axios.create({
    baseURL: 'https://proerf.ir/api/',
    headers: {'Content-Type': 'application/json'},
});