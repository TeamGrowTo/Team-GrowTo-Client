import { atom } from "recoil";
import { LectureResultData } from "types/lectures.type";

export const lectureCategoryState = atom({
  key: "lectureCategoryState",
  default: null,
});

export const lectureResultState = atom<LectureResultData[] | null>({
  key: "lectureResultState",
  default: null,
});
