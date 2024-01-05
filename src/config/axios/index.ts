import axios, { AxiosInstance } from 'axios';

const url : string = 'http://localhost:8080/notificator-api';

const api : AxiosInstance = axios.create({
  baseURL: url,
});

export default api;
