import { LectureDataListType, ResponseLectureDataType } from "types/info.type";
import {
  IProcessData,
  LectureCompareRequest,
  LecturesResultAllData,
  PostLectureReportData,
  ProcessDataState,
  ResponseResultData,
  ResponseResultProperty,
} from "types/lectures.type";

import { serverAxios } from "./index";

const PREFIX_URL = "/lectures";

export const postLectureReport = async (
  requestData: PostLectureReportData,
): Promise<void | null> => {
  try {
    const { data } = await serverAxios.post(
      `${PREFIX_URL}/report`,
      {
        reasonId: requestData.difference + 1,
        lecture: requestData.lectureName,
        explanation: requestData.description,
        email: requestData.email,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
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

    console.log(data.data);

    return data.data;
  } catch (err) {
    return null;
  }
};

export const getLectureDataList = async (categoryId: number | null, skillId: number | null) => {
  try {
    const apiResponse = await serverAxios.get(`${PREFIX_URL}/${categoryId}/${skillId}/`);

    if (apiResponse.status === 200) {
      const { data } = apiResponse;

      return data.data.map((data: ResponseLectureDataType) => {
        return {
          LectureTitle: data.name,
          time: data.time,
          price: data.price,
          reviewTime: data.reviewTime,
          duration: data.duration,
          startYear: data.startYear,
          tags: data.tags,
          url: data.url,
        };
      });
    } else {
      throw new Error("강의 정보를 불러오는데 문제가 발생했습니다.");
    }
  } catch (err) {
    console.log(err);
  }
};

export const getSortingLectureDataList = async (
  categoryId: number | null,
  skillId: number | null,
  ordering: string,
) => {
  const apiResponse = await serverAxios.get(
    `${PREFIX_URL}/${categoryId}/${skillId}/?ordering=${ordering}`,
  );

  if (apiResponse.status === 200) {
    console.log(apiResponse);
    const { data } = apiResponse.data;

    console.log(data);

    return data.map((data: ResponseLectureDataType) => {
      return {
        LectureTitle: data.name,
        time: data.time,
        price: data.price,
        reviewTime: data.reviewTime,
        duration: data.duration,
        startYear: data.startYear,
        tags: data.tags,
        url: data.url,
      };
    });
  } else {
    throw new Error("강의 정보를 불러오는데 문제가 발생했습니다.");
  }
};
