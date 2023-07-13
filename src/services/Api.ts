import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://localhost:7172/api/",
});

export default api;
