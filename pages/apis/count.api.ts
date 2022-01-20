import { ResponseFindNumber, ResponseRequestNumber, ResponseTotalNumber } from "types/count.type";

import { serverAxios } from "./index";

const PREFIX_URL = "/count";

export const getLectureTotalNumber = async (): Promise<number | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/total`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.data;
  } catch (err) {
    throw new Error("Failed to load lecture total number");
  }
};

export const getLectureFindNumber = async (): Promise<number | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/find`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.data;
  } catch (err) {
    throw new Error("Failed to load lecture find number");
  }
};

export const getLectureRequestNumber = async (): Promise<number | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/request`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.data;
  } catch (err) {
    throw new Error("Failed to load lecture request number");
  }
};
