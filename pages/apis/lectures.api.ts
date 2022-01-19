import { CurrentLectureData } from "types/lectures.type";

import { serverAxios } from ".";

const PREFIX_URL = "/lectures";

export const getCurrentLectureData = async (): Promise<CurrentLectureData[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/compare`);

    return data.map((response: CurrentLectureData) => {
      return {
        id: response.id,
        name: response.name,
        skill: response.skill,
      };
    });
  } catch (err) {
    throw new Error("Failed to load current compare lecture");
  }
};
