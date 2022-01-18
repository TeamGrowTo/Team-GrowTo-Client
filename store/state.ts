import { atom } from "recoil";
import { LectureCategoryData, LectureSkillData } from "types/info.type";
import { LectureResultData } from "types/lectures.type";

export const lectureCategoryState = atom<LectureCategoryData[] | null>({
  key: "lectureCategoryState",
  default: null,
});

export const lectureSkillState = atom<LectureSkillData[] | null>({
  key: "lectureSkillState",
  default: null,
});

interface CurrentCategory {
  id: number | null;
  categoryName: string | null;
}

export const currentCategoryState = atom<CurrentCategory | null>({
  key: "currentCategoryState",
  default: null,
});

interface CurrentSkill {
  id: number | null;
  skillName: string | null;
}

export const currentSkillState = atom<CurrentSkill | null>({
  key: "currentSkillState",
  default: null,
});

export const lectureResultState = atom<LectureResultData[] | null>({
  key: "lectureResultState",
  default: null,
});
