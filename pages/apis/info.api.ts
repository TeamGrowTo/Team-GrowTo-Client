import { LectureCategoryData, ResponseCategoryData } from "types/info.type";

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
