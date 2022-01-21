import { LectureDataListType, ResponseLectureDataType } from "types/info.type";
import {
  CurrentCompareData,
  IProcessData,
  LectureCompareRequest,
  LectureRankData,
  LecturesResultAllData,
  PostLectureReportData,
  ProcessDataState,
  ResponseResultData,
  ResponseResultProperty,
} from "types/lectures.type";

import { serverAxios } from "./index";

const PREFIX_URL = "/lectures";

interface IPostRequest {
  categoryId: number;
  skill: string;
  email: string;
}
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
    console.log(id);
    const { data } = await serverAxios.get(`${PREFIX_URL}/result/${id}`);
    const { lectures, category, skill }: ResponseResultProperty = data.data;

    console.log(lectures);
    const result = lectures.map((response: ResponseResultData) => {
      return {
        name: response.name,
        time: response.time,
        price: response.price,
        replay: response.duration,
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
    throw new Error("Failed to load custom process result");
  }
};

export const postLectureRequest = async (postData: IPostRequest) => {
  try {
    const { data } = await serverAxios.post(`${PREFIX_URL}/request`, postData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.status === 200) {
      console.log(data);

      return data.data;
    }
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

export const getLectureWeeklyRank = async (): Promise<LectureRankData[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/rank`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.data;
  } catch (err) {
    throw new Error("Failed to load lecture weekly rank");
  }
};

export const getCurrentLectureData = async (): Promise<CurrentCompareData[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/compare`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.data;
  } catch (err) {
    throw new Error("Failed to load current compare lecture");
  }
};
