import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://quiz-web-omega-two.vercel.app/", // эсвэл deployed domain
});

export default axiosInstance;