import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4499/api",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export default api;
