import axios from "axios";

export const Api = axios.create({
  baseURL: "localhost:8095/api",
  timeout: 12000
});
