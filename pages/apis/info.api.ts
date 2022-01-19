import { serverAxios } from "libs/axios";
import { LectureCategoryData, ResponseCategoryData, SkillTagList } from "types/info.type";

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

export const getSkillTagList = async (id: number): Promise<SkillTagList[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/${id}/tags`);

    return data.data;
  } catch (err) {
    return null;
  }
};
