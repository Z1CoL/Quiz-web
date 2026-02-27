import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://quiz-web-omega-two.vercel.app"
});

export default axiosInstance;