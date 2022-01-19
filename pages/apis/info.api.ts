import {
  LectureCategoryData,
  LectureDataListType,
  ResponseCategoryData,
  ResponseLectureDataType,
} from "types/info.type";

import { serverAxios } from "./index";

const PREFIX_URL = "/info";

export const getLectureCategoryData = async (): Promise<LectureCategoryData[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/categories`);

    return data.map((response: ResponseCategoryData) => {
      return { categoryName: response.name };
    });
  } catch (err) {
    throw new Error("Failed to load lecture category");
  }
};

export const getLectureDataList = async (
  categoryId: number,
  skillId: number,
): Promise<LectureDataListType[] | null> => {
  try {
    const apiResponse = await serverAxios.get(`${PREFIX_URL}/lectures/${categoryId}/${skillId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (apiResponse.status === 200) {
      const { data } = apiResponse;

      return data.map((data: ResponseLectureDataType) => {
        return {
          LectureTitle: data.name,
          time: data.time,
          price: data.price,
          reviewTime: data.reviewTime,
          startYear: data.startYear,
          tags: data.tags,
          url: data.url,
        };
      });
    } else {
      throw new Error("강의 정보를 불러오는데 문제가 발생했습니다.");
    }
  } catch (err) {
    throw new Error("강의 정보를 불러오는데 문제가 발생했습니다.");
  }
};

//sorting api연결하기
