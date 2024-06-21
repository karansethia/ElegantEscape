import axios from "axios";
export const axiosReq = axios.create({
  baseURL: "http://localhost:3001/api/v1" || "",
  withCredentials: true,
});
