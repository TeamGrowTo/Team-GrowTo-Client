import { serverAxios } from "libs/axios";
import {
  LectureCategoryData,
  LectureDataListType,
  LectureSkillData,
  ResponseCategoryData,
  ResponseLectureDataType,
  ResponseSkillData,
  SkillTagList,
} from "types/info.type";

const PREFIX_URL = "/info";

export const getLectureCategoryData = async (): Promise<LectureCategoryData[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/categories`);

    return data.map((response: ResponseCategoryData) => {
      return { id: response.id, categoryName: response.name };
    });
  } catch (err) {
    throw new Error("Failed to load lecture category");
  }
};

export const getLectureSkillData = async (id: number): Promise<LectureSkillData[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${id}/skills`);

    return data.map((response: ResponseSkillData) => {
      return { id: response.id, categoryName: response.name };
    });
  } catch (err) {
    throw new Error("Failed to load lecture skill");
  }
};

export const getSkillTagList = async (id: number): Promise<SkillTagList[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${id}/tags`);

    return data.data;
  } catch (err) {
    return null;
  }
};

export const getLectureDataList = async (
  categoryId: number | null,
  skillId: number | null,
): Promise<LectureDataListType | null> => {
  try {
    const apiResponse = await serverAxios.get(`${PREFIX_URL}/lectures/${categoryId}/${skillId}`, {
      headers: {
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
    throw new Error("강의 정보를 불러오는데 문제가 발생했습니다.");
  }
};

//sorting api연결하기
