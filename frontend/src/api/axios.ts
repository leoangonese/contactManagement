// src/api/axios.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000/';

export const api = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});
