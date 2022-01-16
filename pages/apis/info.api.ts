import {
  LectureCategoryData,
  LectureSkillData,
  ResponseCategoryData,
  ResponseSkillData,
} from "types/info.type";

import { serverAxios } from "./index";

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
