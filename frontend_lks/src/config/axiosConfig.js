// axiosConfig.js

import axios from "axios";

// Instance Axios untuk endpoint CRUD
const httpCrud = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
});

// Instance Axios untuk endpoint login
// const httpAuth = axios.create({
//   baseURL: 'http://localhost/api/v1',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
// });

export { httpCrud };
