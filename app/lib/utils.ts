import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://quiz-web-lilac-five.vercel.app"
});

export default axiosInstance;