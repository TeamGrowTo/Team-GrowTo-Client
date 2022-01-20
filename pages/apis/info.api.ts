import {
  LectureCategoryData,
  LectureDataListType,
  LectureSkillData,
  ResponseCategoryData,
  ResponseLectureDataType,
  ResponseSkillData,
  SkillTagList,
} from "types/info.type";

import { serverAxios } from "./index";

const PREFIX_URL = "/info";

export const getLectureCategoryData = async (): Promise<LectureCategoryData[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/categories`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data.data.map((response: ResponseCategoryData) => {
      return { id: response.id, categoryName: response.name };
    });
  } catch (err) {
    throw new Error("Failed to load lecture category");
  }
};

export const getLectureSkillData = async (id: number): Promise<LectureSkillData[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${id}/skills`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(data);

    return data.data.map((response: ResponseSkillData) => {
      return { id: response.id, skillName: response.name };
    });
  } catch (err) {
    throw new Error("Failed to load lecture skill");
  }
};

export const getSkillTagList = async (id: number): Promise<SkillTagList[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${id}/tags`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.status === 200) {
      return data.data;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
