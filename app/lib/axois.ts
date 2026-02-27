import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // эсвэл deployed domain
});

export default axiosInstance;