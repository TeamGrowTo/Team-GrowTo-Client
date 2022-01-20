import axios from "axios";

export const serverAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
});
