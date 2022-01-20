import axios from "axios";
//임시 url
export const serverAxios = axios.create({
  baseURL: "https://asia-northeast3-team---grow-to.cloudfunctions.net/api",
});
