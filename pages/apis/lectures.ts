import { serverAxios } from "libs/axios";

const PREFIX_URL = "/lectures";

export const postProcessResult = async () => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/search`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.data;
  } catch (err) {
    return null;
  }
};
