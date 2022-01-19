import {
  LectureCompareRequest,
  LecturesResultAllData,
  ResponseResultData,
  ResponseResultProperty,
} from "types/lectures.type";

import { serverAxios } from "./index";

const PREFIX_URL = "/info";

export const getLectureResultData = async (
  id: string | string[] | undefined,
): Promise<LecturesResultAllData | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/result/${id}`);
    const { lectures, categoryId, skillId }: ResponseResultProperty = data;

    const result = lectures.map((response: ResponseResultData) => {
      return {
        name: response.name,
        time: response.time,
        price: response.price,
        replay: response.replay,
        answer: response.reviewTime,
        createdDate: response.startYear,
        tags: response.tags,
        url: response.url,
      };
    });

    return { result, categoryId, skillId };
  } catch (err) {
    throw new Error("Failed to load lecture best result");
  }
};

export const postLectureRequest = async (): Promise<LectureCompareRequest | null> => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/request`);

    return data((response: LectureCompareRequest) => {
      return {
        requestCategoryId: response.categoryId,
        requestSkill: response.skill,
        requestEmail: response.email,
      };
    });
  } catch (err) {
    throw new Error("Failed to submit lecture compare request");
  }
};
