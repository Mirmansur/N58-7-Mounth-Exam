import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Authorization: `${localStorage.getItem("access_token")}`,
  },
  timeout: 10000,
});

export default api;
