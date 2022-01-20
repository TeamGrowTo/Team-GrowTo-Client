import {
  LectureCompareRequest,
  LecturesResultAllData,
  PostLectureReportData,
  ProcessDataState,
  ResponseResultData,
  ResponseResultProperty,
} from "types/lectures.type";

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

export const getLectureResultData = async (
  id: string | string[] | undefined,
): Promise<LecturesResultAllData | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/result/${id}`);
    const { lectures, category, skill }: ResponseResultProperty = data;

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

    return {
      result,
      category: { id: category.id, name: category.name },
      skill: { id: skill.id, name: skill.name },
    };
  } catch (err) {
    throw new Error("Failed to load lecture best result");
  }
};

export const postLectureRequest = async (): Promise<LectureCompareRequest | null> => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/request`);

    return data((response: LectureCompareRequest) => {
      return {
        categoryId: response.categoryId,
        skill: response.skill,
        email: response.email,
      };
    });
  } catch (err) {
    throw new Error("Failed to submit lecture compare request");
  }
};

export const postProcessResult = async (processData: ProcessDataState) => {
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
