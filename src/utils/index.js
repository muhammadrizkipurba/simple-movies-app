import axios from "axios";

const API_URL = 'https://www.omdbapi.com';
const API_KEY = 'ea6646b0';

const Axios = axios.create({
  baseURL: API_URL
});

export {
  Axios,
  API_KEY,
};