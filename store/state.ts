import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { LectureResultData } from "types/lectures.type";
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
