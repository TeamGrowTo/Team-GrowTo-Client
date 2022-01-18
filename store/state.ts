import { atom } from "recoil";
import { LectureResultData } from "types/lectures.type";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const lectureCategoryState = atom({
  key: "lectureCategoryState",
  default: null,
});

export const lectureResultState = atom<LectureResultData[] | null>({
  key: "lectureResultState",
  default: null,
});

export const processState = atom({
  key: "processState",
  default: {
    category: "",
    skill: "",
    tags: [],
    timeAsc: undefined,
    priceAsc: undefined,
  },
  effects_UNSTABLE: [persistAtom],
});
