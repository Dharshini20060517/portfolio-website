import axios from "axios";

const API = axios.create({
  baseURL: "https://portfolio-website-i9m0.onrender.com/api",
});

export default API;