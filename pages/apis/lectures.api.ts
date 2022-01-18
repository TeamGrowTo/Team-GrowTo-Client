import { ResponseWeeklyRank } from "types/lectures.type";

import { serverAxios } from ".";

const PREFIX_URL = "/lectures";

export const getLectureWeeklyRank = async (): Promise<ResponseWeeklyRank[] | null> => {
  try {
    const { data } = await serverAxios.get(`${PREFIX_URL}/rank`);

    return data.map((response: ResponseWeeklyRank) => {
      return {
        lectureName: response.name,
        lectureSkill: response.skill,
        lectureNumber: response.number,
      };
    });
  } catch (err) {
    throw new Error("Failed to load lecture weekly rank");
  }
};
