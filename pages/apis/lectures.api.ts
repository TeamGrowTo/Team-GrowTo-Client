import { ResponseCurrentCompare } from "types/lectures.type";

import { serverAxios } from ".";

const PREFIX_URL = "/lectures";

export const getCurrentCompareLecture = async (): Promise<ResponseCurrentCompare[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/compare`);

    return data.map((response: ResponseCurrentCompare) => {
      return {
        lectureName: response.name,
        lectureSkill: response.skill,
      };
    });
  } catch (err) {
    throw new Error("Failed to load current compare lecture");
  }
};
