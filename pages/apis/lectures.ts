import { serverAxios } from "libs/axios";
import { IProcessData } from "types/lecture.type";
const PREFIX_URL = "/lectures";

export const postProcessResult = async (processData: IProcessData) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/search`, processData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.data;
  } catch (err) {
    return null;
  }
};
