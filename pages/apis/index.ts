import axios from "axios";
//임시 url
export const serverAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});
