import { atom } from "recoil";
import { LectureResultData } from "types/lectures.type";

export const totalNumberState = atom({
  key: "totalNumberState",
  default: 250,
});

export const findNumberState = atom({
  key: "findNumberState",
  default: 3500,
});

export const requestNumberState = atom({
  key: "requestNumberState",
  default: 99,
});

export const lectureCategoryState = atom({
  key: "lectureCategoryState",
  default: null,
});

export const lectureResultState = atom<LectureResultData[] | null>({
  key: "lectureResultState",
  default: null,
});
