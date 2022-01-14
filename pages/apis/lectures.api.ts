import { PostLectureReportData } from "types/lectures.type";

import { serverAxios } from "./index";

const PREFIX_URL = "/lectures";

export const postLectureReport = async (data: PostLectureReportData): Promise<void | null> => {
  try {
    await serverAxios.post(`${PREFIX_URL}/report`, {
      information: data.difference,
      name: data.lectureName,
      explanation: data.description,
      email: data.email,
    });

    // return message;
  } catch (err) {
    throw new Error("서버 내 오류");
  }
};
