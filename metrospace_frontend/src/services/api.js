import axios from "axios";

const API = axios.create({
baseURL:"https://metrospace-project-1.onrender.com/api"
});

export default API;