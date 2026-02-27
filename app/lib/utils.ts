import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://quiz-web-omega-two.vercel.app/",
  // headers: {
  //   Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`,
  // },
});
