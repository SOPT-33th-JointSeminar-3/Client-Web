import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.dosopt-cds-web3.o-r.kr/",
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
