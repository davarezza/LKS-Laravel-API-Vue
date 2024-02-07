// axiosConfig.js

import axios from "axios";

// Instance Axios untuk endpoint CRUD
const http = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
});


export { http };