import { atom } from "recoil";
import { LectureCategoryData, LectureSkillData } from "types/info.type";

export const lectureCategoryState = atom<LectureCategoryData[] | null>({
  key: "lectureCategoryState",
  default: null,
});

export const lectureSkillState = atom<LectureSkillData[] | null>({
  key: "lectureSkillState",
  default: null,
});
