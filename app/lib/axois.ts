import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://quiz-web-7hzt.vercel.app"
});

export default axiosInstance;