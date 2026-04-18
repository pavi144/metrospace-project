// import axios from "axios";

// const API = axios.create({
// baseURL:"https://metrospace-project-1.onrender.com/api"
// });

// export default API;

import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;