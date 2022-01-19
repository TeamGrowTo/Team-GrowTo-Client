import axios from "axios";
//임시 url
export const serverAxios = axios.create({
  baseURL: "http://localhost:5005/",
});
