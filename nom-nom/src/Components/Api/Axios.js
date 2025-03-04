import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "https://127.0.0.1:5001/clone-d14cc/us-central1/api",
  baseURL: "http://localhost:5000/",
  // on render
  // baseURL: "https://amazon-api-deploy-do1s.onrender.com",
});

export { axiosInstance };
