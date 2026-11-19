import axios from "axios";

const api = axios.create({
  baseURL:"https://task-bi5l.onrender.com",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
