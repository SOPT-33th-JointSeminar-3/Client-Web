import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://13.125.7.142:8080/",
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
