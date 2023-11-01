import axios from "axios";

export const ApiManager = axios.create({
  baseURL: "http://localhost:5000",
  responseType: "json",
  withCredentials: "true",
});
