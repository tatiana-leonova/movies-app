import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  // qvery параметры, которые должны передаваться с каждым запросом
  params: {
    apikey: process.env.VUE_APP_API_KEY,
    plot: "full" // для получения полной информации о фильме
  },
});

export default instance;
