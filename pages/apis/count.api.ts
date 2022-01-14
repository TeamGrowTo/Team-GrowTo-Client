import {
  LectureFindNumber,
  LectureRequestNumber,
  LectureTotalNumber,
  ResponseFindNumber,
  ResponseRequestNumber,
  ResponseTotalNumber,
} from "types/count.type";

import { serverAxios } from ".";

const PREFIX_URL = "/count";

export const getLectureTotalNumber = async (): Promise<LectureTotalNumber | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/total`);

    return data((response: ResponseTotalNumber) => {
      return { lectureTotalNumber: response.totalNumber };
    });
  } catch (err) {
    throw new Error("서버 내 오류");
  }
};

export const getLectureFindNumber = async (): Promise<LectureFindNumber | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/find`);

    return data((response: ResponseFindNumber) => {
      return { lectureFindNumber: response.findNumber };
    });
  } catch (err) {
    throw new Error("서버 내 오류");
  }
};

export const getLectureRequestNumber = async (): Promise<LectureRequestNumber | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/request`);

    return data((response: ResponseRequestNumber) => {
      return { lectureRequestNumber: response.requestNumber };
    });
  } catch (err) {
    throw new Error("서버 내 오류");
  }
};
